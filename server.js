const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const root = __dirname;
const port = Number(process.env.PORT || 5500);
const kickToken = process.env.KICK_ACCESS_TOKEN || "";
const adminPassword = process.env.ADMIN_PASSWORD || "bunker-admin";
const dataDir = path.join(root, "data");
const statusPath = path.join(dataDir, "status.json");
const adminSessions = new Set();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png"
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  });
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function readJsonBody(request) {
  const body = await readRequestBody(request);
  if (!body) return {};
  return JSON.parse(body);
}

function ensureDataDir() {
  fs.mkdirSync(dataDir, { recursive: true });
}

function readStatusMap() {
  try {
    const statusMap = JSON.parse(fs.readFileSync(statusPath, "utf8"));
    return statusMap && typeof statusMap === "object" && !Array.isArray(statusMap) ? statusMap : {};
  } catch (error) {
    return {};
  }
}

function writeStatusMap(statusMap) {
  ensureDataDir();
  fs.writeFileSync(statusPath, `${JSON.stringify(statusMap, null, 2)}\n`);
}

function getBearerToken(request) {
  const authorization = request.headers.authorization || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

function isAdminRequest(request) {
  return adminSessions.has(getBearerToken(request));
}

async function handleAdminLogin(request, response) {
  try {
    const body = await readJsonBody(request);

    if (body.password !== adminPassword) {
      sendJson(response, 401, { ok: false, error: "Invalid password" });
      return;
    }

    const token = crypto.randomBytes(32).toString("hex");
    adminSessions.add(token);
    sendJson(response, 200, { ok: true, token });
  } catch (error) {
    sendJson(response, 400, { ok: false, error: "Invalid request" });
  }
}

function handleAdminLogout(request, response) {
  const token = getBearerToken(request);
  if (token) adminSessions.delete(token);
  sendJson(response, 200, { ok: true });
}

function handleStatus(request, response) {
  sendJson(response, 200, { ok: true, statuses: readStatusMap() });
}

async function handleStatusUpdate(request, response) {
  if (!isAdminRequest(request)) {
    sendJson(response, 401, { ok: false, error: "Admin required" });
    return;
  }

  const match = new URL(request.url, `http://${request.headers.host}`).pathname.match(/^\/api\/players\/(\d+)\/status$/);
  const playerId = match ? match[1] : "";

  if (!playerId) {
    sendJson(response, 404, { ok: false, error: "Not found" });
    return;
  }

  try {
    const body = await readJsonBody(request);
    if (!["alive", "dead"].includes(body.status)) {
      sendJson(response, 400, { ok: false, error: "Invalid status" });
      return;
    }

    const statuses = readStatusMap();
    statuses[playerId] = body.status;
    writeStatusMap(statuses);
    sendJson(response, 200, { ok: true, id: Number(playerId), status: body.status, statuses });
  } catch (error) {
    sendJson(response, 400, { ok: false, error: "Invalid request" });
  }
}

function normalizeKickPayload(payload) {
  const data = Array.isArray(payload?.data) ? payload.data[0] : payload?.data || payload;
  const livestream = data?.livestream || data?.stream || data?.current_livestream;

  return {
    ok: true,
    is_live: Boolean(data?.is_live || livestream?.is_live || livestream?.id || livestream?.session_title),
    title: livestream?.session_title || livestream?.title || data?.stream_title || "",
    viewer_count: livestream?.viewer_count || livestream?.viewers || data?.viewer_count || 0
  };
}

async function requestJson(url, headers = {}) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`Kick responded ${response.status}`);
  return response.json();
}

async function handleKickLive(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const channel = String(url.searchParams.get("channel") || "").replace(/[^a-zA-Z0-9_-]/g, "");

  if (!channel) {
    sendJson(response, 400, { ok: false, error: "Missing channel" });
    return;
  }

  try {
    if (kickToken) {
      const payload = await requestJson(`https://api.kick.com/public/v1/channels/${channel}`, {
        Accept: "application/json",
        Authorization: `Bearer ${kickToken}`
      });
      sendJson(response, 200, normalizeKickPayload(payload));
      return;
    }

    const payload = await requestJson(`https://kick.com/api/v2/channels/${channel}`, {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0"
    });
    sendJson(response, 200, normalizeKickPayload(payload));
  } catch (error) {
    sendJson(response, 502, { ok: false, error: "Kick status unavailable" });
  }
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const decodedPath = decodeURIComponent(requestUrl.pathname);
  const routePath = decodedPath === "/" || decodedPath === "/admin" ? "index.html" : decodedPath;
  const filePath = path.normalize(path.join(root, routePath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.method === "POST" && request.url === "/api/admin/login") {
    handleAdminLogin(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/admin/logout") {
    handleAdminLogout(request, response);
    return;
  }

  if (request.method === "GET" && request.url === "/api/status") {
    handleStatus(request, response);
    return;
  }

  if (request.method === "PATCH" && request.url.match(/^\/api\/players\/\d+\/status$/)) {
    handleStatusUpdate(request, response);
    return;
  }

  if (request.url.startsWith("/api/kick-live")) {
    handleKickLive(request, response);
    return;
  }

  serveStatic(request, response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`El Bunker tracker running at http://127.0.0.1:${port}`);
});

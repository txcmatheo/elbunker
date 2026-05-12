const crypto = require("node:crypto");

const tokenMaxAgeMs = 24 * 60 * 60 * 1000;

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function sign(value) {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "bunker-admin";
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function createAdminToken() {
  const payload = base64url(JSON.stringify({
    role: "admin",
    exp: Date.now() + tokenMaxAgeMs
  }));
  return `${payload}.${sign(payload)}`;
}

function getBearerToken(request) {
  const authorization = request.headers.authorization || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : "";
}

function isValidAdminToken(token) {
  const [payload, signature] = String(token).split(".");
  if (!payload || !signature || sign(payload) !== signature) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.role === "admin" && Number(data.exp) > Date.now();
  } catch (error) {
    return false;
  }
}

function isAdminRequest(request) {
  return isValidAdminToken(getBearerToken(request));
}

module.exports = {
  createAdminToken,
  isAdminRequest
};

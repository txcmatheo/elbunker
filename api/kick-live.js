const { methodNotAllowed, sendJson } = require("./_lib/responses");

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

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    methodNotAllowed(response, ["GET"]);
    return;
  }

  const channel = String(request.query.channel || "").replace(/[^a-zA-Z0-9_-]/g, "");
  const kickToken = process.env.KICK_ACCESS_TOKEN || "";

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
};

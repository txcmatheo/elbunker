const { sendJson, methodNotAllowed } = require("./_lib/responses");
const { readStatusMap } = require("./_lib/supabase");

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    methodNotAllowed(response, ["GET"]);
    return;
  }

  try {
    sendJson(response, 200, { ok: true, statuses: await readStatusMap() });
  } catch (error) {
    sendJson(response, 500, { ok: false, error: "Status storage unavailable" });
  }
};

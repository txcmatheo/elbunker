const { isAdminRequest } = require("../../_lib/auth");
const { methodNotAllowed, sendJson } = require("../../_lib/responses");
const { writePlayerStatus } = require("../../_lib/supabase");

module.exports = async function handler(request, response) {
  if (request.method !== "PATCH") {
    methodNotAllowed(response, ["PATCH"]);
    return;
  }

  if (!isAdminRequest(request)) {
    sendJson(response, 401, { ok: false, error: "Admin required" });
    return;
  }

  const playerId = Number(request.query.id);
  const status = request.body?.status;

  if (!Number.isInteger(playerId) || playerId < 1) {
    sendJson(response, 400, { ok: false, error: "Invalid player id" });
    return;
  }

  if (!["alive", "dead"].includes(status)) {
    sendJson(response, 400, { ok: false, error: "Invalid status" });
    return;
  }

  try {
    const statuses = await writePlayerStatus(playerId, status);
    sendJson(response, 200, { ok: true, id: playerId, status, statuses });
  } catch (error) {
    sendJson(response, 500, { ok: false, error: "Status storage unavailable" });
  }
};

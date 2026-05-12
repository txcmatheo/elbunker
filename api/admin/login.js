const { createAdminToken } = require("../_lib/auth");
const { methodNotAllowed, sendJson } = require("../_lib/responses");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    methodNotAllowed(response, ["POST"]);
    return;
  }

  const adminPassword = process.env.ADMIN_PASSWORD || "bunker-admin";

  if (request.body?.password !== adminPassword) {
    sendJson(response, 401, { ok: false, error: "Invalid password" });
    return;
  }

  sendJson(response, 200, { ok: true, token: createAdminToken() });
};

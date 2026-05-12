const { methodNotAllowed, sendJson } = require("../_lib/responses");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    methodNotAllowed(response, ["POST"]);
    return;
  }

  sendJson(response, 200, { ok: true });
};

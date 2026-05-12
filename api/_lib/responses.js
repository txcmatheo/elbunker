function sendJson(response, status, payload) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

function methodNotAllowed(response, allowedMethods) {
  response.setHeader("Allow", allowedMethods.join(", "));
  sendJson(response, 405, { ok: false, error: "Method not allowed" });
}

module.exports = {
  methodNotAllowed,
  sendJson
};

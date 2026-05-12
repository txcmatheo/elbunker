function getSupabaseConfig() {
  const url = (process.env.SUPABASE_URL || "").replace(/\/+$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || "";

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables");
  }

  return { url, key };
}

async function requestSupabase(path, options = {}) {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(payload?.message || payload?.error || `Supabase responded ${response.status}`);
  }

  return payload;
}

async function readStatusMap() {
  const rows = await requestSupabase("player_statuses?select=player_id,status&order=player_id.asc", {
    method: "GET"
  });

  return Object.fromEntries((rows || []).map((row) => [String(row.player_id), row.status]));
}

async function writePlayerStatus(playerId, status) {
  await requestSupabase("player_statuses?on_conflict=player_id", {
    method: "POST",
    headers: {
      Prefer: "resolution=merge-duplicates"
    },
    body: JSON.stringify({
      player_id: Number(playerId),
      status,
      updated_at: new Date().toISOString()
    })
  });

  return readStatusMap();
}

module.exports = {
  readStatusMap,
  writePlayerStatus
};

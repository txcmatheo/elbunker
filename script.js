const creators = [
  { id: 1, name: "Westcol", minecraftName: "Westcol" },
  { id: 2, name: "Samulx", minecraftName: "Samulx" },
  { id: 3, name: "Emikukis", minecraftName: "Emikukis" },
  { id: 4, name: "Komanche", minecraftName: "ElKomanche", minecraftUuid: "011740ce2a6b46a8934f7e3ff1c88661", skinTexture: "https://textures.minecraft.net/texture/241f2d7ce3002d512d75316ca8f8e2624cad20269dd538b785e92c2477c57f72" },
  { id: 5, name: "Nessv", minecraftName: "Nesszv", kickName: "nesszv" },
  { id: 6, name: "Juanfer la mata", minecraftName: "JuanferLaMata" },
  { id: 7, name: "Glogloking", minecraftName: "ElGlogloKing", minecraftUuid: "2b128f5ef99a45229a0ad61989b2e91e", skinTexture: "https://textures.minecraft.net/texture/92ab5b40430e51c7b975c81bca225a8e253e99d6f690f3f9efe79259305e0f40", kickName: "elglogloking" },
  { id: 8, name: "LauraTula", minecraftName: "LauraTulaa" },
  { id: 9, name: "Kassandra", minecraftName: "kassandraalvz00", minecraftUuid: "d55b4b036aaa43d689126d6513fd0544", skinTexture: "https://textures.minecraft.net/texture/badedae199159caa110fcd417d8ff7e0d9eebcecdf7d70e8eb2e6788ba5b48b0", kickName: "kassandra-alvarez" },
  { id: 10, name: "Sylvee", minecraftName: "Sylvee" },
  { id: 11, name: "TheAlex 30", minecraftName: "TheAlex30" },
  { id: 12, name: "AnsiChan", minecraftName: "AnsiChan" },
  { id: 13, name: "El mune", minecraftName: "ElMune" },
  { id: 14, name: "Pablots", minecraftName: "SoyPablots", minecraftUuid: "28cef8a8e41f4eb18cc878c5047c5558", skinTexture: "https://textures.minecraft.net/texture/1cf494c0e0210367b4c2912ab720428d91381d0bf615fadf92ef682efc06f7c6", kickName: "jpablots" },
  { id: 15, name: "Male Gonzalez", minecraftName: "Malecitaaa", minecraftUuid: "563cdcf58a664d46ac70325c0bec33d6", skinTexture: "https://textures.minecraft.net/texture/7d8005d4cdb8e10719843ba53a0ceb9068b6ac83060bc88d2b97a6b76bd5d67e", kickName: "soymalegonzalez" },
  { id: 16, name: "ItsMidna", minecraftName: "itsMidnaa", minecraftUuid: "53c18cff767a4e7db4c5cd36b54a0eb6", skinTexture: "https://textures.minecraft.net/texture/290eb9b357038f093ae4c3643a2b1b2abd86d25a897d1c55d2ce1e292319c728" },
  { id: 17, name: "Rubynavx", minecraftName: "Rubynavx" },
  { id: 18, name: "Puji2", minecraftName: "Puji2" },
  { id: 19, name: "MaryBlog", minecraftName: "MaryBlog" },
  { id: 20, name: "Diffrent", minecraftName: "Dlffrent", minecraftUuid: "b823aa920f244f03b609f04e2cb7999f", skinTexture: "https://textures.minecraft.net/texture/d95735f1139c4e5e78a9ff0ecaed814246427894530589d3ac24c7bf47825b11" },
  { id: 21, name: "Miigsh", minecraftName: "Migsh", kickName: "migsh" },
  { id: 22, name: "fairlygab", minecraftName: "fairlygab", kickName: "feirlygab" },
  { id: 23, name: "shadoune", minecraftName: "Shadoune777", minecraftUuid: "f0f919e9e4e642ce8a139cdd6c33e706", skinTexture: "https://textures.minecraft.net/texture/4ea787d1886503b1135e4deec29c3faba97aedbda194806e86105e3e7a3f7a1b", kickName: "shadoune666" },
  { id: 24, name: "Maggie", minecraftName: "tantipep", minecraftUuid: "bb64dd3f0c8a46e799e206fafabb38fb", skinTexture: "https://textures.minecraft.net/texture/30eca785d354997a0e0ca17f2b0b94c0b945fc57499fa350445e3195146c26df", kickName: "maggiepepe" },
  { id: 25, name: "Stephaniemx", minecraftName: "StephanieMX_", minecraftUuid: "dc546207985345c28e928a76ddbfc6af", skinTexture: "https://textures.minecraft.net/texture/94bb9e69488038591ea6f7757e9a1b0fff7a0ff0f8c9a46bb96e77c40edcdcd4" },
  { id: 26, name: "joethebeast", minecraftName: "joethebeast", skinTexture: "https://s.namemc.com/i/561b4827dea72dd8.png", kickName: "joe_the_beast" },
  { id: 27, name: "carlogato", minecraftName: "carlogato" },
  { id: 28, name: "leandrolasapa", minecraftName: "LeandroLaPapa", minecraftUuid: "065df5d6ca8945ad848853ee561caae6", skinTexture: "https://textures.minecraft.net/texture/5bff65172922c6077bcb474286849b5dc444a5fa79d3ed2ce410ec4f00ede613", kickName: "lasapaaaaa" },
  { id: 29, name: "fernandavaal", minecraftName: "fernandavaal" },
  { id: 30, name: "coll4zos", minecraftName: "coll4zos", minecraftUuid: "d6eca5b23fbc45f98f073bd6a9ebe8ee", skinTexture: "https://textures.minecraft.net/texture/73fbec93d58351022fe88aae4b5668ab758f2867921e02a6d13e55710b4a85b9" },
  { id: 31, name: "eypiedra", minecraftName: "eypiedra", kickName: "piedra" },
  { id: 32, name: "jilikat", minecraftName: "jilikatt" },
  { id: 33, name: "ichurrox", minecraftName: "iChurro", minecraftUuid: "56830c9af38f427496d09a980500e6ae", skinTexture: "https://textures.minecraft.net/texture/773a16f6f220901decfc8af2df58746027e9d59d5fb86853ce3862da06639cbf" },
  { id: 34, name: "serpias", minecraftName: "serpias" },
  { id: 35, name: "conterstine", minecraftName: "conterstine" },
  { id: 36, name: "vickypalami", minecraftName: "vickypalami" },
  { id: 37, name: "laparce", minecraftName: "LaParce1", minecraftUuid: "7a06328d97d2465cace91ddfcb570065", skinTexture: "https://textures.minecraft.net/texture/c3563117e7bfdcf224f36387f47660b108523478311c58917fd6565a2d0b0e4e" },
  { id: 38, name: "Girlofnox", minecraftName: "Girlofnox" },
  { id: 39, name: "chanty", minecraftName: "ELCHANTYYYYY", minecraftUuid: "10f20e7af6744121ad905bc66da7b19d", skinTexture: "https://textures.minecraft.net/texture/c65184dfe10888c6381f95d8fb96b1090ecdc6ac9f655962b545fc95219d0434", kickName: "chanty" },
  { id: 40, name: "domgamer", minecraftName: "domgamermc", minecraftUuid: "696483700b2d4c93a7b1ac1c9300de8e", skinTexture: "https://textures.minecraft.net/texture/cfb1c4c1394124e3c630dd680bff68b34cf3b1a9cb672feb9d451431c6fde10a", kickName: "domgamermc" }
];

const adminTokenKey = "bunker-admin-authenticated";
const storageKey = "bunker-player-statuses";
const adminPasswordValue = "bunker-admin";
const pathName = window.location.pathname.replace(/\/+$/, "");
const isAdminPage = pathName.endsWith("/admin")
  || pathName.endsWith("/admin.html")
  || new URLSearchParams(window.location.search).has("admin")
  || window.location.hash === "#admin";
let isAdminAuthenticated = localStorage.getItem(adminTokenKey) === "1";
const defaultDead = new Set();
const players = creators.map((creator) => ({
  ...creator,
  kickName: creator.kickName || makeKickSlug(creator.name),
  status: defaultDead.has(creator.id) ? "dead" : "alive",
  palette: makePalette(creator.name, creator.id)
}));

const eventStartDateUtc = Date.UTC(2026, 4, 12, 22, 0, 0);
const eventLengthDays = 6;
const eventDayDurationMs = 24 * 60 * 60 * 1000;
const kickCheckInterval = 5 * 60 * 1000;
const streamStates = new Map(players.map((player) => [player.id, { status: "checking", label: "Revisando" }]));

const grid = document.querySelector("#players");
const template = document.querySelector("#player-card-template");
const searchInput = document.querySelector("#search");
const filterButtons = [...document.querySelectorAll(".filter")];
const eventDay = document.querySelector("#event-day");
const eventDayBadge = document.querySelector("#event-day-badge");
const liveCount = document.querySelector("#live-count");
const liveBadge = document.querySelector("#live-badge");
const aliveCount = document.querySelector("#alive-count");
const deadCount = document.querySelector("#dead-count");
const totalCount = document.querySelector("#total-count");
const totalBadge = document.querySelector("#total-badge");
const aliveProgress = document.querySelector("#alive-progress");
const adminState = document.querySelector("#admin-state");
const adminLoginForm = document.querySelector("#admin-login-form");
const adminPassword = document.querySelector("#admin-password");
const adminLogout = document.querySelector("#admin-logout");
const adminMessage = document.querySelector("#admin-message");

let activeFilter = "all";

document.body.classList.toggle("admin-mode", isAdminPage);
document.body.classList.toggle("public-mode", !isAdminPage);
document.body.classList.toggle("admin-locked", isAdminPage && !isAdminAuthenticated);
document.body.classList.toggle("admin-authenticated", isAdminPage && isAdminAuthenticated);

function makeKickSlug(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "");
}

function getEventDay(now = new Date()) {
  const daysSinceStart = Math.floor((now.getTime() - eventStartDateUtc) / eventDayDurationMs);

  if (daysSinceStart < 0) return 1;
  return Math.min(eventLengthDays, daysSinceStart + 1);
}

function updateEventDay() {
  const day = getEventDay();
  eventDay.textContent = day;
  eventDayBadge.textContent = day;
}

function scheduleEventDayUpdate() {
  const now = new Date();
  const nextDayIndex = Math.max(1, Math.floor((now.getTime() - eventStartDateUtc) / eventDayDurationMs) + 1);
  const nextChange = eventStartDateUtc + (nextDayIndex * eventDayDurationMs) + 2000;
  const delay = Math.max(1000, nextChange - now.getTime());

  window.setTimeout(() => {
    updateEventDay();
    scheduleEventDayUpdate();
  }, delay);
}

function makePalette(name, id) {
  const seed = [...name].reduce((sum, char) => sum + char.charCodeAt(0), id * 17);
  const skins = ["#9d6b4f", "#b47a5e", "#d09a75", "#6f4938", "#e0b08d", "#8a5f4a"];
  const hairs = ["#1b1713", "#3b2517", "#6b3b17", "#e09d26", "#f5f5f5", "#111827", "#5b2b83"];
  const eyes = ["#202426", "#1f67ff", "#22ffaa", "#8f3dff", "#ff2b4f", "#f2f2f2"];

  return {
    skin: skins[seed % skins.length],
    hair: hairs[(seed * 3) % hairs.length],
    eye: eyes[(seed * 5) % eyes.length],
    accent: seed % 4 === 0 ? "#23ff86" : seed % 4 === 1 ? "#ff234f" : seed % 4 === 2 ? "#ff9e2f" : "#ffffff",
    shadow: "rgba(0, 0, 0, 0.22)"
  };
}

function avatarPattern(player) {
  const { skin, hair, eye, accent, shadow } = player.palette;
  const hasMask = player.id % 9 === 0;
  const hasHood = player.id % 11 === 0;
  const hasGlow = player.id % 5 === 0;
  const hairline = player.id % 3;
  const pixels = Array(64).fill(skin);

  const set = (indexes, color) => indexes.forEach((index) => pixels[index] = color);

  set([0, 1, 2, 3, 4, 5, 6, 7], hair);
  set(hairline === 0 ? [8, 9, 10, 11, 12, 13] : hairline === 1 ? [8, 9, 10, 14, 15] : [8, 9, 14, 15], hair);
  set([16, 23, 24, 31], darken(skin));
  set([26, 29], eye);
  set([27, 28], hasGlow ? accent : "#f7f7f7");
  set([34, 35, 36, 37], shadow);
  set([43, 44], darken(skin));
  set([50, 51, 52, 53], darken(skin));

  if (hasMask) {
    set([16, 17, 18, 19, 20, 21, 22, 23, 24, 31, 32, 39], "#101413");
    set([27, 28], accent);
  }

  if (hasHood) {
    set([0, 1, 2, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47], accent);
  }

  if (player.id % 7 === 0) {
    set([2, 3, 4, 10, 11, 12], "#f1f1f1");
  }

  return pixels;
}

function darken(color) {
  if (color.startsWith("rgba")) return color;
  const value = color.replace("#", "");
  const rgb = [0, 2, 4].map((start) => Math.max(0, parseInt(value.slice(start, start + 2), 16) - 32));
  return `rgb(${rgb.join(",")})`;
}

function renderPixelAvatar(avatar, player) {
  avatar.classList.add("is-pixel");
  avatar.classList.remove("has-skin-texture");
  avatar.replaceChildren();

  avatarPattern(player).forEach((color) => {
    const pixel = document.createElement("span");
    pixel.className = "px";
    pixel.style.background = color;
    avatar.append(pixel);
  });
}

function avatarUrls(player) {
  if (player.minecraftUuid) {
    return [
      `https://crafthead.net/cube/${player.minecraftUuid}/128`,
      `https://crafthead.net/helm/${player.minecraftUuid}/128`,
      `https://crafatar.com/avatars/${player.minecraftUuid}?size=128&overlay`,
      `https://crafthead.net/avatar/${player.minecraftUuid}/128`,
      `https://api.mcheads.org/head/${encodeURIComponent(player.minecraftName)}/128`
    ];
  }

  return [
    `https://api.mcheads.org/head/${encodeURIComponent(player.minecraftName)}/128`,
    `https://crafthead.net/avatar/${encodeURIComponent(player.minecraftName)}/128`
  ];
}

function renderMinecraftHead(avatar, player) {
  if (player.skinTexture) {
    renderSkinTexture(avatar, player);
    return;
  }

  avatar.classList.remove("is-pixel");
  avatar.classList.remove("has-skin-texture");
  avatar.replaceChildren();

  const image = document.createElement("img");
  const urls = avatarUrls(player);
  let urlIndex = 0;

  image.alt = "";
  image.decoding = "async";
  image.loading = "lazy";
  image.src = urls[urlIndex];
  image.addEventListener("error", () => {
    urlIndex += 1;

    if (urlIndex < urls.length) {
      image.src = urls[urlIndex];
      return;
    }

    renderPixelAvatar(avatar, player);
  });
  avatar.append(image);
}

function renderSkinTexture(avatar, player) {
  avatar.classList.remove("is-pixel");
  avatar.classList.add("has-skin-texture");
  avatar.replaceChildren();

  const skinHead = document.createElement("div");
  const base = document.createElement("img");
  const overlay = document.createElement("img");

  skinHead.className = "skin-head";
  base.className = "skin-layer skin-base";
  overlay.className = "skin-layer skin-overlay";
  base.alt = "";
  overlay.alt = "";
  base.decoding = "async";
  overlay.decoding = "async";
  base.loading = "lazy";
  overlay.loading = "lazy";
  base.src = player.skinTexture;
  overlay.src = player.skinTexture;
  base.addEventListener("error", () => {
    player.skinTexture = "";
    renderMinecraftHead(avatar, player);
  }, { once: true });

  skinHead.append(base, overlay);
  avatar.append(skinHead);
}

function setAdminMessage(message, tone = "neutral") {
  if (!adminMessage) return;
  adminMessage.textContent = message;
  adminMessage.dataset.tone = tone;
}

function updateAdminUi() {
  if (!isAdminPage) return;

  document.body.classList.toggle("admin-authenticated", isAdminAuthenticated);
  document.body.classList.toggle("admin-locked", !isAdminAuthenticated);
  adminState.textContent = isAdminAuthenticated ? "Sesion admin" : "Solo lectura";

  if (isAdminAuthenticated) {
    setAdminMessage("Puedes cambiar quienes aparecen con vida o eliminados.", "success");
  } else {
    setAdminMessage("Entra con la clave admin para editar estados.", "neutral");
  }
}

function applyStatusMap(statuses = {}) {
  let changed = false;

  players.forEach((player) => {
    const status = statuses[String(player.id)];
    if (!["alive", "dead"].includes(status) || player.status === status) return;
    player.status = status;
    changed = true;
  });

  return changed;
}

function readStoredStatuses() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function saveStatuses() {
  const statusMap = Object.fromEntries(players.map((player) => [player.id, player.status]));
  localStorage.setItem(storageKey, JSON.stringify(statusMap));
}

function loadStatuses() {
  if (applyStatusMap(readStoredStatuses())) render();
}

function updatePlayerStatus(player, status) {
  player.status = status;
  saveStatuses();
  render();
  setAdminMessage(`${player.name} ahora aparece como ${status === "alive" ? "vivo" : "muerto"}.`, "success");
}

function handleAdminLogin(event) {
  event.preventDefault();
  const password = adminPassword.value.trim();

  if (!password) {
    setAdminMessage("Escribe la clave admin.", "error");
    return;
  }

  if (password !== adminPasswordValue) {
    isAdminAuthenticated = false;
    localStorage.removeItem(adminTokenKey);
    updateAdminUi();
    render();
    setAdminMessage("Clave incorrecta.", "error");
    return;
  }

  isAdminAuthenticated = true;
  localStorage.setItem(adminTokenKey, "1");
  adminPassword.value = "";
  updateAdminUi();
  render();
}

function handleAdminLogout() {
  isAdminAuthenticated = false;
  localStorage.removeItem(adminTokenKey);
  updateAdminUi();
  render();
}

function updateLiveStats() {
  const live = [...streamStates.values()].filter((state) => state.status === "live").length;
  liveCount.textContent = live;
  liveBadge.textContent = live;
}

function updateStats() {
  const alive = players.filter((player) => player.status === "alive").length;
  const dead = players.length - alive;
  aliveCount.textContent = alive;
  deadCount.textContent = dead;
  totalCount.textContent = players.length;
  totalBadge.textContent = players.length;
  aliveProgress.style.width = `${(alive / players.length) * 100}%`;
  updateLiveStats();
}

function parseKickPayload(payload) {
  const data = Array.isArray(payload?.data) ? payload.data[0] : payload?.data || payload;
  const livestream = data?.livestream || data?.stream || data?.current_livestream;
  const isLive = Boolean(data?.is_live || livestream?.is_live || livestream?.id || livestream?.session_title);

  return {
    isLive,
    title: livestream?.session_title || livestream?.title || data?.stream_title || "",
    viewerCount: livestream?.viewer_count || livestream?.viewers || data?.viewer_count || 0
  };
}

async function fetchKickStatus(player) {
  const channel = encodeURIComponent(player.kickName);
  const urls = [
    `https://api.kick.com/public/v1/channels/${channel}`,
    `https://kick.com/api/v2/channels/${channel}`
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url, { headers: { Accept: "application/json" } });
      if (!response.ok) continue;

      const payload = await response.json();
      return parseKickPayload(payload);
    } catch (error) {
      continue;
    }
  }

  return null;
}

async function refreshKickStatuses() {
  await Promise.all(players.map(async (player) => {
    const result = await fetchKickStatus(player);
    const previous = streamStates.get(player.id);

    if (!result) {
      streamStates.set(player.id, previous?.status === "live"
        ? previous
        : { status: "unknown", label: "Sin señal" });
      return;
    }

    streamStates.set(player.id, result.isLive
      ? { status: "live", label: "En vivo", title: result.title, viewerCount: result.viewerCount }
      : { status: "offline", label: "Offline" });
  }));

  render();
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = players.filter((player) => {
    const matchesQuery = player.name.toLowerCase().includes(query)
      || player.minecraftName.toLowerCase().includes(query)
      || player.kickName.toLowerCase().includes(query)
      || String(player.id).includes(query);
    const matchesFilter = activeFilter === "all" || player.status === activeFilter;
    return matchesQuery && matchesFilter;
  });

  grid.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Sin registros encontrados";
    grid.append(empty);
    updateStats();
    return;
  }

  filtered.forEach((player) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const button = node.querySelector(".status-toggle");
    const stream = node.querySelector(".stream-status");
    const avatar = node.querySelector(".avatar");
    const streamState = streamStates.get(player.id) || { status: "checking", label: "Revisando" };

    node.classList.toggle("is-dead", player.status === "dead");
    node.querySelector(".rank").textContent = `# ${player.id}`;
    node.querySelector("h2").textContent = player.name;
    node.querySelector("p").textContent = player.status === "alive" ? "Con vida" : "Eliminado";

    button.dataset.status = player.status;
    button.textContent = player.status === "alive" ? "Vivo" : "Muerto";
    button.disabled = isAdminPage && !isAdminAuthenticated;
    button.setAttribute("aria-label", `Cambiar estado de ${player.name}`);
    button.addEventListener("click", () => {
      if (!isAdminPage || !isAdminAuthenticated) return;
      updatePlayerStatus(player, player.status === "alive" ? "dead" : "alive");
    });

    stream.href = `https://kick.com/${player.kickName}`;
    stream.dataset.stream = streamState.status;
    stream.textContent = streamState.label;
    stream.title = streamState.status === "live" && streamState.title
      ? `${streamState.title}${streamState.viewerCount ? ` - ${streamState.viewerCount} viewers` : ""}`
      : `Abrir canal de Kick: ${player.kickName}`;

    renderMinecraftHead(avatar, player);

    grid.append(node);
  });

  updateStats();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

searchInput.addEventListener("input", render);

if (isAdminPage) {
  adminLoginForm.addEventListener("submit", handleAdminLogin);
  adminLogout.addEventListener("click", handleAdminLogout);
  updateAdminUi();
}

updateEventDay();
scheduleEventDayUpdate();
render();
loadStatuses();
refreshKickStatuses();
window.setInterval(refreshKickStatuses, kickCheckInterval);

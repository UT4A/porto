const profile = {
  name: "Utaa",
  role: "Video Editor",
  tagline:
    "HI, aku Utaa dan aku siap bantu konten kamu kelihatan premium :).",
  email: "uutaasatuu@gmail.com",
  whatsappNumber: "6281234567890",
  discordUrl:"https://discordid.netlify.app/?id=996760299229171732",
  instagramUrl: "https://www.instagram.com/goofvypz/",
  stats: {
    years: "2+",
    projects: "50+",
    turnaround: "24h",
  },
};

const projects = [
  {
    title: "Showreel 2026",
    category: "Showreel",
    year: "2026",
    duration: "0:45",
    tags: ["Cut", "Color", "Sound"],
    thumb: "./assets/thumb-showreel.svg",
    video: { type: "youtube", id: "dQw4w9WgXcQ" },
    description:
      "Komplikasi highlight: transisi rapih, beat sync, dan color match konsisten.",
  },
  {
    title: "Showreel Shorts",
    category: "Showreel",
    year: "2026",
    duration: "0:15",
    tags: ["Shorts"],
    thumb: "./assets/thumb-showreel.svg",
    video: { type: "gdrive", id: "1F-uHP3NFETB-gP2AiZjPIxNeRx9G5PxR" },
    description: "Preview dari Google Drive.",
  },
  {
    title: "Reels Produk Skincare",
    category: "Ads",
    year: "2025",
    duration: "0:20",
    tags: ["UGC", "Motion Text"],
    thumb: "./assets/thumb-ads.svg",
    video: { type: "tiktok", id: "7615919678807919893" },
    description:
      "Hook 2 detik pertama kuat, caption dinamis, dan pacing fokus ke benefit produk.",
  },
  {
    title: "Vlog Travel Cinematic",
    category: "Vlog",
    year: "2025",
    duration: "6:12",
    tags: ["Story", "Music"],
    thumb: "./assets/thumb-vlog.svg",
    video: { type: "youtube", id: "ScMzIvxBSi4" },
    description:
      "Story-driven cut, b-roll terkurasi, dan rhythm yang nyaman untuk long-form.",
  },
  {
    title: "Aftermovie Event",
    category: "Event",
    year: "2024",
    duration: "1:30",
    tags: ["Highlights", "Beat Sync"],
    thumb: "./assets/thumb-event.svg",
    video: { type: "youtube", id: "9No-FiEInLA" },
    description:
      "Build-up ke peak moment, transisi halus, dan cut yang ngikutin energi crowd.",
  },
  {
    title: "Podcast Cutdown (Shorts Pack)",
    category: "Podcast",
    year: "2024",
    duration: "0:35",
    tags: ["Subtitles", "Retention"],
    thumb: "./assets/thumb-podcast.svg",
    video: { type: "youtube", id: "5qap5aO4i9A" },
    description:
      "Cutdown dari long-form dengan subtitle rapi dan punchline yang lebih cepat.",
  },
  {
    title: "Corporate Profile",
    category: "Corporate",
    year: "2023",
    duration: "2:10",
    tags: ["Clean", "Brand"],
    thumb: "./assets/thumb-corporate.svg",
    video: { type: "youtube", id: "ysz5S6PUM-U" },
    description:
      "Edit clean dengan lower-third minimalis dan tone warna yang sesuai brand.",
  },
];

const elements = {
  name: document.getElementById("profile-name"),
  role: document.getElementById("profile-role"),
  tagline: document.getElementById("profile-tagline"),
  statYears: document.getElementById("stat-years"),
  statProjects: document.getElementById("stat-projects"),
  statTurnaround: document.getElementById("stat-turnaround"),
  btnEmail: document.getElementById("btn-email"),
  btnWhatsapp: document.getElementById("btn-whatsapp"),
  btnDiscord: document.getElementById("btn-discord"),
  btnInstagram: document.getElementById("btn-instagram"),
  footerName: document.getElementById("footer-name"),
  year: document.getElementById("year"),
  grid: document.getElementById("grid"),
  q: document.getElementById("q"),
  chips: document.getElementById("chips"),
  modal: document.getElementById("modal"),
  player: document.getElementById("player"),
  modalTitle: document.getElementById("modalTitle"),
  modalBadges: document.getElementById("modalBadges"),
  modalLink: document.getElementById("modalLink"),
  modalDesc: document.getElementById("modalDesc"),
};

function setProfile() {
  elements.name.textContent = profile.name;
  elements.role.textContent = profile.role;
  elements.tagline.textContent = profile.tagline;
  elements.statYears.textContent = profile.stats.years;
  elements.statProjects.textContent = profile.stats.projects;
  elements.statTurnaround.textContent = profile.stats.turnaround;
if (elements.btnDiscord) elements.btnDiscord.href = profile.discordUrl;
  elements.btnEmail.href = `mailto:${profile.email}`;
  elements.btnWhatsapp.href = `https://wa.me/${profile.whatsappNumber}`;
  
  elements.btnInstagram.href = profile.instagramUrl;

  elements.footerName.textContent = profile.name;
  elements.year.textContent = String(new Date().getFullYear());
}

function uniqCategories(items) {
  const set = new Set(items.map((p) => p.category));
  return ["All", ...Array.from(set)];
}

function normalizeText(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function matchesQuery(project, query) {
  if (!query) return true;
  const hay = normalizeText(
    [
      project.title,
      project.category,
      project.year,
      project.duration,
      ...(project.tags || []),
      project.description,
    ].join(" ")
  );
  return hay.includes(normalizeText(query));
}

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function projectCard(project, index) {
  const wrapper = document.createElement("article");
  wrapper.className = "card";
  wrapper.setAttribute("data-reveal", "");
  wrapper.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;

  const thumb = document.createElement("div");
  thumb.className = "thumb";

  const img = document.createElement("img");
  img.src = project.thumb;
  img.alt = `Thumbnail: ${project.title}`;
  img.loading = "lazy";
  thumb.appendChild(img);

  const play = document.createElement("div");
  play.className = "play";
  play.innerHTML =
    '<span class="play__dot" aria-hidden="true"></span><span>Preview</span>';
  thumb.appendChild(play);

  const body = document.createElement("div");
  body.className = "card__body";

  const title = document.createElement("h3");
  title.className = "card__title";
  title.textContent = project.title;

  const meta = document.createElement("div");
  meta.className = "card__meta";
  meta.innerHTML = `<span>${project.year}</span><span class="pill">${project.category}</span>`;

  const btn = document.createElement("button");
  btn.className = "card__btn";
  btn.type = "button";
  btn.textContent = `Play (${project.duration})`;
  btn.addEventListener("click", () => openModal(project));

  wrapper.addEventListener("click", (e) => {
    const isButton = e.target instanceof HTMLElement && e.target.closest("button");
    if (!isButton) openModal(project);
  });

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(btn);

  wrapper.appendChild(thumb);
  wrapper.appendChild(body);
  return wrapper;
}

function renderGrid(items) {
  clearNode(elements.grid);
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "lead";
    empty.textContent = "Tidak ada video yang cocok dengan filter/cari kamu.";
    elements.grid.appendChild(empty);
    return;
  }

  items.forEach((p, i) => elements.grid.appendChild(projectCard(p, i)));
  revealInit();
}

function chipButton(label, pressed, onClick) {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.textContent = label;
  b.setAttribute("aria-pressed", pressed ? "true" : "false");
  b.addEventListener("click", () => onClick(label));
  return b;
}

let activeCategory = "All";
let activeQuery = "";

function applyFilters() {
  const filtered = projects.filter((p) => {
    const okCat = activeCategory === "All" || p.category === activeCategory;
    return okCat && matchesQuery(p, activeQuery);
  });
  renderGrid(filtered);
}

function renderChips() {
  clearNode(elements.chips);
  const cats = uniqCategories(projects);
  cats.forEach((cat) => {
    const pressed = cat === activeCategory;
    elements.chips.appendChild(
      chipButton(cat, pressed, (next) => {
        activeCategory = next;
        renderChips();
        applyFilters();
      })
    );
  });
}

let lastActiveElement = null;

function youtubeWatchUrl(id) {
  const url = new URL("https://www.youtube.com/watch");
  url.searchParams.set("v", id);
  return url.toString();
}

function buildEmbed(project) {
  if (project.video.type === "youtube") {
    // Use the privacy-enhanced domain and include origin to reduce config errors.
    const url = new URL("https://www.youtube-nocookie.com/embed/" + project.video.id);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("rel", "0");
    url.searchParams.set("modestbranding", "1");
    url.searchParams.set("playsinline", "1");
    url.searchParams.set("color", "white");
    try {
      url.searchParams.set("origin", window.location.origin);
    } catch {
      // If origin isn't available, omit it.
    }
    const iframe = document.createElement("iframe");
    iframe.src = url.toString();
    iframe.title = project.title;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "origin";
    return iframe;
  }

  if (project.video.type === "gdrive") {
    const iframe = document.createElement("iframe");
    iframe.src = "https://drive.google.com/file/d/" + project.video.id + "/preview";
    iframe.title = project.title;
    iframe.allow = "autoplay; fullscreen";
    iframe.allowFullscreen = true;
    return iframe;
  }

  if (project.video.type === "tiktok") {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.tiktok.com/embed/v2/" + project.video.id;
    iframe.title = project.title;
    iframe.allow = "autoplay; fullscreen";
    iframe.allowFullscreen = true;
    return iframe;
  }

  if (project.video.type === "vimeo") {
    const url = new URL("https://player.vimeo.com/video/" + project.video.id);
    url.searchParams.set("autoplay", "1");
    const iframe = document.createElement("iframe");
    iframe.src = url.toString();
    iframe.title = project.title;
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    return iframe;
  }

  const video = document.createElement("video");
  video.src = project.video.url;
  video.controls = true;
  video.autoplay = true;
  video.playsInline = true;
  return video;
}

function openModal(project) {
  lastActiveElement = document.activeElement;

  clearNode(elements.player);
  elements.player.appendChild(buildEmbed(project));

  elements.modalTitle.textContent = project.title;
  elements.modalDesc.textContent = project.description || "";
  clearNode(elements.modalBadges);
  (project.tags || []).forEach((t) => {
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = t;
    elements.modalBadges.appendChild(b);
  });

  if (project.video.type === "youtube") {
    elements.modalLink.href = youtubeWatchUrl(project.video.id);
    elements.modalLink.textContent = "Tonton di YouTube";
    elements.modalLink.style.display = "inline-flex";
  } else if (project.video.type === "gdrive") {
    elements.modalLink.href =
      "https://drive.google.com/file/d/" + project.video.id + "/view?usp=sharing";
    elements.modalLink.textContent = "Buka di Google Drive";
    elements.modalLink.style.display = "inline-flex";
  } else if (project.video.type === "tiktok") {
    elements.modalLink.href = "https://www.tiktok.com/@mrzofei/video/" + project.video.id;
    elements.modalLink.textContent = "Buka di TikTok";
    elements.modalLink.style.display = "inline-flex";
  } else if (project.video.type === "vimeo") {
    elements.modalLink.href = "https://vimeo.com/" + project.video.id;
    elements.modalLink.textContent = "Tonton di Vimeo";
    elements.modalLink.style.display = "inline-flex";
  } else {
    elements.modalLink.style.display = "none";
  }

  elements.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = elements.modal.querySelector("[data-close]");
  if (closeBtn instanceof HTMLElement) closeBtn.focus();
}

function closeModal() {
  if (elements.modal.getAttribute("aria-hidden") === "true") return;
  elements.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  clearNode(elements.player);
  if (lastActiveElement && lastActiveElement instanceof HTMLElement) {
    lastActiveElement.focus();
  }
}

function wireModal() {
  elements.modal.addEventListener("click", (e) => {
    const el = e.target instanceof HTMLElement ? e.target : null;
    if (el && el.closest("[data-close]")) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

let revealObserver = null;
function revealInit() {
  if (revealObserver) revealObserver.disconnect();
  const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  nodes.forEach((n) => revealObserver.observe(n));
}

function wireSearch() {
  let timer = null;
  elements.q.addEventListener("input", () => {
    const next = elements.q.value;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      activeQuery = next;
      applyFilters();
    }, 90);
  });
}

setProfile();
renderChips();
applyFilters();
wireModal();
wireSearch();
revealInit();

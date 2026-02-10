(() => {
  const MODULES = window.TRILHA_MODULES || [];
  if (!MODULES.length) return;

  const STATE_KEY = "trilha_luiz_state_v3";
  const THEME_KEY = "trilha_luiz_theme_v1";
  const BASE = window.PAGE_BASE || "./"; // home: "./" | module pages: "../"

  const $ = (id) => document.getElementById(id);

  let state = loadState();
  let activeModuleId = document.body.dataset.module || MODULES[0].id;

  // Theme
  initTheme();

  // Common wiring
  wireCommon();

  // Sidebar + total progress
  renderNav();
  renderTotalProgress();

  // Page routing
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "module") renderModule(activeModuleId);

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY) || "{}"); }
    catch { return {}; }
  }
  function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
    renderNav();
    renderTotalProgress();
    if (document.body.dataset.page === "module") renderModule(activeModuleId, { keepScroll: true });
  }

  function setChecked(lessonId, checked) {
    state[lessonId] = !!checked;
    saveState();
  }

  function calcModuleProgress(mod) {
    const total = mod.lessons.length;
    const done = mod.lessons.filter(l => !!state[l.id]).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }

  function calcTotalProgress() {
    const all = MODULES.flatMap(m => m.lessons.map(l => l.id));
    const total = all.length;
    const done = all.filter(id => !!state[id]).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }

  function renderTotalProgress() {
    const p = calcTotalProgress();
    $("pctTotal").textContent = `${p.pct}%`;
    $("barTotal").style.width = `${p.pct}%`;
  }

  function renderNav() {
    const nav = $("nav");
    nav.innerHTML = "";

    const current = document.body.dataset.page === "module" ? activeModuleId : null;

    MODULES.forEach(mod => {
      const prog = calcModuleProgress(mod);
      const a = document.createElement("a");
      a.href = `${BASE}${mod.id}/`;
      a.className = current === mod.id ? "active" : "";
      a.innerHTML = `
        <div style="font-weight:800; font-size:13px;">${escapeHtml(mod.title)}</div>
        <div class="meta">${prog.done}/${prog.total} concluídas • ${prog.pct}%</div>
      `;
      nav.appendChild(a);
    });
  }

  function renderHome() {
    $("homeView").classList.remove("hidden");
    $("moduleView").classList.add("hidden");
    $("homeChip").classList.remove("hidden");
    $("moduleChip").classList.add("hidden");

    // Continue button
    $("continueBtn").onclick = () => {
      const next = findNextAcrossAll();
      if (!next) return;
      window.location.href = `${BASE}${next.moduleId}/#${next.lessonId}`;
    };

    // Home summary
    const next = findNextAcrossAll();
    $("nextUp").textContent = next
      ? `${getModule(next.moduleId).title} • ${getLesson(next.moduleId, next.lessonId).title}`
      : "Tudo concluído. Hora de aplicar em projeto real 😄";
  }

  function renderModule(moduleId, opts = {}) {
    activeModuleId = moduleId;

    $("homeView").classList.add("hidden");
    $("moduleView").classList.remove("hidden");
    $("homeChip").classList.add("hidden");
    $("moduleChip").classList.remove("hidden");

    const mod = getModule(moduleId);
    if (!mod) return;

    const prog = calcModuleProgress(mod);

    $("modTitle").textContent = mod.title;
    $("modDesc").textContent = mod.desc;
    $("modMetaA").textContent = `${prog.done}/${prog.total} concluídas`;
    $("modMetaB").textContent = `${prog.pct}% do módulo`;

    // Render lessons
    const lessonsWrap = $("lessons");
    const prevScroll = opts.keepScroll ? lessonsWrap.scrollTop : 0;

    lessonsWrap.innerHTML = "";

    mod.lessons.forEach(lesson => {
      const wrap = document.createElement("div");
      wrap.className = "lesson";
      wrap.id = lesson.id;

      const checked = !!state[lesson.id];

      const linksHtml = (lesson.links && lesson.links.length)
        ? `<div class="links">${
            lesson.links.map(l =>
              `<a class="link" href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`
            ).join("")
          }</div>`
        : `<div class="muted" style="margin-top:8px;">Sem link aqui: é entrega/prática.</div>`;

      wrap.innerHTML = `
        <div class="lessonTop">
          <input type="checkbox" ${checked ? "checked" : ""} aria-label="Concluir aula" />
          <div style="flex:1;">
            <h3 data-lesson-title="1">${escapeHtml(lesson.title)}</h3>
            <p>${escapeHtml(lesson.note || "")}</p>
            ${linksHtml}
          </div>
        </div>
      `;

      // Checkbox
      wrap.querySelector("input").addEventListener("change", (e) => {
        setChecked(lesson.id, e.target.checked);
      });

      // Click title: set hash + highlight
      wrap.querySelector("[data-lesson-title]").addEventListener("click", () => {
        setActiveLesson(lesson.id);
      });

      lessonsWrap.appendChild(wrap);
    });

    if (opts.keepScroll) lessonsWrap.scrollTop = prevScroll;

    // Home link
    $("homeLink").href = `${BASE}`;

    // Next button
    $("nextBtn").onclick = () => goNextLesson();

    // Apply hash highlight
    const hash = (location.hash || "").replace("#", "");
    if (hash && getLesson(moduleId, hash)) {
      setActiveLesson(hash, { scroll: true, silentHash: true });
    } else {
      // highlight first pending
      const firstPending = mod.lessons.find(l => !state[l.id]);
      if (firstPending) setActiveLesson(firstPending.id, { scroll: false, silentHash: false });
    }

    // Update nav active state
    renderNav();
  }

  function setActiveLesson(lessonId, options = {}) {
    const { scroll = true, silentHash = false } = options;

    document.querySelectorAll(".lesson.active").forEach(el => el.classList.remove("active"));
    const el = document.getElementById(lessonId);
    if (!el) return;

    el.classList.add("active");

    if (!silentHash) history.replaceState(null, "", `#${lessonId}`);

    if (scroll) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goNextLesson() {
    const mod = getModule(activeModuleId);
    if (!mod) return;

    const from = (location.hash || "").replace("#", "");
    const next = findNextInModule(activeModuleId, from);

    if (next.type === "lesson") {
      setActiveLesson(next.lessonId);
      return;
    }

    if (next.type === "module") {
      window.location.href = `${BASE}${next.moduleId}/`;
      return;
    }

    // all done
    window.location.href = `${BASE}`;
  }

  function findNextAcrossAll() {
    for (const mod of MODULES) {
      for (const lesson of mod.lessons) {
        if (!state[lesson.id]) return { moduleId: mod.id, lessonId: lesson.id };
      }
    }
    return null;
  }

  function findNextInModule(moduleId, fromLessonId) {
    const mod = getModule(moduleId);
    if (!mod) return { type: "none" };

    // start after current hash if possible
    let startIdx = 0;
    if (fromLessonId) {
      const idx = mod.lessons.findIndex(l => l.id === fromLessonId);
      if (idx >= 0) startIdx = idx + 1;
    }

    // 1) next pending after current
    for (let i = startIdx; i < mod.lessons.length; i++) {
      const l = mod.lessons[i];
      if (!state[l.id]) return { type: "lesson", moduleId, lessonId: l.id };
    }

    // 2) pending from start (in case current is later)
    for (let i = 0; i < mod.lessons.length; i++) {
      const l = mod.lessons[i];
      if (!state[l.id]) return { type: "lesson", moduleId, lessonId: l.id };
    }

    // 3) next module that has pending
    const currentIndex = MODULES.findIndex(m => m.id === moduleId);
    for (let j = currentIndex + 1; j < MODULES.length; j++) {
      const m = MODULES[j];
      if (m.lessons.some(l => !state[l.id])) return { type: "module", moduleId: m.id };
    }

    // 4) fallback: next module in order
    if (currentIndex >= 0 && currentIndex + 1 < MODULES.length) {
      return { type: "module", moduleId: MODULES[currentIndex + 1].id };
    }

    return { type: "none" };
  }

  function getModule(id) { return MODULES.find(m => m.id === id); }
  function getLesson(moduleId, lessonId) {
    const m = getModule(moduleId);
    return m ? m.lessons.find(l => l.id === lessonId) : null;
  }

  // Search
  const searchIndex = buildSearchIndex();

  function buildSearchIndex() {
    const items = [];
    MODULES.forEach(mod => {
      mod.lessons.forEach(lesson => {
        items.push({
          moduleId: mod.id,
          moduleTitle: mod.title,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          hay: `${mod.title} ${lesson.title} ${lesson.note || ""}`.toLowerCase()
        });
      });
    });
    return items;
  }

  function wireCommon() {
    // Theme toggle
    $("themeBtn").onclick = () => toggleTheme();

    // Reset
    $("resetBtn").onclick = () => {
      const ok = confirm("Resetar todo o progresso neste navegador?");
      if (!ok) return;
      state = {};
      saveState();
      if (document.body.dataset.page === "home") renderHome();
      if (document.body.dataset.page === "module") renderModule(activeModuleId);
    };

    // Search
    const input = $("searchInput");
    const results = $("searchResults");

    const hideResults = () => results.classList.add("hidden");

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { hideResults(); return; }

      const matches = searchIndex
        .filter(x => x.hay.includes(q))
        .slice(0, 12);

      results.innerHTML = matches.length
        ? matches.map(m => `
            <a href="${BASE}${m.moduleId}/#${m.lessonId}">
              <div style="font-weight:800; font-size:13px;">${escapeHtml(m.lessonTitle)}</div>
              <div class="small">${escapeHtml(m.moduleTitle)}</div>
            </a>
          `).join("")
        : `<div style="padding:10px 12px; color: var(--muted);">Nenhum resultado.</div>`;

      results.classList.remove("hidden");
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") hideResults();
      if (e.key === "Enter") {
        const first = results.querySelector("a");
        if (first) window.location.href = first.getAttribute("href");
      }
    });

    document.addEventListener("click", (e) => {
      const wrap = $("searchWrap");
      if (!wrap.contains(e.target)) hideResults();
    });
  }

  // Theme helpers
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const theme = saved === "light" || saved === "dark" ? saved : "dark";
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    $("themeBtn").textContent = theme === "dark" ? "☀️ Claro" : "🌙 Escuro";
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[s]));
  }
})();

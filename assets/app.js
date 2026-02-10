(() => {
  const MODULES = window.TRILHA_MODULES || [];
  if (!MODULES.length) return;

  const STATE_KEY = "trilha_luiz_state_v6";
  const THEME_KEY = "trilha_luiz_theme_v1";
  const BASE = window.PAGE_BASE || "./";

  const $ = (id) => document.getElementById(id);

  function show(id) { const el = $(id); if (el) el.classList.remove("hidden"); }
  function hide(id) { const el = $(id); if (el) el.classList.add("hidden"); }
  function setText(id, text) { const el = $(id); if (el) el.textContent = text; }
  function setHref(id, href) { const el = $(id); if (el) el.href = href; }

  let state = loadState();
  let activeModuleId = document.body?.dataset?.module || MODULES[0].id;

  initTheme();
  wireCommon();

  renderNav();
  renderTotalProgress();

  const page = document.body?.dataset?.page;
  if (page === "home") renderHome();
  if (page === "module") renderModule(activeModuleId);

  function isMobile() {
    return window.matchMedia && window.matchMedia("(max-width: 900px)").matches;
  }

  function openMenu() { document.body.classList.add("menu-open"); }
  function closeMenu() { document.body.classList.remove("menu-open"); }

  function openSearch() {
    document.body.classList.add("search-open");
    const btn = $("searchBtn");
    if (btn) btn.textContent = "✕";
    const input = $("searchInput");
    if (input) setTimeout(() => input.focus(), 0);
  }
  function closeSearch() {
    document.body.classList.remove("search-open");
    const btn = $("searchBtn");
    if (btn) btn.textContent = "🔎";
    const results = $("searchResults");
    if (results) results.classList.add("hidden");
  }
  function toggleSearch() {
    if (!isMobile()) return;
    document.body.classList.contains("search-open") ? closeSearch() : openSearch();
  }

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY) || "{}"); }
    catch { return {}; }
  }

  function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
    renderNav();
    renderTotalProgress();
    if (document.body?.dataset?.page === "home") renderHome();
    if (document.body?.dataset?.page === "module") renderModule(activeModuleId, { keepScroll: true });
  }

  function setChecked(lessonId, checked) {
    state[lessonId] = !!checked;
    saveState();
  }

  function calcModuleProgress(mod) {
    const total = mod.lessons.length;
    const done = mod.lessons.filter((l) => !!state[l.id]).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }

  function calcTotalProgress() {
    const all = MODULES.flatMap((m) => m.lessons.map((l) => l.id));
    const total = all.length;
    const done = all.filter((id) => !!state[id]).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }

  function renderTotalProgress() {
    const p = calcTotalProgress();
    setText("pctTotal", `${p.pct}%`);
    const bar = $("barTotal");
    if (bar) bar.style.width = `${p.pct}%`;
  }

  function renderNav() {
    const nav = $("nav");
    if (!nav) return;
    nav.innerHTML = "";

    const current = document.body?.dataset?.page === "module" ? activeModuleId : null;

    MODULES.forEach((mod) => {
      const prog = calcModuleProgress(mod);

      const a = document.createElement("a");
      a.href = `${BASE}${mod.id}/`;
      a.className = current === mod.id ? "active" : "";
      a.innerHTML = `
        <div style="font-weight:800; font-size:13px;">${escapeHtml(mod.title)}</div>
        <div class="meta">${prog.done}/${prog.total} concluídas • ${prog.pct}%</div>
      `;

      a.addEventListener("click", () => {
        if (isMobile()) closeMenu();
      });

      nav.appendChild(a);
    });
  }

  function renderHome() {
    show("homeView");
    hide("moduleView");

    const continueBtn = $("continueBtn");
    if (continueBtn) {
      continueBtn.onclick = () => {
        const next = findNextAcrossAll();
        if (!next) return;
        window.location.href = `${BASE}${next.moduleId}/#${next.lessonId}`;
      };
    }

    const next = findNextAcrossAll();
    setText(
      "nextUp",
      next
        ? `${getModule(next.moduleId).title} • ${getLesson(next.moduleId, next.lessonId).title}`
        : "Tudo concluído. Hora de aplicar em projeto real 😄"
    );
  }

  function renderLessonBody(lesson) {
    let html = "";

    if (lesson.sections && Array.isArray(lesson.sections) && lesson.sections.length) {
      lesson.sections.forEach((s) => {
        if (s.title) html += `<h4>${escapeHtml(s.title)}</h4>`;

        if (s.text) html += `<p>${escapeHtml(s.text)}</p>`;

        if (s.quote) html += `<blockquote>${escapeHtml(s.quote)}</blockquote>`;

        if (s.bullets && Array.isArray(s.bullets) && s.bullets.length) {
          html += `<ul>${s.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
        }
      });
    } else if (lesson.note) {
      html += `<p>${escapeHtml(lesson.note)}</p>`;
    }

    if (lesson.links && lesson.links.length) {
      html += `<h4>Links</h4>`;
      html += `<div class="links">${
        lesson.links.map(
          (l) => `<a class="link" href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`
        ).join("")
      }</div>`;
    } else {
      html += `<div class="muted" style="margin-top:10px;">Sem links aqui: é entrega/prática.</div>`;
    }

    return html;
  }

  function renderModule(moduleId, opts = {}) {
    activeModuleId = moduleId;

    hide("homeView");
    show("moduleView");

    const mod = getModule(moduleId);
    if (!mod) return;

    const prog = calcModuleProgress(mod);

    setText("modTitle", mod.title);
    setText("modDesc", mod.desc);
    setText("modMetaA", `${prog.done}/${prog.total} concluídas`);
    setText("modMetaB", `${prog.pct}% do módulo`);

    const lessonsWrap = $("lessons");
    if (!lessonsWrap) return;

    const prevScroll = opts.keepScroll ? lessonsWrap.scrollTop : 0;
    lessonsWrap.innerHTML = "";

    mod.lessons.forEach((lesson) => {
      const wrap = document.createElement("div");
      wrap.className = "lesson";
      wrap.id = lesson.id;

      const checked = !!state[lesson.id];

      wrap.innerHTML = `
        <div class="lessonTop">
          <input type="checkbox" ${checked ? "checked" : ""} aria-label="Concluir aula" />
          <div style="flex:1;">
            <h3>${escapeHtml(lesson.title)}</h3>
          </div>
        </div>
        <div class="lessonBody">
          ${renderLessonBody(lesson)}
        </div>
      `;

      // Checkbox
      const cb = wrap.querySelector("input");
      if (cb) cb.addEventListener("change", (e) => setChecked(lesson.id, e.target.checked));

      // Card inteiro clicável (exceto links/checkbox)
      wrap.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        if (e.target.closest("input")) return;
        if (wrap.classList.contains("active")) return; // evita scroll chato ao tocar dentro do aberto
        setActiveLesson(lesson.id);
      });

      lessonsWrap.appendChild(wrap);
    });

    if (opts.keepScroll) lessonsWrap.scrollTop = prevScroll;

    setHref("homeLink", `${BASE}`);

    const nextBtn = $("nextBtn");
    if (nextBtn) nextBtn.onclick = () => goNextLesson();

    const hash = (location.hash || "").replace("#", "");
    if (hash && getLesson(moduleId, hash)) {
      setActiveLesson(hash, { scroll: true, silentHash: true });
    } else {
      const firstPending = mod.lessons.find((l) => !state[l.id]);
      if (firstPending) setActiveLesson(firstPending.id, { scroll: false, silentHash: false });
    }

    renderNav();
  }

  function setActiveLesson(lessonId, options = {}) {
    const { scroll = true, silentHash = false } = options;

    document.querySelectorAll(".lesson.active").forEach((el) => el.classList.remove("active"));
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

    let startIdx = 0;
    if (fromLessonId) {
      const idx = mod.lessons.findIndex((l) => l.id === fromLessonId);
      if (idx >= 0) startIdx = idx + 1;
    }

    for (let i = startIdx; i < mod.lessons.length; i++) {
      const l = mod.lessons[i];
      if (!state[l.id]) return { type: "lesson", moduleId, lessonId: l.id };
    }

    for (let i = 0; i < mod.lessons.length; i++) {
      const l = mod.lessons[i];
      if (!state[l.id]) return { type: "lesson", moduleId, lessonId: l.id };
    }

    const currentIndex = MODULES.findIndex((m) => m.id === moduleId);
    if (currentIndex >= 0 && currentIndex + 1 < MODULES.length) {
      return { type: "module", moduleId: MODULES[currentIndex + 1].id };
    }

    return { type: "none" };
  }

  function getModule(id) { return MODULES.find((m) => m.id === id); }
  function getLesson(moduleId, lessonId) {
    const m = getModule(moduleId);
    return m ? m.lessons.find((l) => l.id === lessonId) : null;
  }

  // Search
  const searchIndex = buildSearchIndex();

  function buildSearchIndex() {
    const items = [];
    MODULES.forEach((mod) => {
      mod.lessons.forEach((lesson) => {
        const extra = lesson.sections
          ? lesson.sections.map(s => `${s.title || ""} ${s.text || ""} ${(s.bullets || []).join(" ")} ${s.quote || ""}`).join(" ")
          : (lesson.note || "");
        items.push({
          moduleId: mod.id,
          moduleTitle: mod.title,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          hay: `${mod.title} ${lesson.title} ${extra}`.toLowerCase(),
        });
      });
    });
    return items;
  }

  function wireCommon() {
    const themeBtn = $("themeBtn");
    if (themeBtn) themeBtn.onclick = () => toggleTheme();

    const resetBtn = $("resetBtn");
    if (resetBtn) {
      resetBtn.onclick = () => {
        const ok = confirm("Resetar todo o progresso neste navegador?");
        if (!ok) return;
        state = {};
        saveState();
      };
    }

    const menuBtn = $("menuBtn");
    if (menuBtn) menuBtn.addEventListener("click", () => {
      closeSearch();
      document.body.classList.contains("menu-open") ? closeMenu() : openMenu();
    });

    const overlay = $("overlay");
    if (overlay) overlay.addEventListener("click", () => closeMenu());

    const searchBtn = $("searchBtn");
    if (searchBtn) searchBtn.addEventListener("click", () => toggleSearch());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
        closeSearch();
      }
    });

    window.addEventListener("resize", () => {
      if (!isMobile()) closeMenu();
      if (!isMobile()) closeSearch();
    });

    const input = $("searchInput");
    const results = $("searchResults");
    const wrap = $("searchWrap");
    if (!input || !results || !wrap) return;

    const hideResults = () => results.classList.add("hidden");

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { hideResults(); return; }

      const matches = searchIndex.filter((x) => x.hay.includes(q)).slice(0, 12);

      results.innerHTML = matches.length
        ? matches.map((m) => `
            <a href="${BASE}${m.moduleId}/#${m.lessonId}" data-search-link="1">
              <div style="font-weight:800; font-size:13px;">${escapeHtml(m.lessonTitle)}</div>
              <div class="small">${escapeHtml(m.moduleTitle)}</div>
            </a>
          `).join("")
        : `<div style="padding:10px 12px; color: var(--muted);">Nenhum resultado.</div>`;

      results.classList.remove("hidden");
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { hideResults(); closeSearch(); }
      if (e.key === "Enter") {
        const first = results.querySelector("a[data-search-link]");
        if (first) window.location.href = first.getAttribute("href");
      }
    });

    results.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-search-link]");
      if (!a) return;
      closeSearch();
      hideResults();
    });

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) hideResults();
      if (isMobile() && document.body.classList.contains("search-open")) {
        const sb = $("searchBar");
        const btn = $("searchBtn");
        if (sb && !sb.contains(e.target) && btn && !btn.contains(e.target)) closeSearch();
      }
    });
  }

  // Theme
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
    const themeBtn = $("themeBtn");
    if (themeBtn) themeBtn.textContent = theme === "dark" ? "☀️ Claro" : "🌙 Escuro";
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (s) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[s]));
  }
})();

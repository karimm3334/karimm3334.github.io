(function () {
  "use strict";

  var DATA = window.PORTFOLIO_DATA || {};

  // h(tag, props, children) -> element
  function h(tag, props, children) {
    var el = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (key) {
      var val = props[key];
      if (val === null || val === undefined || val === false) return;
      if (key === "class") el.className = val;
      else if (key === "text") el.textContent = val;
      else if (key === "html") el.innerHTML = val;
      else el.setAttribute(key, val);
    });
    (children || []).forEach(function (child) {
      if (child === null || child === undefined || child === false) return;
      el.appendChild(typeof child === "string"
        ? document.createTextNode(child)
        : child);
    });
    return el;
  }

  // inline SVG icons
  var ICONS = {
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M3 6.5h18v11H3zM3 7l9 6 9-6"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.53.1.72-.23.72-.5v-1.8c-2.93.64-3.55-1.26-3.55-1.26-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.34.1-2.8 0 0 .89-.28 2.9 1.08a10 10 0 0 1 5.28 0c2-1.36 2.9-1.08 2.9-1.08.57 1.46.21 2.53.1 2.8.68.74 1.09 1.68 1.09 2.83 0 4.04-2.47 4.93-4.82 5.19.38.33.72.98.72 1.98v2.93c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V21H3.4zM9.2 8.4h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21H9.2z"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M14 5h5v5M19 5l-8 8M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    play:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path fill="currentColor" d="M10 8.5v7l6-3.5z"/></svg>',
    doc:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6"/></svg>',
    repo:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M6 3h11a1 1 0 0 1 1 1v16l-3.5-2L11 21l-3.5-2L4 21V5a2 2 0 0 1 2-2Z"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowLeft:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    sun:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>',
    moon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>',
  };

  function iconLink(iconKey, href, label, opts) {
    opts = opts || {};
    var external = opts.external !== false && /^https?:/.test(href);
    return h("a", {
      class: opts.class || "icon-link",
      href: href,
      target: external ? "_blank" : null,
      rel: external ? "noopener" : null,
    }, [
      h("span", { class: "icon-link__icon", html: ICONS[iconKey] || "" }),
      opts.hideLabel
        ? h("span", { class: "u-visually-hidden", text: label })
        : h("span", { text: label }),
    ]);
  }

  function contactLinks(opts) {
    opts = opts || {};
    var links = DATA.links || {};
    var out = [];
    if (links.email)
      out.push(iconLink("email", "mailto:" + links.email, "Email", opts));
    if (links.github)
      out.push(iconLink("github", links.github, "GitHub", opts));
    if (links.linkedin)
      out.push(iconLink("linkedin", links.linkedin, "LinkedIn", opts));
    return out;
  }

  // theme toggle, persisted in localStorage
  function initTheme() {
    var btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;

    function render() {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
      btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      btn.setAttribute("aria-pressed", String(isDark));
    }

    btn.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      render();
    });

    render();
  }

  // brand name, footer links, copyright, page title
  function initChrome() {
    var person = DATA.person || {};

    document.querySelectorAll("[data-field='brand']").forEach(function (el) {
      el.textContent = person.name || "";
    });

    var footerLinks = document.querySelector("[data-footer-links]");
    if (footerLinks) {
      contactLinks({ class: "icon-link" }).forEach(function (n) {
        footerLinks.appendChild(n);
      });
    }

    var copy = document.querySelector("[data-copyright]");
    if (copy) {
      var year = new Date().getFullYear();
      copy.textContent = "© " + year + " " + (person.name || "");
    }

    var site = DATA.site || {};
    if (site.title && !document.title.trim()) document.title = site.title;
  }

  window.APP = {
    DATA: DATA,
    h: h,
    ICONS: ICONS,
    iconLink: iconLink,
    contactLinks: contactLinks,
  };

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initChrome();
  });
})();

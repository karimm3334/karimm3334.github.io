(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var APP = window.APP;
    if (!APP) return;
    var DATA = APP.DATA, h = APP.h;

    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var project = (DATA.projects || []).filter(function (p) {
      return p.slug === id;
    })[0];

    var root = document.querySelector("[data-project]");
    if (!root) return;

    if (!project) {
      document.title = "Project not found — " + ((DATA.person || {}).name || "");
      root.appendChild(
        h("div", { class: "notfound" }, [
          h("p", { class: "eyebrow", text: "404" }),
          h("h1", { text: "Project not found" }),
          h("p", { class: "lede", text:
            "We couldn't find a project with that link. It may have been renamed." }),
          h("a", { class: "btn btn--ghost", href: "index.html#projects" }, [
            h("span", { class: "icon-link__icon", html: APP.ICONS.arrowLeft }),
            h("span", { text: "Back to all projects" }),
          ]),
        ])
      );
      return;
    }

    document.title = (project.title || "Project") + " — " + ((DATA.person || {}).name || "");

    root.appendChild(
      h("a", { class: "back-link", href: "index.html#projects" }, [
        h("span", { class: "icon-link__icon", html: APP.ICONS.arrowLeft }),
        h("span", { text: "All projects" }),
      ])
    );

    root.appendChild(
      h("header", { class: "project-head" }, [
        h("p", { class: "eyebrow", text: "Project" }),
        h("h1", { class: "project-title", text: project.title || "Untitled project" }),
        project.summary ? h("p", { class: "lede", text: project.summary }) : null,
        projectLinkRow(project.links),
      ])
    );

    root.appendChild(heroMedia(project.media));

    var body = h("div", { class: "project-body" });

    body.appendChild(section("Overview", h("div", { class: "prose" }, [
      paras(project.overview),
    ])));

    if (project.architecture && project.architecture.src) {
      body.appendChild(section("Architecture",
        h("figure", { class: "figure" }, [
          h("img", {
            class: "figure__img",
            src: project.architecture.src,
            alt: project.architecture.alt || "",
            loading: "lazy",
          }),
        ])
      ));
    }

    if (project.stack && project.stack.length) {
      body.appendChild(section("Stack",
        h("ul", { class: "chips" }, project.stack.map(function (t) {
          return h("li", { class: "chip", text: t });
        }))
      ));
    }

    if (project.contributions && project.contributions.length) {
      body.appendChild(section("What I built",
        bulletList(project.contributions)));
    }

    if (project.results && project.results.length) {
      body.appendChild(section("Results & tradeoffs",
        bulletList(project.results)));
    }

    root.appendChild(body);
    root.appendChild(pager(project));

    function section(title, content) {
      return h("section", { class: "project-section" }, [
        h("h2", { class: "project-section__title", text: title }),
        content,
      ]);
    }

    function paras(text) {
      var frag = document.createDocumentFragment();
      (text || "").split(/\n\n+/).forEach(function (p) {
        frag.appendChild(h("p", { text: p.trim() }));
      });
      return frag;
    }

    function bulletList(items) {
      return h("ul", { class: "bullets" }, items.map(function (it) {
        return h("li", { text: it });
      }));
    }

    function heroMedia(media) {
      var items = Array.isArray(media) ? media : (media ? [media] : []);
      if (!items.length) items = [{}];
      var gallery = h("div", { class: "project-media-gallery" });
      items.forEach(function (m) { gallery.appendChild(mediaFigure(m)); });
      return gallery;
    }

    function mediaFigure(media) {
      media = media || {};
      var inner;
      if (media.type === "video" && media.src) {
        inner = h("video", {
          class: "project-media__el",
          src: media.src,
          poster: media.poster || null,
          autoplay: "",
          loop: "",
          muted: "",
          playsinline: "",
          controls: "",
          preload: "auto",
        });
        inner.muted = true; // property (not just attribute) is what unlocks autoplay
        if (media.speed) {
          inner.defaultPlaybackRate = media.speed;
          inner.playbackRate = media.speed;
          inner.addEventListener("loadedmetadata", function () { inner.playbackRate = media.speed; });
        }
        inner.play().catch(function () {}); // explicit kick — autoplay attr alone is flaky
      } else {
        inner = h("img", {
          class: "project-media__el",
          src: media.src || "assets/img/architecture.svg",
          alt: media.alt || "",
        });
      }
      return h("figure", { class: "project-media" }, [inner]);
    }

    function projectLinkRow(links) {
      links = links || {};
      var items = [];
      if (links.repo)    items.push(APP.iconLink("repo", links.repo, "View repo", { class: "btn btn--ghost" }));
      if (links.demo)    items.push(APP.iconLink("play", links.demo, "Watch demo", { class: "btn btn--primary" }));
      if (links.writeup) items.push(APP.iconLink("doc", links.writeup, "Read write-up", { class: "btn btn--ghost" }));
      if (!items.length) return null;
      return h("div", { class: "project-actions" }, items);
    }

    function pager(current) {
      var all = DATA.projects || [];
      var idx = all.indexOf(current);
      var prev = all[idx - 1];
      var next = all[idx + 1];
      if (!prev && !next) return document.createDocumentFragment();

      return h("nav", { class: "pager", "aria-label": "More projects" }, [
        prev ? h("a", { class: "pager__link pager__link--prev",
                        href: "project.html?id=" + encodeURIComponent(prev.slug) }, [
          h("span", { class: "pager__dir", text: "Previous" }),
          h("span", { class: "pager__name", text: prev.title || "Previous project" }),
        ]) : h("span", {}),
        next ? h("a", { class: "pager__link pager__link--next",
                        href: "project.html?id=" + encodeURIComponent(next.slug) }, [
          h("span", { class: "pager__dir", text: "Next" }),
          h("span", { class: "pager__name", text: next.title || "Next project" }),
        ]) : h("span", {}),
      ]);
    }
  });
})();

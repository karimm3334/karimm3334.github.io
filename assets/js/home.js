(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var APP = window.APP;
    if (!APP) return;
    var DATA = APP.DATA, h = APP.h;
    var person = DATA.person || {};

    // hero
    setText("[data-field='name']", person.name);
    setText("[data-field='title']", person.title);
    setText("[data-field='tagline']", person.tagline);

    var avail = document.querySelector("[data-field='availability']");
    if (avail) {
      if (person.availability) avail.textContent = person.availability;
      else avail.remove();
    }

    var heroLinks = document.querySelector("[data-hero-links]");
    if (heroLinks) {
      APP.contactLinks({ class: "btn btn--ghost" }).forEach(function (n) {
        heroLinks.appendChild(n);
      });
      if (person.resumeUrl) {
        heroLinks.insertBefore(
          APP.iconLink("doc", person.resumeUrl, "Résumé", { class: "btn btn--ghost" }),
          heroLinks.firstChild
        );
      }
    }

    // about
    var aboutBody = document.querySelector("[data-about]");
    if (aboutBody && person.bio) {
      person.bio.split(/\n\n+/).forEach(function (para) {
        aboutBody.appendChild(h("p", { text: para.trim() }));
      });
    }

    // experience
    var xpWrap = document.querySelector("[data-experience]");
    if (xpWrap) {
      (DATA.experience || []).forEach(function (job) {
        xpWrap.appendChild(experienceItem(job));
      });
    }

    // projects
    var grid = document.querySelector("[data-projects]");
    if (grid) {
      (DATA.projects || []).forEach(function (p) {
        grid.appendChild(projectBlock(p));
      });
    }

    // skills
    var skillsWrap = document.querySelector("[data-skills]");
    if (skillsWrap) {
      (DATA.skills || []).forEach(function (group) {
        skillsWrap.appendChild(
          h("div", { class: "skill-group" }, [
            h("h3", { class: "skill-group__title", text: group.group }),
            h("ul", { class: "chips" }, (group.items || []).map(function (item) {
              return h("li", { class: "chip", text: item });
            })),
          ])
        );
      });
    }

    // education
    var eduWrap = document.querySelector("[data-education]");
    if (eduWrap) {
      (DATA.education || []).forEach(function (ed) {
        eduWrap.appendChild(educationItem(ed));
      });
    }

    // languages
    var langWrap = document.querySelector("[data-languages]");
    if (langWrap) {
      (DATA.languages || []).forEach(function (lang) {
        langWrap.appendChild(languagePill(lang));
      });
    }

    function setText(sel, value) {
      var el = document.querySelector(sel);
      if (el && value) el.textContent = value;
    }

    function experienceItem(job) {
      var dates = [job.period, job.duration].filter(Boolean).join("  ·  ");
      var where = [job.type, job.location].filter(Boolean).join("  ·  ");

      var meta = [];
      if (dates) meta.push(h("span", { class: "xp__period", text: dates }));
      if (where) meta.push(h("span", { class: "xp__place", text: where }));

      var children = [
        h("div", { class: "xp__head" }, [
          h("div", { class: "xp__head-main" }, [
            brandMark(job),
            job.role ? h("h3", { class: "xp__role", text: job.role }) : null,
          ]),
          meta.length ? h("div", { class: "xp__meta" }, meta) : null,
        ]),
      ];
      if (job.summary) children.push(h("p", { class: "xp__summary", text: job.summary }));
      if (job.highlights && job.highlights.length) {
        children.push(h("ul", { class: "bullets xp__highlights" },
          job.highlights.map(function (t) { return h("li", { text: t }); })));
      }
      return h("li", { class: "xp" }, children);
    }

    // company logo as an <img> (tinted per theme), linked to its website with an
    // external-link cue; falls back to the company name as text
    function brandMark(job) {
      var inner = job.logo
        ? h("img", { class: "xp__logo", src: job.logo, alt: (job.company || "") + " logo" })
        : h("span", { class: "xp__brand-name", text: job.company || "" });
      if (!job.website) return h("span", { class: "xp__brand" }, [inner]);
      return h("a", { class: "xp__brand", href: job.website, target: "_blank", rel: "noopener",
        "aria-label": (job.company || "Company") + " — website" }, [
        inner,
        h("span", { class: "xp__brand-ext", "aria-hidden": "true", html: APP.ICONS.external }),
      ]);
    }

    function educationItem(ed) {
      var main = [h("h3", { class: "edu__school", text: ed.school || "" })];
      if (ed.credential) main.push(h("p", { class: "edu__credential", text: ed.credential }));

      var meta = [];
      if (ed.period) meta.push(h("span", { class: "edu__period", text: ed.period }));
      if (ed.location) meta.push(h("span", { class: "edu__place", text: ed.location }));
      if (ed.status) meta.push(h("span", { class: "edu__status", text: ed.status }));

      return h("li", { class: "edu" }, [
        h("div", { class: "edu__main" }, main),
        meta.length ? h("div", { class: "edu__meta" }, meta) : null,
        ed.note ? h("p", { class: "edu__note", text: ed.note }) : null,
      ]);
    }

    function projectBlock(p) {
      var href = "project.html?id=" + encodeURIComponent(p.slug);

      var info = [
        h("h3", { class: "project-row__title", text: p.title || "Untitled project" }),
      ];
      if (p.summary) info.push(h("p", { class: "project-row__summary", text: p.summary }));
      if (p.stack && p.stack.length) {
        info.push(h("ul", { class: "chips chips--sm" }, p.stack.map(function (t) {
          return h("li", { class: "chip", text: t });
        })));
      }
      if (p.overview) info.push(overviewParas(p.overview));
      if (p.contributions && p.contributions.length) {
        info.push(h("div", { class: "project-row__built" }, [
          h("h4", { class: "project-row__subtitle", text: "What I built" }),
          h("ul", { class: "bullets" }, p.contributions.map(function (c) {
            return h("li", { text: c });
          })),
        ]));
      }
      var links = projectLinkRow(p.links);
      if (links) info.push(links);
      info.push(h("a", { class: "project-row__more", href: href }, [
        h("span", { text: "Full write-up" }),
        h("span", { class: "project-row__more-icon", html: APP.ICONS.arrow }),
      ]));

      return h("article", { class: "project-row" }, [
        h("div", { class: "project-row__media" }, mediaFrames(p.media)),
        h("div", { class: "project-row__info" }, info),
      ]);
    }

    // media can be a single object or an array — always render a list of frames
    function mediaFrames(media) {
      var items = Array.isArray(media) ? media : (media ? [media] : []);
      if (!items.length) items = [{}];
      return items.map(mediaFrame);
    }

    function mediaFrame(media) {
      media = media || {};
      var el;
      if (media.type === "video" && media.src) {
        el = h("video", {
          class: "project-row__media-el",
          src: media.src,
          poster: media.poster || null,
          autoplay: "",
          loop: "",
          muted: "",
          playsinline: "",
          controls: "",
          preload: "auto",
        });
        el.muted = true; // property (not just attribute) is what unlocks autoplay
        if (media.speed) {
          el.defaultPlaybackRate = media.speed;
          el.playbackRate = media.speed;
          el.addEventListener("loadedmetadata", function () { el.playbackRate = media.speed; });
        }
        el.play().catch(function () {}); // explicit kick — autoplay attr alone is flaky
      } else {
        el = h("img", {
          class: "project-row__media-el",
          src: media.src || "assets/img/architecture.svg",
          alt: media.alt || "",
          loading: "lazy",
          decoding: "async",
        });
      }
      var badge = h("span", { class: "project-row__badge", text:
        media.type === "video" ? "VIDEO" : media.type === "gif" ? "GIF" : "PREVIEW" });
      return h("figure", { class: "project-row__frame" }, [el, badge]);
    }

    function overviewParas(text) {
      var frag = document.createDocumentFragment();
      text.split(/\n\n+/).forEach(function (t) {
        frag.appendChild(h("p", { class: "project-row__overview", text: t.trim() }));
      });
      return frag;
    }

    function projectLinkRow(links) {
      links = links || {};
      var items = [];
      if (links.repo)    items.push(APP.iconLink("repo", links.repo, "Repo", { class: "meta-link" }));
      if (links.demo)    items.push(APP.iconLink("play", links.demo, "Demo", { class: "meta-link" }));
      if (links.writeup) items.push(APP.iconLink("doc", links.writeup, "Write-up", { class: "meta-link" }));
      if (!items.length) return null;
      return h("div", { class: "project-row__links" }, items);
    }

    function languagePill(lang) {
      return h("li", { class: "lang-pill" }, [
        h("span", { class: "lang-pill__name", text: lang.name }),
        lang.label ? h("span", { class: "lang-pill__level", text: lang.label }) : null,
      ]);
    }
  });
})();

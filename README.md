# karimm3334.github.io

My portfolio. Static — plain HTML, CSS, and vanilla JS, no build step. Deploys
to GitHub Pages from `main`.

All content lives in [`assets/js/data.js`](assets/js/data.js); the pages render
themselves from it.

## Run locally

```bash
python -m http.server 8000    # http://localhost:8000
```

(or just open `index.html` — content is a `.js` file, not a fetched JSON.)

## Layout

- `index.html` — home: hero, about, experience, projects, skills, education, languages
- `project.html` — project detail, reads `?id=<slug>`
- `assets/js/data.js` — all content
- `assets/js/{app,home,project}.js` — rendering
- `assets/css/styles.css` — styles; accent is `--accent` (light + dark)

## TODO

- Swap the placeholder SVGs in `assets/img/` for real clips + architecture diagrams
- Add repo/demo links per project in `data.js`

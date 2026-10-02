# Cara HE · Quantitative Research

A small, static portfolio for sharing public research projects. The homepage shows education in compact form and links directly to QR Factor Lab, Quant Research Skills, and this site's repository. The EN / 中文 control switches all page copy and remembers the selection in the browser.

The page intentionally lists no telephone number or email. `noindex` and `robots.txt` request that crawlers do not index it, but **GitHub Pages and its repository remain public**. The long project slug only reduces accidental discovery; it is not access control.

Open `index.html` directly or serve the directory with `python -m http.server 8000`. GitHub Pages should publish from `main` at the repository root. No build step is required. Analytics loads a hosted script only after a Website ID is configured.

## Analytics

The site is prepared for Umami Cloud. Add the live GitHub Pages URL as a website in Umami, then paste its **Website ID** (a UUID, not an API key) into `analytics-config.js` and publish that change. An empty ID disables analytics.

The local `analytics.js` records one homepage visit per page load, even when visitors use in-page anchor links. It also records a `section_view` event once per page load when each of these areas enters the center of the viewport: intro, projects, QR Factor Lab, Quant Research Skills, portfolio site, and How I work. It records `project_link_click` for the labeled GitHub links. The event properties are fixed section/target names; the site does not send names, email addresses, or typed text. URL hashes and query strings are excluded, and the browser's Do Not Track preference is respected. View the totals in Umami's Pages and Events views. Ad blockers may suppress some visits.

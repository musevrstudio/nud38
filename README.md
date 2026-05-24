# NuD-38 Website

Static bilingual website for `nud38.com`.

## Local Preview

Open `index.html` directly in a browser.

Or run a local server from this folder:

```powershell
python -m http.server 8787 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8787/`.

## Routes

- `/` Turkish landing page
- `/en/` English landing page
- `/robots.txt` crawler rules
- `/sitemap.xml` canonical URLs and `hreflang` alternates

## Cloudflare Pages

- Create a GitHub repository for this folder or place this folder in the project repo.
- In Cloudflare Pages, create a Pages project from Git.
- Build command: leave empty.
- Build output directory: `Website` if deploying from the Unreal repo root, or `/` if this folder is the repo root.
- Add custom domains: `nud38.com` and `www.nud38.com`.
- DNS should be managed by Cloudflare for the cleanest setup.

## Current Asset

- `assets/prototype-flight.png` is copied from the current Unreal prototype screenshot.

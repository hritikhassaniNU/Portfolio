# Hritik Hassani — Portfolio (Next.js + TypeScript)

Personal portfolio, migrated to **Next.js (App Router) + TypeScript** with static export for GitHub Pages. The single-page design is preserved 1:1, and projects now have their own routed case-study pages with per-page SEO.

## Run locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build (static export)

```bash
npm run build      # outputs a static site to ./out
```

## Structure

```
app/
  layout.tsx            # <head>, metadata, fonts, JSON-LD Person schema
  page.tsx              # home page (renders the ported design + interactions)
  globals.css           # all styles (ported from the original build) + case-study styles
  projects/[slug]/page.tsx   # project case-study pages (SEO per page)
lib/
  homeMarkup.ts         # home page markup
  homeScript.ts         # home page interactions (preloader, timeline, palette, AI assistant, ...)
  projects.ts           # project case-study content  <-- edit projects here
public/
  me.png  og.png  favicon.svg  .nojekyll
  projects/<slug>/      # drop cover.png / demo.mp4 here for each project
```

## Editing content

- **Projects / case studies:** edit `lib/projects.ts`. Adding an object automatically creates its page at `/projects/<slug>/` and a linked card on the home page (update the home card in `lib/homeMarkup.ts` too, or ask to wire it).
- **Project media:** put `cover.png` (screenshot) or a short `demo.mp4` in `public/projects/<slug>/`, then set `cover` / `video` in `lib/projects.ts`.
- **Résumé:** drop `Hritik_Hassani_Resume.pdf` into `public/`.
- **Photo / social card / favicon:** already in `public/` (`me.png`, `og.png`, `favicon.svg`).

## Deploy to GitHub Pages

The repo is a **project site** named `Portfolio`. One build serves two places correctly,
and it switches automatically:

- **No custom domain** → served at `https://hritikhassaniNU.github.io/Portfolio/`.
  The build uses `basePath: "/Portfolio"` so all assets resolve.
- **Custom domain** → served at the **root** of the domain (e.g. `https://hritikhassani.me/`).
  The build drops the basePath.

The switch is driven by `public/CNAME` (the file you add when configuring a custom domain),
so you never edit code to switch:

1. Push to `main`. The workflow (`.github/workflows/deploy.yml`) builds and deploys.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Live now at `https://hritikhassaniNU.github.io/Portfolio/`.

### Attaching the custom domain later (no code change)

1. Create `public/CNAME` containing one line: `hritikhassani.me` — this alone flips the
   next build to root serving.
2. **Settings → Pages → Custom domain →** `hritikhassani.me` → Save.
3. At your DNS provider, add four apex `A` records for `@`:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   plus a `CNAME` for `www` → `hritikhassaninu.github.io`.
4. Wait for DNS, then tick **Enforce HTTPS**.

`next dev` always runs at the root regardless, so local development is unaffected.

## Notes

- `output: "export"` produces a fully static site (no server). Great for Pages.
- The AI assistant on the home page answers from a built-in knowledge base (no backend needed). To power it with the live Claude API or the LiveKit voice agent, add a small backend and point the client at it.
- `reactStrictMode` is off so the imperative home-page setup doesn't double-run in dev.

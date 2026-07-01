# NEXRA Creative

Marketing site for [nexracreative.com](https://www.nexracreative.com) — a content
& marketing studio for athletes and brands.

Built with Next.js (static export) + Tailwind. Monochrome, editorial, mobile-first.

## Editing content

**All copy, projects and contact details live in [`lib/content.ts`](lib/content.ts).**
Edit that file and push — the site rebuilds automatically.

- **Add a project film:** in `projects`, set `video` to an mp4 URL (and `poster`
  to a still). For a still-only card, set `image`. Leave both blank to show the
  "Film coming soon" placeholder.
- **Clients marquee:** edit the `clients` list.
- **Contact / socials:** edit `site.email`, `site.instagram`, `site.facebook`.

## Develop locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site is emitted to ./out
```

## Deploy

Static export in `./out` — deploys to any static host. Configured for Netlify
via `netlify.toml` (build `npm run build`, publish `out`).

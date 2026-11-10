# Nexra Creative — workspace

This folder is the home for everything Nexra Creative: the website, brand,
content and social, marketing, leads and clients, proposals and contracts,
invoicing and admin. Treat any business task raised here as Nexra work.

- **Website:** https://nexracreative.com (live on Netlify; `www` redirects to
  the apex, which is the canonical host)
- **Email:** hello@nexracreative.com — the business contact for anything
  client-facing. Keep Nexra correspondence off personal or day-job addresses.

## The business

- UK creative content studio (Dorset — Bournemouth / Poole), run by Ryan as a
  side business, separate from their day job.
- Services: content strategy, social media management, video production,
  web design, SEO.
- Positioning: a small studio that takes on a handful of clients. Clients
  should approach because the work looks good, not because they were pushed.

## House rules

- **Tone:** declarative, spare, professional. No exclamation marks, no urgency,
  no growth-hack language, no "sell sell sell".
- **Visuals:** pure monochrome (black, white, greys), editorial Swiss layout,
  generous whitespace, hairline rules. No accent colours, popups or carousels.
- **Client work is anonymised** — no client names, logos or recognisable
  assets unless Ryan explicitly says otherwise.
- **No invented metrics.** Only real, evidenced numbers. Placeholders are
  marked with HTML comments.
- UK English throughout.

## The website

Static HTML/CSS/JS, no build step. Live at nexracreative.com on Netlify (`netlify.toml`,
Netlify Forms for the contact form). Full details — local preview, deploy,
pre-launch checklist, how to add a journal post, the three places the
six-step process must stay in sync — are in [README.md](README.md).

## Shipping website changes

Ryan's standing instruction: once a website change is done and checked, put it
live and merge it into `main` without asking again.

1. Commit and push the working branch.
2. Deploy to production with no build step. Netlify's dashboard build fails on
   this static site, so upload the committed files directly:
   `git archive --format=zip -o site.zip HEAD`, then POST it to
   `https://api.netlify.com/api/v1/sites/c6c11ff3-2825-4878-8520-c39fe9aa8941/deploys`
   with `Content-Type: application/zip`. In a cloud session the saved Netlify
   token is added automatically. Confirm the deploy is `ready` and check the
   change on nexracreative.com.
3. Open a pull request into `main` and merge it, so `main` always matches the
   live site.

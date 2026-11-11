# Nexra Creative

Static marketing site for Nexra Creative — a UK creative content studio.
No build step, no dependencies. Plain HTML, one stylesheet, one small JS file.

---

## Run locally

```bash
python3 -m http.server 4321
```

Then open <http://localhost:4321>. (A `.claude/launch.json` is included so the
editor's preview command works too.)

## Deploy

The site is **live at <https://nexracreative.com>** on Netlify (`www` redirects
to the apex). Netlify is linked to the GitHub repo: **merging into `main`
deploys automatically**. Pull requests get a deploy preview. The dashboard has
no build command, no plugins and publishes the repo root, and `netlify.toml`
sets the same, so there is nothing to build. To deploy by hand instead, run
`npx netlify-cli deploy --prod --no-build --dir .` from this folder. The notes
below are how it was first set up.

Original setup — two commands from this folder:

```bash
npx netlify-cli login
```

That opens a browser to authorise. Then:

```bash
npx netlify-cli deploy --prod --dir .
```

It will offer to create a new site — accept, and it deploys to a
`something.netlify.app` URL immediately. To attach the real domain, either run
`npx netlify-cli sites:open` and add it under *Domain management*, or point
`nexracreative.com` at Netlify's nameservers from your registrar.

`netlify.toml` already handles the `www` → apex redirect, pretty URLs, security
headers and asset caching, so there's nothing to configure in the dashboard.

**After the domain is attached**, set up Netlify Forms notifications (*Forms* →
*Settings* → *Form notifications*) so enquiries land in your inbox rather than
sitting in the dashboard.

The contact form uses **Netlify Forms** (`data-netlify="true"`), so it works with
no backend. It posts to `/thanks.html` and has a honeypot field
(`company-website`) for spam.

---

## Before you go live

Search and replace across all `.html` files:

| Placeholder | Replace with |
|---|---|
| `nexracreative.com` | Your actual domain, if different |
| `hello@nexracreative.com` | Your real inbox |
(Social links have been removed from the footer until the profiles exist. When
they do, add them there **and** to the `sameAs` array in the Organization JSON-LD
in `index.html` — that's what tells Google the accounts belong to the business.)

```bash
# example
grep -rl 'nexracreative.com' *.html *.txt *.xml | xargs sed -i '' 's/nexracreative\.com/yourdomain.co.uk/g'
```

Also:

- **`privacy-policy.html`** — add your registered business details. There's an
  HTML comment marking the spot. If you trade as a limited company, add the
  company number and registered address.
- **`images/og-default.png`** — a plain geometric placeholder is in place. Replace
  with a real 1200×630 social share image when you have one.
- **Photography** — the site ships with greyscale stock images from Pexels
  (free commercial licence, sources logged in `CREDITS.md`). Swap them for your
  own work when you have it; a content studio is judged on its own imagery.
- **Founder bio** — `about.html` has a commented-out block if you later want to
  put your name and face to the studio.

### A note on the case studies

They're written qualitatively and anonymised — no client names, no logos, and
**no invented metrics**. If you want to add numbers, use real ones you can
evidence; there are HTML comments marking where they'd go. Made-up results are
the fastest way to lose a prospect who checks.

---

## Adding a journal post

1. Copy `why-your-website-isnt-ranking.html` as a starting point.
2. Update `<title>`, meta description, canonical, OG tags, and the JSON-LD
   (`headline`, `description`, `datePublished`, `dateModified`, breadcrumb name).
3. Add a `.post-item` row to `journal.html`.
4. Add a `<url>` entry to `sitemap.xml`.
5. Add a bullet to `llms.txt`.

Aim for one genuinely useful piece a month rather than volume — the site's whole
argument is that consistency beats output.

---

## The six-step process

The engagement process (Enquiry → Conversation → Proposal → Agreement →
Production → Publish & report) appears in three places and they must stay in
sync, or the site contradicts itself:

- `index.html` — the `.steps` grid under "How it works" (short form)
- `about.html` — `#process`, the full descriptions (canonical version)
- `contact.html` — "What happens next", steps 1–4 only

If you change the process, change all three.

Note the wording is **"proposal"**, not "RFP". An RFP is a document a client
issues to invite bids from suppliers; what you send is a proposal or statement of
work. Using "RFP" here would read as a category error to anyone who buys agency
services.

## SEO checklist (post-launch)

- [ ] Add the domain to **Google Search Console**, submit `sitemap.xml`
- [ ] Confirm the apex/www canonical matches what Search Console indexes
- [ ] Create a **Google Business Profile** if you want local visibility
- [ ] Check Core Web Vitals in PageSpeed Insights (should pass easily — it's static)
- [ ] Add analytics if wanted (Plausible/Fathom keep the privacy policy accurate;
      GA4 would need a cookie banner and a policy update)


## The skills list

The "Skills" section (content creation, planning, SEO & web, admin) appears
twice, with the same markup, and the two copies must match:

- `index.html` — `#skills`, after the services list, linking to the About page
- `about.html` — `#skills`, before the process (canonical version)

Every item should be something a service page already says the studio does.

---

## Structure

```
index.html               Home
services.html            Four services, engagement models, FAQ (FAQPage schema)
work.html                Anonymised case studies
about.html               Studio, process, client fit
contact.html             Netlify form + direct email
journal.html             Article index
*-*.html                 Journal articles (BlogPosting + BreadcrumbList schema)
thanks.html / 404.html   Utility (noindex)
privacy-policy.html      UK GDPR notice (noindex)
css/style.css            Everything. Design tokens at the top.
js/main.js               Header state, mobile menu, scroll reveals, form state
robots.txt sitemap.xml llms.txt netlify.toml
images/                  Greyscale stock photography — see CREDITS.md
```

### Design notes

Monochrome and editorial: Instrument Serif for display, Archivo for body,
IBM Plex Mono for labels. Tokens live in `:root` in `style.css` — change
`--ink` and `--paper` there if you ever want to invert it.

Reveal animations are gated behind an `html.js` class, so if JavaScript fails
the content is still visible rather than stuck at `opacity: 0`. Keep that gate
if you edit the CSS. `prefers-reduced-motion` is respected throughout.

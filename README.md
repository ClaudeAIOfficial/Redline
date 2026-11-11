# Redline China | 红线新闻

A responsive, static news website inspired by the editorial structure of CGTN.com, with Redline China branding and the supplied logo.

## What works

- Responsive homepage with lead stories, editors' picks, latest stories, topic sections, and video previews.
- Working category navigation for China, World, Politics, Business, Sci-Tech, Culture, Travel, Nature, Video, and Opinion.
- Search overlay (also open with Ctrl/Cmd + K) and keyword results.
- Individual article routes (`?article=...`), related articles, share-on-X, and copy-link controls.
- Mobile menu, accessible semantic layout, original logo, favicon, social and SEO metadata.
- No build process, Node packages, database, or API keys are required.

## Run locally

Extract the ZIP, then open `index.html` in your browser. For the most reliable experience, serve the folder locally:

```bash
cd redline-china
python -m http.server 3000
```

Visit http://localhost:3000.

## Deploy to Vercel

Import the unzipped folder into a Git repository and select it as a Vercel project. Use **Other** as the framework preset, leave the build command empty, and deploy. Alternatively, use the Vercel CLI from this directory: `vercel`.

The home page is `index.html`, and all pages use query-string routes, so no application server or rewrites are required.

## Replace the sample content

`app.js` contains an `ARTICLES` array. Each item supports the following fields:

- `id`: unique URL slug
- `category`: one of the navbar categories
- `type`: label such as Feature or Explainer
- `title`: article title
- `excerpt`: short introduction
- `image`: the filename stem of a fallback image in `assets/`
- `photo`: optional Unsplash image ID, rendered via `images.unsplash.com`
- `read`: reading time in minutes

To add verified reporting, update the `ARTICLES` data and the `bodyFor()` function, which currently inserts generic preview copy into article pages. To use your own photographs, replace the photo logic in `image()` or swap in licensed image files from `assets/`.

**Important:** The included articles and video cards are editorial layout examples, not actual news reporting or playable broadcasts. Replace them with sourced, fact-checked news and properly licensed media before public launch. Images use Unsplash-hosted photographs when they load, and the bundled original editorial illustrations otherwise. This site is not affiliated with CGTN.

## Branding

The original Redline China logo supplied for the project is in `assets/redline-original.webp`. The website uses a header emblem and an SEO preview image derived from it. The theme's red/black color palette lives in `styles.css` (`--red`, `--ink`). The social profile points to https://x.com/RedlineChina.

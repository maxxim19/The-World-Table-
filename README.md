# The World Table

A responsive single-page catering website rebuilt from the original visual direction, with a more polished hospitality-focused layout.

## Files

- `index.html` — page structure and content
- `styles.css` — complete responsive styling
- `script.js` — mobile navigation + interactive kitchen/cellar pairing

## Run locally

Open `index.html` directly in a browser, or use a small local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to Netlify

1. Create a new GitHub repository.
2. Upload these files to the repository root.
3. In Netlify, choose **Add new site → Import an existing project**.
4. Connect the GitHub repository.
5. Leave build command empty and publish directory as `.`.
6. Deploy.

The contact form already includes Netlify Forms attributes (`data-netlify="true"`).

## Photography

The current build uses externally hosted Unsplash images so the site looks finished immediately. Replace those URLs in `styles.css` with your own real event and food photography when available. The five selectors to replace are:

- `.hero-media`
- `.card-image.germany`
- `.card-image.japan`
- `.card-image.mexico`
- `.format-card.seated .format-photo`
- `.format-card.reception .format-photo`
- `.story-image`

## Fonts

The site currently uses free Google Fonts:

- Cormorant Garamond — editorial serif
- Manrope — clean body copy

## Brand colors

- Navy: `#11203a`
- Ivory: `#f5f4ef`
- Gold: `#ad873d`
- Burgundy: `#7b1d2b`
- Sage: `#dde2d8`

## GitHub Pages

This site is fully static. Upload the files in this folder to the root of a GitHub repository, then enable **Settings → Pages → Deploy from a branch → main / root**.

The Kitchen / Cellar selector now includes custom copy for each standard combination. **Plan this pairing** prefills the inquiry form and scrolls the guest to it automatically.

> Note: GitHub Pages hosts the site, but it does not process form submissions on its own. Connect a form service or backend before using the inquiry form in production.


## Premium motion version

This version remains a plain static site: no framework, build step, or server is required. It adds restrained CSS/JavaScript motion (cinematic hero drift, scroll reveals, card micro-interactions, pairing transitions, and a full-bleed hospitality moment). It is fully compatible with GitHub Pages.

For GitHub Pages, keep `index.html`, `styles.css`, and `script.js` at the repository root, then enable **Settings → Pages → Deploy from a branch → main / root**. The proposal form still requires a separate form backend if you want actual submissions while hosted on GitHub Pages.

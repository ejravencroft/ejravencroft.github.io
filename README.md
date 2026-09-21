# E. J. Ravencroft author website

A lightweight, responsive static website built for GitHub Pages. It uses plain HTML, CSS and JavaScript, with no build step or third-party dependencies.

## Preview locally

Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit the site

- Page copy lives in the five `.html` files in this folder.
- Colours, typography and layout live in `assets/styles.css`.
- The mobile menu and automatic copyright year live in `assets/site.js`.
- The home-page image is `assets/hero.webp`.
- Replace all text labelled as a placeholder before announcing books, biography details or news.

## Publish with GitHub Pages

1. Create a new GitHub repository (for example, `ejravencroft-site`).
2. Upload the contents of this folder to the repository's default branch. `index.html` must remain at the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the default branch and the **/(root)** folder, then select **Save**.
6. GitHub will display the public Pages URL after deployment completes.

No `CNAME` file is included. This keeps the website deployment separate from the existing Proton Mail DNS configuration.

## Connect the custom domain later

Only do this after the temporary GitHub Pages URL works. Add `ejravencroft.com` in GitHub's **Custom domain** field, then configure only the web records requested by GitHub at the DNS provider.

Important: do not delete or replace the existing Proton Mail `MX`, `TXT`, DKIM or verification records. Website records (`A`, `AAAA` or `CNAME`) and mail records can coexist. Back up the current DNS zone before making domain changes.

## Project structure

```text
.
├── index.html
├── books.html
├── about.html
├── news.html
├── contact.html
├── assets/
│   ├── hero.webp
│   ├── styles.css
│   └── site.js
└── README.md
```

## Accessibility and performance

The site includes semantic landmarks, visible keyboard focus, a skip link, reduced-motion support, accessible mobile navigation and responsive layouts. The hero artwork is compressed WebP and the site loads no external fonts or scripts.

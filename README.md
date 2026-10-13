# StaxBound landing page

A cinematic B2B landing experience for StaxBound's new iGaming vertical. The site includes a long-form partner pitch, a dedicated contact experience, and seven custom seamless-loop GIFs with baked-in campaign messaging.

Live site: [k1ng936.github.io/staxbound-landing-page](https://k1ng936.github.io/staxbound-landing-page/)

## Local development

```bash
npm ci --cache /tmp/staxbound-npm-cache
npm run dev -- --port 5173
```

Open `http://127.0.0.1:5173/` for the landing page and `http://127.0.0.1:5173/contact.html` for the partner enquiry page.

## Production check

```bash
npm run build
npm run preview -- --port 4173
```

The production output is written to `dist/`.

Pushes to `main` deploy automatically through `.github/workflows/pages.yml`. The workflow can also be run manually from the repository's Actions tab.

## Contact delivery

Without configuration, the enquiry form opens the visitor's email application with a message addressed to `Harpula.T@gmail.com`. To submit directly from the site, copy `.env.example` to `.env` and set `VITE_CONTACT_ENDPOINT` to a form handler that accepts a JSON `POST` request. Do not publish the form until the privacy notice, legal entity details, consent language, and endpoint data handling have been reviewed for the launch jurisdictions.

## Motion assets

Animated artwork lives in `public/images/`. Each of the seven showcase visuals has a sharp 1280×720 animated WebP for current browsers, a seamless 640×360 GIF fallback, and a text-bearing WebP poster for reduced-motion preferences and the header's pause control. The portal, core, and network scenes also have separate text-free 1600×900 motion loops for full-bleed backgrounds, with compact 640×360 GIF fallbacks. The original text-free WebPs remain the stills used when motion is paused.

## GitHub Pages fallback

The preferred Pages source is **GitHub Actions**, which publishes `dist/` using `.github/workflows/pages.yml`. A committed production build also lives in `docs/` so the site remains functional if GitHub Pages is accidentally configured to publish `main/(root)`. Regenerate that fallback after site changes with:

```bash
npm run build:pages-fallback
```

Run `bash scripts/build-gifs.sh` to regenerate every delivery format from the originals. Regeneration requires `ffmpeg` and the DejaVu Sans fonts available at the paths declared in that script. The script normalizes source aspect ratios before animating them so artwork and typography are never stretched.

Run `bash scripts/build-gifs.sh backgrounds-only` when only the full-bleed background loops need to be regenerated.

## Launch checklist

- Validate the `$50–60B` internal market estimate and supporting methodology.
- Confirm the patent-pending language against the relevant filed applications.
- Confirm early-partner term ranges, eligibility, availability, and signed-agreement language.
- Complete technical, licensing, certification, responsible-gaming, legal, and privacy review.

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

Animated artwork lives in `public/images/`; matching WebP stills support reduced-motion preferences and the header's pause control. Run `bash scripts/build-gifs.sh` to regenerate all seven GIFs from the stills. Regeneration requires `ffmpeg` and the DejaVu Sans fonts available at the paths declared in that script.

## Launch checklist

- Validate the `$50–60B` internal market estimate and supporting methodology.
- Confirm the patent-pending language against the relevant filed applications.
- Confirm early-partner term ranges, eligibility, availability, and signed-agreement language.
- Complete technical, licensing, certification, responsible-gaming, legal, and privacy review.

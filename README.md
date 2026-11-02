# Mirosław Stach Firma Usługowa – strona www

Strona firmowa (roboty ziemne, wyburzenia, wynajem maszyn) – https://www.miroslawstach.pl

## Technologia
- [Astro](https://astro.build) – statyczne HTML, zoptymalizowane obrazy (AVIF/WebP)
- Hosting: Vercel (`vercel.json`: przekierowania, nagłówki bezpieczeństwa, CSP)
- Bez frameworka JS po stronie klienta – jedyny skrypt: `public/js/site.js`

## Gdzie co jest
- `src/data/site.ts` – dane firmy (NAP), obszar działania
- `src/data/services.ts` – treści usług (podstrony `/uslugi/*`)
- `src/data/gallery.ts` – zdjęcia + opisy (alt)
- `src/layouts/Base.astro` – `<head>`, SEO, JSON-LD, nagłówek, stopka
- `public/robots.txt`, `public/llms.txt` – SEO / GEO
- `seo/` – research słów kluczowych, audyt, plan, raport

## Komendy (Node >= 22.23)
```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

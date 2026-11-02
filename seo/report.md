# Raport SEO / GEO / bezpieczeństwo – miroslawstach.pl

Stan na: 2026-11-02 (wdrożone na produkcję, gałąź `main`)

## Wyniki (Lighthouse, żywa strona)

| Strona | Urządzenie | Wydajność | Dostępność | Dobre praktyki | SEO |
|---|---|---|---|---|---|
| `/` | telefon | 97 | 96 | 100 | 100 |
| `/` | komputer | 100 | 95 | 100 | 100 |
| `/uslugi/koparka-kolowa` | telefon | 100 | 96 | 93* | 100 |

\* chwilowy błąd pobrania CSS w trakcie podmiany wdrożenia – po wdrożeniu wszystkie pliki zwracają 200.

## Co jest na stronie

- **Technologia:** Astro, statyczny HTML z pełną treścią (wcześniej pusta aplikacja React), obrazy AVIF/WebP w kilku rozmiarach, jeden mały skrypt.
- **Strony (14):** `/`, `/uslugi` + 7 podstron usług, `/roboty-ziemne-malopolska`, `/roboty-ziemne-slask`, `/galeria`, `/kontakt`, `404`.
- **Obszar działania:** cała Polska, z wyróżnieniem Małopolski (siedziba) i Śląska. Każda strona regionalna ma własną treść (bez kopii z podmienioną nazwą).
- **Treści:** teksty ze starej strony (Dlaczego my?, Nasza oferta, opisy usług) + FAQ z krótkimi odpowiedziami pod GEO + „ponad 10 lat doświadczenia, setki zadowolonych klientów”.
- **SEO techniczne:** unikalne title (≤60) i description (≤160), canonical, OG, jeden H1, okruszki, `sitemap-index.xml`, 404 z `noindex`, przekierowania 308: `/home` → `/`, `/usługi` → `/uslugi`, apex/http → `https://www`.
- **Dane strukturalne (JSON-LD):** `GeneralContractor` (NAP, NIP, nazwy alternatywne zgodne z wizytówką Google, areaServed: Polska + woj. małopolskie i śląskie), `Service`, `FAQPage`, `BreadcrumbList`, `ImageGallery`, `ItemList`, `ContactPage`.
- **GEO:** `llms.txt`, `robots.txt` jawnie dopuszczający boty AI (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended…).
- **Typografia:** automatyczne twarde spacje po jednoliterowych słowach i przed jednostkami (`src/middleware.ts`), równe łamanie nagłówków.
- **Bezpieczeństwo:** strona statyczna (brak serwera/bazy/panelu/formularzy), CSP `script-src 'self'` bez inline JS i zewnętrznych domen, HSTS z preload, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy, COOP. `Dane.txt` wykluczony z repo.

## Do uzupełnienia na stronie (gdy będą dane)

- link do wizytówki Google → `site.sameAs` w `src/data/site.ts`
- link do opinii Google → przycisk „Opinie w Google” + kod QR
- godziny pracy na wszystkie dni → `openingHours` w schema
- orientacyjne ceny / cennik (duży plus dla GEO)
- ewentualna usługa „minikoparka” (widoczna na zdjęciach)
- kolejne regiony – tylko tam, gdzie realnie są zlecenia

## Zadania dla właściciela (poza kodem)

1. **Przejąć wizytówkę Google** („Jesteś właścicielem tej firmy?”) i ją zweryfikować – obecnie nie ma właściciela.
2. Uzupełnić wizytówkę: zdjęcia, usługi, obszar obsługi (małopolskie, śląskie), kategorie dodatkowe, opis.
3. Zbierać opinie (SMS z linkiem po każdej robocie) – konkurencja w pakiecie mapowym ma 2–17 opinii.
4. Google Search Console + Bing Webmaster Tools: dodać domenę, zgłosić `https://www.miroslawstach.pl/sitemap-index.xml`.
5. Katalogi z identycznymi danymi: Panorama Firm, pkt.pl, Oferteo, Aleo, Cybo.
6. Bezpieczeństwo kont: zmiana hasła FTP z `Dane.txt`, 2FA (GitHub, Vercel, OVH, Gmail), blokada transferu domeny w OVH, Vercel Firewall → Bot Protection (bez blokowania botów AI).

## Pomiar

- Search Console: wyświetlenia/kliknięcia/pozycje dla fraz z `seo/keyword-research.md` (uwaga: research robiony pod frazy lokalne – po zmianie na „cała Polska + Małopolska/Śląsk” główne frazy to m.in. „roboty ziemne Małopolska/Śląsk”, „usługi koparką”, „wyburzenia”, „wynajem wozideł/ładowarek”).
- Co 4–8 tygodni: ręczny SERP + pytania do ChatGPT/Perplexity („firma od robót ziemnych Małopolska”).

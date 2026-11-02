# Raport SEO / GEO / bezpieczeństwo – miroslawstach.pl

Data: 2026-11-02 · gałąź `redesign`

## 1. Audyt starej strony (stan wyjściowy)

| Priorytet | Problem | Gdzie |
|---|---|---|
| krytyczny | Strona wyłączona (HTTP 402 DEPLOYMENT_DISABLED na starym Vercelu). Naprawione: nowe repo i nowy projekt Vercel. | hosting |
| krytyczny | React SPA (create-react-app): serwer zwracał pusty `<div id="root">`, a boty AI nie widziały treści | `public/index.html`, `src/` |
| krytyczny | Zdjęcia w oryginalnej rozdzielczości (4000+ px, łącznie ~190 MB) ładowane na stronie | `src/Common/Images` |
| wysoki | Jeden `<title>` i jeden `description` dla wszystkich podstron; opis z pustym polem („Przeginia, , ”) | `public/index.html` |
| wysoki | URL z polskim znakiem (`/usługi`), przekierowanie `/` → `/home` (duplikat strony głównej) | `src/Core/App.js` |
| wysoki | Brak sitemap, brak danych strukturalnych, brak canonical | – |
| wysoki | Brak osobnych podstron usług, cała oferta na jednej stronie (brak dopasowania do fraz) | – |
| średni | Hierarchia nagłówków h1 → h4 → h3, brak `alt` na wszystkich zdjęciach | komponenty |
| średni | `manifest.json` z domyślnymi danymi CRA („React App”), stary `index.html` z GitHub Pages | `public/` |
| średni | Pusta sekcja „Polityka prywatności”, „©2023”, literówka „skecji” | stopka, oferta |
| niski | 6 osobnych importów Google Fonts (wolniejsze ładowanie, dane do Google) | `public/index.html` |
| bezpieczeństwo | **Hasło FTP zapisane jawnym tekstem w `Dane.txt`** (teraz wykluczony w `.gitignore`) | `Dane.txt` |
| bezpieczeństwo | Brak nagłówków bezpieczeństwa (CSP, HSTS, X-Frame-Options), zewnętrzne CDN-y | – |

## 2. Co zostało zrobione

**Technologia:** Astro, czyli statyczny HTML z pełną treścią, obrazy AVIF/WebP w kilku rozmiarach, jeden mały skrypt (`public/js/site.js`), czcionki hostowane lokalnie.

**Struktura URL (mapa słów kluczowych):**

| URL | Fraza główna |
|---|---|
| `/` | roboty ziemne Przeginia / Olkusz / Krzeszowice |
| `/uslugi` | usługi koparką, wynajem maszyn |
| `/uslugi/koparka-gasienicowa` | usługi koparką gąsienicową, wykop pod fundament |
| `/uslugi/koparka-kolowa` | usługi koparką kołową, korytowanie, niwelacja |
| `/uslugi/wyburzenia-rozbiorki` | wyburzenia i rozbiórki |
| `/uslugi/mulczowanie-karczowanie` | mulczowanie terenu, mulczer leśny |
| `/uslugi/wynajem-ladowarki` | wynajem ładowarki kołowej |
| `/uslugi/wynajem-wozidel` | wynajem wozidła budowlanego |
| `/uslugi/ciagnik-beczkowoz-zamiatarka` | usługi ciągnikiem, beczkowóz |
| `/obszar-dzialania` | usługi koparką + miejscowości |
| `/galeria` | realizacje |
| `/kontakt` | NAP |

Przekierowania 301: `/home` → `/`, `/usługi` → `/uslugi`, `/index.html` → `/`.

**SEO:** unikalne title i description, canonical, Open Graph z obrazem 1200×630, jeden H1 na stronę, okruszki, linkowanie wewnętrzne (usługi ↔ usługi, stopka), opisowe `alt` dla 35 zdjęć, `sitemap-index.xml`, strona 404 z `noindex`.

**GEO:** JSON-LD (`GeneralContractor` z NAP, NIP, areaServed i katalogiem usług; `Service`, `FAQPage`, `BreadcrumbList`, `ImageGallery`, `ItemList`, `ContactPage`); sekcje FAQ z krótkimi, samodzielnymi odpowiedziami; konkretne parametry maszyn (18 t, 8,5–25 t, 1,5–16 t, 10 000 l, 10 m³); `llms.txt`; `robots.txt` z dostępem dla botów AI.

**Bezpieczeństwo:** strona w pełni statyczna (bez serwera, bazy, panelu i formularzy, więc nie ma czego zhakować). W `vercel.json`: ścisłe CSP (`script-src 'self'`, bez inline JS i zewnętrznych domen), HSTS z preload, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP. Brak skryptów firm trzecich.

## 3. Do uzupełnienia ([[DO UZUPEŁNIENIA]])

Treść nie zawiera zmyślonych faktów. Te dane dodasz w `src/data/site.ts`, a pojawią się automatycznie:
- `foundingYear`: rok założenia firmy (stara strona: „ponad 7 lat”, tekst z ok. 2023 r.),
- `sameAs`: link do Profilu Firmy w Google, Facebooka itp.,
- **obszar działania** (`area.towns`): przyjęte założenie, do potwierdzenia,
- **ceny / widełki** (zł/h, minimalny czas, dojazd). Strona z cennikiem mocno pomoże w GEO, bo AI cytuje konkretne kwoty,
- czy firma ma **minikoparkę** (widać ją na zdjęciach transportu). Jeśli tak, warto dodać osobną usługę,
- godziny pracy (do schema `openingHours`),
- polityka prywatności: strona nie zbiera danych ani cookies, ale warto dodać krótką notkę, jeśli dojdzie analityka.

## 4. Zadania dla właściciela (poza kodem)

**Bezpieczeństwo kont (najważniejsze, bo strony statycznej nie da się zhakować, ale kont da się przejąć):**
1. Zmień hasło FTP z `Dane.txt` w panelu OVH i usuń ten plik z komputera / przenieś do menedżera haseł.
2. Włącz 2FA na: GitHub, Vercel, OVH, Gmail firmy.
3. OVH → domena: włącz **blokadę transferu** i **DNSSEC**.
4. Vercel → Settings → Deployment Protection: zostaw ochronę podglądów (Vercel Authentication).
5. Vercel → Firewall: włącz **Bot Protection** (managed rules) w trybie „Log”, po tygodniu „Challenge”. Zweryfikowane boty (Google, Bing, boty AI) przechodzą. **Nie włączaj** reguły „AI Bots: Deny”, bo zablokuje widoczność w ChatGPT i Perplexity.
6. Po stabilnym działaniu HTTPS: zgłoś domenę na https://hstspreload.org (opcjonalnie).

**Widoczność:**
1. **Profil Firmy w Google**: najważniejsze dla fraz lokalnych (mapa). Kategoria „Usługi robót ziemnych”, dodatkowe: „Firma wyburzeniowa”, „Wypożyczalnia sprzętu budowlanego”. Te same NAP co na stronie, zdjęcia z galerii, link do strony.
2. Zbieraj opinie w Google od klientów (prośba SMS z linkiem po zakończonej pracy).
3. Google Search Console + Bing Webmaster Tools: dodaj domenę i zgłoś `https://www.miroslawstach.pl/sitemap-index.xml`.
4. Wpisy w katalogach ze spójnym NAP: Panorama Firm, pkt.pl, Oferteo, Cybo (popraw istniejący wpis), Aleo.
5. Facebook firmowy z linkiem do strony, potem dopisanie go do `sameAs`.

## 5. Pomiar efektów
- Search Console: wyświetlenia, kliknięcia i średnia pozycja dla fraz z `seo/keyword-research.md`.
- Co 4–8 tygodni: ręczne sprawdzenie SERP („usługi koparką Olkusz”, „mulczowanie Olkusz”, „wyburzenia Kraków”) oraz pytań do ChatGPT / Perplexity („firma od robót ziemnych koło Olkusza”).
- Realistycznie: indeksacja w ciągu dni, pierwsze pozycje lokalne po kilku tygodniach, stabilne po 2–4 miesiącach. Najwięcej da Profil Firmy w Google + opinie.

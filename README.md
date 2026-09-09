# janisiekkinen.com

Projektimuistio. Päivitetty 8.9.2026 koodin ja saman päivän agenttisessioiden perusteella. Ei git-historiaa: kansio ei ole git-repositorio.

Kirjoitetaan vain se, mikä on todennettavissa. Ei keksittyjä hintoja, Y-tunnusta, partnereita, mitaleja tai yhteystietoja.

## Mikä tämä on

Jani Siekkinen (Siego): suomalainen poolammattilainen, 8-pallon Suomen mestari 2018, kiertueilla edelleen (Euro Tour, WNT). Sivuston tarkoitus on henkilöbrändi ja yhteydenotto: yksityis- ja ryhmävalmennus, alkeet, videoanalyysi, yritys- ja yksityistilaisuudet, keppihuollot, GameOn-pelipaidat ja sponsorointi.

- Domain: https://janisiekkinen.com
- Suomi on pääkieli (juuri `/`). Englanti elää `/en/`.
- Hinnat ovat tarjouskohtaisia. Julkaistuja hintoja ei ole (`pricingMode: "quote"`).
- Sisältö on koodissa, ei CMS:ää eikä tietokantaa.

## Karpathy-ohjeet

Karpathy-guidelines on agentin työtapa (ajattele ennen koodia, yksinkertaisuus, kirurgiset muutokset, verifioitavat tavoitteet). Se ei ole sivuston ominaisuus. Taitoa ei ole käytetty projektin standardina: se liitettiin tähän työhön ensimmäistä kertaa 8.9.2026. Aiempi työ oli tuote, tyyli ja migraatio.

| Ohje | Tilanne tässä koodissa |
|------|------------------------|
| Simplicity first | Kyllä pääosin. Kaksikielinen esittelysivusto plus yksi API. Copy `src/i18n/fi.ts` ja `src/i18n/en.ts`, vinkit `src/lib/tips.ts`. Ei CMS:ää, kirjautumista tai tilakirjastoja. Sivut ovat ohuita wrapperita (`SitePage` + view). Client-komponentteja on kaksi: `ContactForm.tsx` ja `MobileNav.tsx`. |
| Ei spekulatiivisia ominaisuuksia | Osittain ei. `zod` on `package.json`:ssa, ei importteja `src/`:ssa. `analyticsToken` on `src/config/site.ts`:ssä, ei käytössä; tietosuojateksti sanoo ettei seurantaa ole. CSP sallii silti Cloudflare Insights -skriptit. Astro/Pages-jäänne: `wrangler.toml`, juuren `dist/`. |
| Surgical structure | Kyllä rakenteessa. FI-juuri ja `/en/`-parit `src/i18n/routes.ts`. Palvelusivut käyttävät `OfferingView.tsx`. FI/EN `page.tsx`-tiedostot ovat tietoisesti ohuita. |
| Goal-driven / testit | Ei. Ei `*.test.*` / `*.spec.*`, ei testirunneria. Tarkistus on ollut selain ja visuaalinen palaute. |

Yhteenveto: sivusto on tarkoitukseensa yksinkertainen. Taito ei ole projektin standardi. Suurin poikkeama on jäännekoodi, ei liika arkkitehtuuri.

## Stack

Nykyinen stack (ei Astro):

| | Versio / arvo |
|---|---|
| Next.js | 16.3.4, App Router |
| React / React DOM | 19.2.8 |
| TypeScript | ^5 (asennettu 5.9.3) |
| Tailwind CSS | v4 (`@tailwindcss/postcss`) |
| OpenNext Cloudflare | ^1.20.2 |
| Wrangler | ^4.120.1 |
| Node | `>=22` |
| Hosting | Cloudflare Worker (`wrangler.jsonc`, nimi `janisiekkinen-com`) |
| Vercel | Ei konffia, ei käytössä |

`package.json`-skriptit:

- `dev`: `next dev --hostname 127.0.0.1`
- `build`: `opennextjs-cloudflare build`
- `build:next`: `next build` (OpenNext kutsuu tätä, ks. `open-next.config.ts`)
- `preview`: `opennextjs-cloudflare preview`
- `start`: `next start --hostname 127.0.0.1`
- `lint`: `eslint`
- `deploy`: `opennextjs-cloudflare deploy -- --keep-vars --minify`

Tyylejä: `src/styles/global.css`. Fontit: Barlow Condensed ja Schibsted Grotesk (`public/fonts/`, preload root layoutissa).

## Paikallinen ajo ja deploy

```bash
npm ci
npm run dev
```

Avaa http://127.0.0.1:3000

Lomakkeen salaisuudet paikallisesti:

```bash
cp .dev.vars.example .dev.vars
```

`.dev.vars` on gitignored. Ilman `SMTP2GO_API_KEY`, `MAIL_FROM` ja `MAIL_TO` reitti `POST /api/contact` palauttaa 503.

Tuotantodeploy:

```bash
npm run deploy
```

Cloudflare Workers Builds (git-push):

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

`npx wrangler deploy` kutsuu OpenNextin `deploy`-komentoa. Cloudflare Buildsissa Build command voi olla tyhjä: paikallinen `opennextjs-cloudflare`-wrapper ajaa `build` ensin, jos `.open-next` puuttuu.

Worker-konfig: `wrangler.jsonc` (`main`: `.open-next/worker.js`, `assets`: `.open-next/assets`, `nodejs_compat`, `keep_vars: true`). Worker-nimi on `janisiekkinen-com` (sama kuin Cloudflare-projekti).

Tuotannon ympäristömuuttujat ja salaisuudet asetetaan vain Cloudflare-dashboardissa. Niitä ei ole wrangler-konfissa. `keep_vars: true` pitää dashboardin arvot ennallaan jokaisessa deployssa. Älä lisää `vars`-lohkoa wrangleriin.

## Miten sivusto on rakennettu

```
Request
  -> src/middleware.ts asettaa x-locale (polku /en tai /en/... = en, muuten fi)
  -> src/app/layout.tsx lukee headerin ja asettaa <html lang>
  -> page.tsx (ohut): buildMetadata + SitePage + view
  -> copy(locale) src/i18n/index.ts -> fi.ts / en.ts
```

Yhteydenotto:

```
ContactForm (client)
  -> POST /api/contact
  -> origin, rate limit, honeypot, täyttöaika
  -> Turnstile jos avaimet asetettu
  -> SMTP2GO EU (omistajalle + automaattivastaus lähettäjälle)
```

Keskeiset tiedostot:

| Polku | Rooli |
|-------|--------|
| `src/config/site.ts` | Nimi, domain, Instagram, tyhjät yhteystiedot/avaimet, palvelu-id:t |
| `src/i18n/fi.ts`, `src/i18n/en.ts` | Kaikki UI- ja meta-copy |
| `src/i18n/routes.ts` | FI/EN-polkuparit ja vinkkien slug-parit |
| `src/lib/metadata.ts`, `src/lib/seo.ts`, `src/lib/schema.ts` | Metadata, hreflang, JSON-LD |
| `src/lib/tips.ts` | Kolme vinkkiartikkelia per kieli |
| `src/components/SitePage.tsx` | Kuori: JSON-LD, skip link, Header, main, Footer, EnquireBar |
| `src/components/HomeView.tsx` | Etusivu: Hero, Stats, Pitch, palvelut, PhotoBand, FAQ |
| `src/components/OfferingView.tsx` | Palvelusivut (valmennus, tilaisuudet, huollot, GameOn, sponsorointi) |
| `src/components/JaniView.tsx` | Bio + tulokset |
| `src/components/ContactView.tsx` + `ContactForm.tsx` | Yhteydenotto |
| `src/assets/images/` | hero-wide, break-shot, hands-cue, hero-table, show-shot, table-lamp |

Sisältö on hardcoded. Ulkoinen runtime-API on vain yhteydenotto (SMTP2GO + valinnainen Turnstile).

## Reitit

Trailing slash on päällä (`next.config.ts`).

| FI | EN | Tiedostot |
|----|----|-----------|
| `/` | `/en/` | `src/app/page.tsx`, `src/app/en/page.tsx` |
| `/jani/` | `/en/jani/` | `jani/page.tsx` |
| `/huollot/` | `/en/repairs/` | `huollot/`, `en/repairs/` |
| `/valmennukset/` | `/en/coaching/` | `valmennukset/`, `en/coaching/` |
| `/tilaisuudet/` | `/en/events/` | `tilaisuudet/`, `en/events/` |
| `/gameon/` | `/en/gameon/` | `gameon/` |
| `/sponsorointi/` | `/en/sponsorship/` | `sponsorointi/`, `en/sponsorship/` |
| `/yhteystiedot/` | `/en/contact/` | `yhteystiedot/`, `en/contact/` |
| `/tulokset/` | `/en/results/` | `tulokset/`, `en/results/` |
| `/vinkit/` | `/en/tips/` | `vinkit/`, `en/tips/` |
| `/vinkit/[slug]/` | `/en/tips/[slug]/` | dynaamiset sivut |
| `/tietosuoja/` | `/en/privacy/` | `tietosuoja/`, `en/privacy/` |
| `/ehdot/` | `/en/terms/` | `ehdot/`, `en/terms/` |

Vinkkien slug-parit (`src/i18n/routes.ts`, `src/lib/tips.ts`):

- `breakin-rytmi` / `break-rhythm`
- `8-pallon-paatos` / `eight-ball-decision`
- `videoanalyysin-klipit` / `video-analysis-clips`

Pysyvät ohjaukset (`next.config.ts`):

- `/valmennus` ja `/valmennus/` → `/valmennukset/`
- `/yrityksille` ja `/show` (slash-variantit) → `/tilaisuudet/`
- `/en/corporate` ja `/en/show` → `/en/events/`

Muut reitit:

- `POST /api/contact` → `src/app/api/contact/route.ts`
- `/robots.txt` → `src/app/robots.ts`
- `/sitemap.xml` → `src/app/sitemap.ts`
- `/manifest.webmanifest` → `src/app/manifest.ts`
- `/llms.txt` → `src/app/llms.txt/route.ts`

Kielenvaihto: `LangSwitch` käyttää `counterpartPath`. Hreflang: `fi-FI`, `en-GB`, `x-default` osoittaa suomen.

## Yhteydenotto

Lomake: `src/components/ContactForm.tsx` → `POST /api/contact`.

Palvelin (`src/app/api/contact/route.ts`):

1. Origin-tarkistus (`Origin`-host vs `Host`; tuotannossa molemmat vaaditaan).
2. Rate limit: 8 osumaa / 10 min per IP ja per sähköposti (in-memory `Map`, max 8000 avainta).
3. Runko max 20 000 merkkiä.
4. Honeypot-kenttä `website`: jos täytetty, vastaus on silti `{ ok: true }` eikä postia lähde.
5. Täyttöaika kentästä `t`: vähintään 4 s, enintään 2 h.
6. Validointi: nimi min 2, sähköposti, viesti min 8, `service` joukosta `serviceIds`.
7. Turnstile: jos `site.turnstileSiteKey` tai `TURNSTILE_SECRET_KEY` on asetettu, molemmat tarvitaan ja token varmennetaan Cloudflarella. Paikallisesti skipataan vain kun molemmat ovat tyhjiä.
8. Sähköposti: SMTP2GO EU `https://eu-api.smtp2go.com/v3/email/send`. Omistajalle viesti + Reply-To. Lähettäjälle lyhyt kuittaus FI/EN.

Salaisuudet (`.dev.vars.example` / Cloudflare Worker vars):

- `SMTP2GO_API_KEY`
- `MAIL_FROM` (esimerkki: `Jani Siekkinen <noreply@janisiekkinen.com>`)
- `MAIL_TO`
- `TURNSTILE_SECRET_KEY`

Julkinen Turnstile-site key kuuluu `src/config/site.ts` (`turnstileSiteKey`). Nyt tyhjä.

Lähettäjän domain on verifioitava SMTP2GO:ssa (SPF/DKIM) ennen tuotantoa.

## SEO, LLM, PWA, analytiikka

- Per-sivu `buildMetadata`: title, description, canonical, hreflang, Open Graph, Twitter.
- JSON-LD: WebSite, Person, ProfessionalService, BreadcrumbList; FAQ etusivulla; Article vinkeissä.
- Sitemap listaa kaikki `routePairs`-polut ja vinkit, plus hreflang-alternates.
- `robots.txt` sallii kaiken ja osoittaa sitemapin.
- `llms.txt` on staattisesti generoitu markdown-yhteenveto palveluista, sivuista ja yhteydenotosta.
- Web app manifest (`manifest.ts`) ja ikonit `public/`. Ei service workeriä, ei offline-välimuistia.
- `analyticsToken` on tyhjä eikä sitä lueta komponenteista. Tietosuojateksti sanoo, ettei seurantaa ole.

## Turvallisuus (koodissa nyt)

`next.config.ts` headerit kaikille poluille:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Cross-Origin-Opener-Policy: same-origin`
- CSP: `default-src 'self'`; skriptit self + inline + Turnstile + Cloudflare Insights; kuvat self/data/blob; connect self + Turnstile + Insights; frame vain Turnstile; `object-src none`; `frame-ancestors none`

Kehityksessä CSP:ssä on `'unsafe-eval'` (React/Turbopack tarvitsee sen; korjaus 8.9.2026 konsolivirheeseen). Tuotannossa ei.

Kuvat: avif/webp, pitkät cache-headerit `/_next/image` ja `/fonts/*`.

Salaisuuksia ei ole koodissa. `.env` ja `.dev.vars` ovat gitignored.

## Konfiguraatio jota ei pidä sekoittaa

| Tiedosto | Tarkoitus |
|----------|-----------|
| `wrangler.jsonc` | Worker-deploy (OpenNext). Nimi `janisiekkinen-com`. |
| `AGENTS.md` | Next.js `next dev` kirjoittaa tämän uudelleen. Ei projektidokumentti. |
| `CLAUDE.md` | Vain `@AGENTS.md`. |

`.env.example` viittaa: julkiset avaimet `src/config/site.ts`, salaisuudet `.dev.vars`.

## `src/config/site.ts` nyt

Täytetty: `name`, `domain` (`https://janisiekkinen.com`), `instagramHandle` (`jsiegopool`), `pricingMode` (`quote`).

Tyhjää (TODO): `email`, `phone`, `phoneDisplay`, `whatsapp`, `analyticsToken`, `turnstileSiteKey`, `startingFrom.private/group/show`.

## Historia (8.9.2026)

Kronologia agenttisessioista. Ei commit-hashia.

1. Suunnitelma ja ensimmäinen toteutus Astro 5 + Tailwind v4 + Cloudflare Pages Function + SMTP2GO. Säännöt: ei keksittyjä mitaleja, partnereita, hintoja tai hallinimiä; sivustolla ei em dash -merkkiä (`—`).
2. Sivukartta: Jani, Huollot, Valmennukset, yksityis- ja yritystilaisuudet, GameOn, Yhteystiedot. Suomi pääkieli, englanti vaihto.
3. Tyyli-iteraatiot: hero, otsikoiden riviväli, mobiilin tyhjä tila, kielioppi, myyvämpi copy.
4. Migraatio Next.js 16 + React 19 + OpenNext Cloudflare Worker, koska käyttäjä halusi saman linjan kuin verbal.fi (uusimmat versiot). Lomake siirtyi Pages Functionista `src/app/api/contact/route.ts`:ään. README jäi Astro-kuvaukseen (korjattu tällä tiedostolla).
5. Mobiilivalikko: vaakascroll ei toiminut; hamburger `MobileNav`.
6. Turvallisuuskatselmus (auditing-security). CSP, origin, rate limit, Turnstile-polku.
7. Copy: hero-suomi, CTA etusivulla Valmennukset / Tilaisuudet, pidemmät myyntitekstit FI ja EN.
8. Sponsorointi: `/sponsorointi/` ja `/en/sponsorship/`, navissa oma linkki.
9. Footer uusiksi.
10. Yhteydenottolomakkeen kentät ja suomenkieliset placeholderit.
11. GameOn-sivu: lisätietoa https://www.gameon.style/ perusteella. Ei verkkokauppaa; koot ja varasto vaihtelevat, tilaus lomakkeella.
12. `llms.txt` ja SEO-tiedostojen tarkistus.
13. Tämä muistio.

## Avoimet TODOt

Edelleen totta `site.ts`:ssä ja vanhassa README:ssa:

- Julkinen sähköposti, puhelin (E.164 + näyttömuoto), WhatsApp
- Hinnat / starting-from (älä näytä UI:ssa ennen kuin kentät on täytetty)
- Y-tunnus
- Oikeat valokuvat (nyt `src/assets/images/`)
- Kalenterivaraus
- Turnstile-avaimet tuotantoon
- Analytiikka vain jos halutaan; copy ja token ovat ristiriidassa (copy: ei seurantaa)

## Tiedetyt jäänteet (ei siivottu 8.9.2026)

- Juuren `dist/` (gitignore, vanha Pages-output)
- `zod` riippuvuus ilman käyttöä `src/`:ssa
- `analyticsToken` ilman käyttöä; CSP silti Insights-valmiudessa
- `data/state_store.db/` ei site-koodin käytössä
- Ei automaattisia testejä

## Miten tätä muistiota pidetään ajan tasalla

Päivitä tämä sama `README.md` kun stack, reitit, env-muuttujat, deploy-kohde tai avoimet TODOt muuttuvat. Älä jätä rinnakkaista vanhentunutta README:ta. `AGENTS.md` ei korvaa tätä tiedostoa.

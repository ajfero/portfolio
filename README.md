# ajfero.com

Personal portfolio of **Anthony Fernandez (AJFero)** — electronic engineer,
software developer and independent IT consultant on the Gold Coast, Australia.

Live at [ajfero.com](https://ajfero.com).

## Stack

- Next.js (App Router) + React
- Tailwind CSS v4
- Geist / Geist Mono via `next/font`
- No database, no analytics, no tracking

## Structure

- `src/lib/content.ts` — single source of truth for all site content.
  Every public claim is traceable to public evidence (GitHub, LinkedIn).
- `src/components/` — page sections (hero, services, work, about, contact).
- `src/app/` — layout, page, sitemap, robots and metadata.

## Development

```bash
npm install
npm run dev
```

## Licence

See [LICENSE](./LICENSE). The original Magic Portfolio (CC BY-NC) template
code was fully removed and replaced with an original, commercially usable
implementation on permissively licensed dependencies.

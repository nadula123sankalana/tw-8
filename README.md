# Proposal Deck (Protected)

This project is a Next.js 16 proposal deck with optional username/password protection.

## Auth model

- If `PROPOSAL_USER` and `PROPOSAL_PASS` are set, the app is protected.
- Access is granted when either:
  - a valid signed `proposal_session` cookie exists, or
  - valid HTTP Basic Auth credentials are sent.
- Unauthorized `GET` and `HEAD` requests redirect to `/login?next=...`.

## Environment variables

Use `.env.local` for local development (do not commit it):

- `PROPOSAL_USER` (required to enable protection)
- `PROPOSAL_PASS` (required to enable protection)
- `PROPOSAL_SESSION_SECRET` (optional, recommended, 16+ chars)

See `.env.example` for placeholders.

## SEO / indexing hints

- `app/robots.js` disallows all crawlers.
- `app/layout.js` sets `noindex, nofollow` metadata.
- `proxy.js` sends `X-Robots-Tag`.

These signals discourage indexing, but they are not a replacement for authentication.

## API routes

- `POST /api/login` validates credentials and sets session cookie.
- `GET /api/logout` clears cookie and redirects to `/login`.

## Local run

```bash
npm install
npm run dev
```

For production-style verification:

```bash
npm run build
npm run start
```

## Vercel deployment

1. Add env vars in Project Settings -> Environment Variables:
   - `PROPOSAL_USER`
   - `PROPOSAL_PASS`
   - optional `PROPOSAL_SESSION_SECRET`
2. Redeploy after env changes.

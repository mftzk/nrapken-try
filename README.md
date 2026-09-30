# nrapken-try — "Try Us" scan landing + Quick feature page

Two-route Next.js 16 app used as a public marketing surface for **nrapkén.dev**
(office/event screen and printable poster).

| Route | Job |
|---|---|
| `/` | "Try Us" scan page — big QR in the middle that opens `/quick` |
| `/quick` | Education page: what *Quick App Deployments* is and how to try it |

## Why it works anywhere it is hosted

`/` is a dynamic server component that derives the public URL from the request
host (`x-forwarded-host` / `x-forwarded-proto`) and renders the QR with `qrcode`
as inline SVG. Change the domain (or set `TRY_PUBLIC_URL`) and the QR follows —
no rebuild, no hardcoded domain.

Scheme rule: local/private hosts use `http`, every public host is forced to
`https` — the Quick ingress terminates TLS before the pod, so
`x-forwarded-proto` reports `http` even for https visitors.

## Run

```bash
npm ci
npm run build
npx next start -p 3210     # http://127.0.0.1:3210
```

Open **`/`** and scan the QR with a phone; it must land on `/quick`.

## Print / poster mode

`Ctrl/Cmd + P` on `/` produces a paper-safe layout: white background, dark ink,
orange QR brackets, header/footer hidden, QR card kept on one page.

## Deploy (nrapken Quick App)

- repo: `mftzk/nrapken-try` (branch `main`)
- node 20, `npm ci`, `npm run build`, output `.next`,
  artifact mode `runnable_bundle`, profile `nextjs`

Do **not** add `output: 'standalone'` to `next.config.mjs` — the platform patches
it in at build time.

## Env

| Var | Effect |
|---|---|
| `TRY_PUBLIC_URL` | Optional. Forces the base URL baked into the QR (e.g. `https://try-nrapken.quick.nrapken.dev`). When unset the request host is used. |

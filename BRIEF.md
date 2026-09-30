# BRIEF — nrapken "Try Us" scan landing + Quick feature education page

You are implementing the UI for a small **Next.js 16 (App Router, JavaScript, no TypeScript)**
marketing app called `nrapken-try`. Everything else (package.json, deps, next.config.mjs,
postcss.config.mjs, `app/globals.css`, `app/layout.js`, `app/icon.svg`, `BRIEF.md`) already exists
and is FROZEN. Do not modify any existing file except the ones listed in "Files you must create".

The app is deployed as a nrapken.dev Quick App (public marketing surface at an office/event).
Two routes only:

| Route   | Job |
|---------|-----|
| `/`     | "Try Us" scan page. One screen built to look good on a TV/monitor and when printed as a poster. A **big QR code in the middle** that opens `/quick`. |
| `/quick`| Education page: what the **Quick App Deployments** feature of nrapken.dev is, and how to try it. |

## Hard rules

1. **Dependencies are frozen.** Only `next`, `react`, `react-dom`, `qrcode`, `tailwindcss`,
   `@tailwindcss/postcss` are installed. Do not add, install, or import anything else. No icon
   libraries, no UI kits, no `next/font/google`, no `next/image` (there are no raster assets).
2. **Do NOT start a dev server, watcher, or `sleep`.** Do not run `npm run dev`. Allowed commands:
   `npm run build`, `npx next lint` (may not exist — skip if so), `git status`.
3. **Styling = Tailwind v4 utility classes only** (Tailwind v4 is already wired via
   `@tailwindcss/postcss`). Small, semantic additions to `globals.css` are NOT allowed — the
   file is frozen. If you need a one-off style, use inline `style={{}}`.
4. Brand tokens already exist in `app/globals.css` as Tailwind v4 `@theme` colors — use them:
   `brand` (#ff4b07), `brand-strong`, `brand-tint`, `ink`, `ink-soft`, `night`, `night-2`,
   `night-3`, `haze`, `fog`, plus `font-mono`. Examples: `bg-night-2`, `border-night-3`,
   `text-haze`, `text-brand`, `bg-brand`, `text-fog`. The page background is already dark
   (`#080d18`) with an ambient glow rendered by `.nrp-backdrop` in the layout — do **not** add
   your own page-wide gradient. No glassmorphism, no rainbow palettes, no emoji, no
   decorative fake-SaaS illustration, no invented metrics or testimonials.
5. **The brand wordmark is always written `nrapkén.dev`** (lowercase "nrapken", é, then `.dev`).
   Render it as: `nrapkén` in white/fog + `.dev` in brand orange.
6. **Accessibility / quality bar:** semantic HTML (`<header> <main> <section> <footer> <nav>`),
   real focus-visible rings on every link/button, tappable targets ≥ 44px, and it must look right
   from **360px** phone width up to **1920px**. Use `text-balance`/`text-pretty` where it helps.
   No horizontal scroll at 360px.
7. **Every link to another page of this app uses `next/link`.** External links
   (`https://console.nrapken.dev/login`, `https://nrapken.dev`, `https://wa.me/6287777650643`)
   use plain `<a>` with `target="_blank" rel="noreferrer"`.
8. Copy is **Indonesian, casual-professional**, exactly as given below. Do not rewrite, shorten,
   or translate the given strings. Do not add sections that are not in this brief.

## Files you must create

```
lib/qr.js                  QR + public-URL helpers (server-side only, Node)
components/BrandMark.js    the nrapkén.dev wordmark
components/QrPanel.js      the big QR card (the centerpiece of `/`)
components/McpSnippet.js   static code block for the MCP section of `/quick`
app/page.js                the "Try Us" scan page
app/quick/page.js          the education page
app/opengraph-image.js     build-time 1200x630 OG image via ImageResponse from "next/og"
```

### `lib/qr.js`

```js
import QRCode from "qrcode";

// Base public URL of this deployment. Used to build the QR payload.
export function getPublicBaseUrl(headerStore) {
  const explicit = process.env.TRY_PUBLIC_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const host = headerStore.get("x-forwarded-host") || headerStore.get("host") || "localhost:3000";
  const proto =
    headerStore.get("x-forwarded-proto") ||
    (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
  return `${proto}://${host}`;
}

// Returns an inline <svg> string. Must be dark-on-white and high contrast.
export async function qrCodeSvg(text) {
  return QRCode.toString(text, {
    type: "svg",
    errorCorrectionLevel: "H",   // H so the small center badge is safe
    margin: 1,
    width: 1024,
    color: { dark: "#080d18ff", light: "#ffffffff" },
  });
}
```

Import the package as `qrcode` (Node entry). If `npm run build` complains about Node built-ins
in this module, switch the import to `qrcode/lib/browser` — same API. Report which one you used.

### `components/QrPanel.js` (server component, no hooks)

Props: `{ url, svg }` where `svg` is the raw svg string from `qrCodeSvg(url + "/quick")`.
Render:

- an outer wrapper with the four `.nrp-bracket` corner elements
  (`nrp-bracket nrp-bracket--tl|tr|bl|br`) — these classes are already in `globals.css`
- a white card: `bg-white rounded-[28px] p-3 sm:p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]` +
  class `nrp-qr-card`, containing two nested divs so the card + brackets survive `@media print`
- inside: a `<div className="nrp-qr relative">` whose inner HTML is the svg string
  (use `dangerouslySetInnerHTML={{ __html: svg }}`) — the QR must fill the card:
  `w-[min(78vw,26rem)]` on the wrapper, and `aria-label="QR code menuju halaman penjelasan Quick"`
  with `role="img"` on the wrapping div
- a small centered badge over the QR: absolutely positioned, `w-[13%] h-[13%]` (square),
  `bg-white rounded-xl grid place-items-center`, containing a brand-orange rounded square
  (`bg-brand rounded-md w-[62%] h-[62%]` with a white "N" glyph via a tiny inline `<svg>` path —
  reuse the path from `app/icon.svg`). Keep it small: it must not ruin scannability.
- below the card (outside it): a mono line with the absolute URL
  `text-xs sm:text-sm font-mono text-haze break-all` and the caption
  `Scan pakai kamera HP — halaman penjelasan langsung terbuka.` in `text-sm text-haze`.

### `components/BrandMark.js`

Props: `{ href = "/", className = "" }`. `<Link>` rendering `nrapkén` (font-semibold, fog/white)
+ `.dev` (`text-brand`). Optionally a 8x8 rounded brand square before the text. Focus ring required.

### `components/McpSnippet.js`

No props. A `pre`/`code` block, dark panel (`bg-black/60 border border-night-3 rounded-2xl p-4`),
`font-mono text-xs sm:text-sm`, horizontally scrollable (`overflow-x-auto`), with these lines,
verbatim:

```
# 1. buat PAT di console, sambungkan ke MCP client kamu
# 2. minta agent-nya deploy:

quick_apps_create({
  organization: "first-1741110886",
  name:          "my-next-app",
  repo_url:      "https://github.com/<kamu>/my-next-app",
  branch:        "main",
  node_version:  "20",
  install_command: "npm ci",
  build_command:   "npm run build",
  output_dir:      ".next",
  artifact_mode:   "runnable_bundle",
  artifact_profile: "nextjs",
  auto_deploy:     true,
})
```

Color the comment lines (`#…`) in `text-haze` and the rest in `text-fog`; highlight the
`quick_apps_create` token in `text-brand`. Do it by splitting lines, not by a syntax library.

### `app/page.js` — "Try Us" scan page

Server component. Must be dynamic so the QR always matches the real host:

```js
import { headers } from "next/headers";
export const dynamic = "force-dynamic";
// const base = getPublicBaseUrl(await headers());
// const svg  = await qrCodeSvg(`${base}/quick`);
```

Layout, top to bottom (single screen on desktop, scrolls gracefully on phone):

1. `<header>` — left: `BrandMark`; right: `<Link href="/quick">Apa itu Quick?</Link>` styled as a
   small pill (`border border-night-3 rounded-full px-4 py-2 text-sm`) plus
   `<a href="https://console.nrapken.dev/login">Konsol</a>` (`hidden sm:block`, text-haze).
2. Hero `<section>` — centered column, generous vertical rhythm, this exact copy:
   - eyebrow pill: a 2px brand dot + `Quick App Deployments` (uppercase, `tracking-[0.18em]`,
     `text-xs`, text-haze)
   - `<h1>`: **`Try Us`** — the largest thing on the page:
     `text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight`
   - lead paragraph, `max-w-xl text-base sm:text-lg text-haze text-pretty`:
     `Scan QR di layar ini, kenali fitur Quick, lalu deploy aplikasi pertamamu — gratis, tanpa kartu kredit.`
   - `QrPanel url={base} svg={svg}`
3. `<section>` — "3 langkah" strip: three items in a responsive grid
   (`grid gap-6 sm:grid-cols-3`), each with a mono number `01/02/03` in `text-brand` and:
   - `Scan` — `Buka kamera HP dan arahkan ke QR di atas. Nggak perlu install apa pun.`
   - `Pahami` — `Halaman penjelasan menampilkan apa itu Quick App Deployments dan cara kerjanya.`
   - `Deploy` — `Ikuti 5 langkah, sambungkan repo GitHub, dan aplikasimu live di subdomain quick.nrapken.dev.`
   Separate the items with thin `border-night-3` rules, not with cards inside cards.
4. `<footer>` (`nrp-no-print`, small, `border-t border-night-3`) — left:
   `nrapkén.dev — AI-Friendly Indonesian PaaS`; right: links to `https://nrapken.dev`,
   `/quick` (`Cara coba`), and `https://wa.me/6287777650643` (`Klaim coupon trial`).
5. Add one small print-only hint element with class `nrp-no-print` inverted? NO — instead put the
   page's own "cetak poster ini" affordance in the footer as a plain hint line:
   `Klik Ctrl/Cmd + P untuk menjadikan halaman ini poster.` in `text-xs text-haze`. Mark the
   header/footer blocks that should not print with `nrp-no-print`, and give the hero + QR card
   container the `nrp-print-plain` class where a white print background is needed.

### `app/quick/page.js` — education page

Static server component (`export const metadata = { title: "Apa itu Quick?" }`).
Sections in order, with the exact copy below.

1. `<header>` — `BrandMark`; nav: `<Link href="/">← Halaman scan</Link>`, `Apa itu Quick?`
   (current, muted, `aria-current="page"`), and an external
   `<a href="https://console.nrapken.dev/login">Daftar gratis</a>` as a brand-filled pill.
2. Hero — eyebrow `Fitur 01 / 09 · Platform Capabilities`; `<h1>` **`Quick App Deployments`**;
   lead: `Build, package, dan jalankan aplikasi JavaScript langsung dari repo GitHub — dengan deployment yang paham framework, aktivasi release ber-versi, dan log operasional live.`
3. "Apa itu Quick?" — 2 short paragraphs + a 6-item benefit list (`ul`, brand dot or mono
   `→` bullets, `grid sm:grid-cols-2 gap-x-8 gap-y-3`):
   - `Repository-based builds untuk Next.js dan aplikasi JS modern`
   - `Dua mode artefak: build output atau runnable bundle`
   - `Release ber-versi dengan aktivasi live, tanpa downtime`
   - `Runtime log, restart, stop, dan status deployment`
   - `Database attachment — kredensial siap pakai untuk aplikasi`
   - `URL stabil per aplikasi, plus custom domain`
   Paragraphs (write exactly):
   - `Quick App Deployments adalah cara nrapkén membawa repo GitHub kamu jadi aplikasi hidup tanpa kamu menyentuh server. Platform yang menjalankan install, build, dan packaging-nya, lalu menyajikan hasilnya sebagai release yang bisa diaktifkan atau di-rollback.`
   - `Kamu tetap pegang kontrol operasionalnya: build log live, runtime log, restart dan stop, status deployment, sampai URL aplikasi — semuanya dari satu dashboard.`
4. "Alur kerjanya" — 5 stages as a horizontal strip on desktop / vertical on mobile, each with a
   mono index and a label:
   `Repo · git push` → `Build · npm ci + next build (Node 20)` → `Artifact · runnable bundle (.next)` →
   `Release · aktivasi` → `Live · https://<app>.quick.nrapken.dev`.
   Note line: `Build pertama biasanya ~3–4 menit. Setelah itu setiap release tinggal diaktifkan.`
5. "Cara coba" — ordered list, 5 steps, each with a bold title and body:
   1. `Buat akun` — `Buka console.nrapken.dev dan daftar gratis. Tanpa kartu kredit.`
   2. `Sambungkan repo` — `Hubungkan GitHub kamu, lalu pilih repository — Next.js, Vite, atau Node biasa.`
   3. `Buat Quick App` — `Isi nama app, branch, install command (npm ci), build command (npm run build), dan Node version 20.`
   4. `Tunggu build` — `Build jalan otomatis dengan log yang bisa kamu pantau langsung.`
   5. `Deploy & aktifkan release` — `Aktifkan release-nya, aplikasi live di https://<slug>.quick.nrapken.dev. Attach database kalau butuh.`
6. "Tanpa dashboard pun bisa" — heading + lead
   `Sambungkan MCP client (Claude Desktop atau apa pun yang mendukung MCP) dengan personal access token kamu, lalu minta agent-nya yang deploy.` + `<McpSnippet />`
   + two bullets: `49 tool MCP di 5 keluarga produk` dan `PAT scoped, akses dibatasi per organisasi`.
7. CTA band — `<h2>Siap coba?</h2>`, paragraph
   `Gratis, tanpa kartu kredit. Mau coupon trial sampai 1 tahun? Chat kami.`
   Buttons: primary `<a>` to `https://console.nrapken.dev/login` labelled `Mulai sekarang`;
   secondary `<a>` to `https://wa.me/6287777650643` labelled `Klaim coupon trial`;
   plus a text link `<Link href="/">Kembali ke halaman scan →</Link>`.
8. `<footer>` — same footer content/links as the scan page.

### `app/opengraph-image.js`

```js
import { ImageResponse } from "next/og";
export const alt = "Try Us — nrapkén.dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { /* dark #080d18 canvas, orange #FF4B07 accent bar,
  "nrapkén.dev" small, "Try Us" huge white, subtitle
  "Scan. Coba. Deploy — Quick App Deployments." in #94a3b8 */ }
```

Use only flexbox + inline styles (Satori limits). No external fonts, no images, no `<img>`.
Keep it to plain text + rectangles.

## Definition of done (you must run this yourself)

```bash
cd /home/ubuntu/nrapken-try
npm run build      # must exit 0 with no build errors.
```

Then confirm the build output contains both routes (`/` and `/quick`) and report:
- the two imports used for the QR module (`qrcode` or `qrcode/lib/browser`),
- the build's route list,
- a one-line note of anything in this brief you could not implement.

Do NOT commit, do NOT push, do NOT deploy, do NOT start a server. The operator will verify
the rendering and the QR itself.

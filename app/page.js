// NRF-42 build-cache benchmark: comment-only source change (2026-09-30)
import Link from "next/link";
import { headers } from "next/headers";
import BrandMark from "../components/BrandMark";
import QrPanel from "../components/QrPanel";
import { getPublicBaseUrl, qrCodeSvg } from "../lib/qr";

export const dynamic = "force-dynamic";

const STEPS = [
  {
    n: "01",
    title: "Scan",
    body: "Buka kamera HP dan arahkan ke QR di atas. Nggak perlu install apa pun.",
  },
  {
    n: "02",
    title: "Pahami",
    body: "Halaman penjelasan menampilkan apa itu Quick App Deployments dan cara kerjanya.",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Ikuti 5 langkah, sambungkan repo GitHub, dan aplikasimu live di subdomain quick.nrapken.dev.",
  },
];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-night";
const navLink = `font-mono text-[11px] uppercase tracking-[0.16em] text-haze transition-colors hover:text-brand ${focus}`;

export default async function Home() {
  const base = getPublicBaseUrl(await headers());
  const svg = await qrCodeSvg(`${base}/quick`);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 sm:px-8">
      <header className="nrp-no-print flex items-center justify-between gap-4 border-b border-line py-4">
        <BrandMark />
        <nav className="flex items-center gap-6">
          <Link href="/quick" className={navLink}>
            Apa itu Quick?
          </Link>
          <a
            href="https://console.nrapken.dev/login"
            target="_blank"
            rel="noreferrer"
            className={`${navLink} hidden sm:block`}
          >
            Konsol
          </a>
        </nav>
      </header>

      <main className="flex flex-1 flex-col justify-center py-12 sm:py-16">
        <section className="flex flex-col items-center">
          <p className="flex w-full items-center gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-haze">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            Quick App Deployments
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </p>

          <h1 className="mt-7 text-6xl font-bold tracking-[-0.035em] sm:text-7xl lg:text-8xl">
            Try Us
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-center text-base text-haze sm:text-lg">
            Scan QR di layar ini, kenali fitur Quick, lalu deploy aplikasi pertamamu — gratis, tanpa
            kartu kredit.
          </p>

          <div className="mt-11">
            <QrPanel url={base} svg={svg} />
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-2 sm:mt-16">
          <div className="grid sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <div
                key={step.n}
                className={`border-line py-6 ${
                  index > 0 ? "border-t sm:border-l sm:border-t-0" : ""
                } ${index > 0 ? "sm:pl-7" : ""} ${index < STEPS.length - 1 ? "sm:pr-7" : ""}`}
              >
                <p className="font-mono text-[11px] tracking-[0.2em] text-brand">{step.n}</p>
                <h2 className="mt-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-fog">
                  {step.title}
                </h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-haze">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="nrp-no-print mt-12 border-t border-line py-6">
        <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-haze sm:flex-row sm:items-center sm:justify-between">
          <p>nrapkén.dev — AI-Friendly Indonesian PaaS</p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://nrapken.dev"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:text-brand ${focus}`}
            >
              nrapken.dev
            </a>
            <Link href="/quick" className={`transition-colors hover:text-brand ${focus}`}>
              Cara coba
            </Link>
            <a
              href="https://wa.me/6287777650643"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:text-brand ${focus}`}
            >
              Klaim coupon trial
            </a>
          </nav>
        </div>
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-haze/60">
          Ctrl / Cmd + P — jadikan halaman ini poster.
        </p>
      </footer>
    </div>
  );
}

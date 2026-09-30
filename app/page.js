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

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-night";

export default async function Home() {
  const base = getPublicBaseUrl(await headers());
  const svg = await qrCodeSvg(`${base}/quick`);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-8">
      <header className="nrp-no-print flex items-center justify-between gap-4 py-5">
        <BrandMark />
        <nav className="flex items-center gap-3">
          <Link
            href="/quick"
            className={`inline-flex min-h-11 items-center rounded-full border border-night-3 px-4 py-2 text-sm text-fog transition-colors hover:border-brand hover:text-brand ${linkFocus}`}
          >
            Apa itu Quick?
          </Link>
          <a
            href="https://console.nrapken.dev/login"
            target="_blank"
            rel="noreferrer"
            className={`hidden min-h-11 items-center px-1 text-sm text-haze transition-colors hover:text-fog sm:inline-flex ${linkFocus}`}
          >
            Konsol
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="nrp-print-plain flex flex-1 flex-col items-center justify-center gap-8 py-10 text-center sm:py-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-night-3 px-4 py-2 text-xs uppercase tracking-[0.18em] text-haze">
            <span className="h-[2px] w-[2px] rounded-full bg-brand" aria-hidden="true" />
            Quick App Deployments
          </p>

          <h1 className="text-balance text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Try Us
          </h1>

          <p className="max-w-xl text-pretty text-base text-haze sm:text-lg">
            Scan QR di layar ini, kenali fitur Quick, lalu deploy aplikasi pertamamu — gratis, tanpa
            kartu kredit.
          </p>

          <QrPanel url={base} svg={svg} />
        </section>

        <section className="border-t border-night-3 py-12 sm:py-16">
          <div className="grid sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <div
                key={step.n}
                className={`py-6 sm:py-0 ${
                  index > 0 ? "border-t border-night-3 sm:border-l sm:border-t-0" : ""
                } ${index === 0 ? "sm:pr-8" : index === STEPS.length - 1 ? "sm:pl-8" : "sm:px-8"}`}
              >
                <p className="font-mono text-sm text-brand">{step.n}</p>
                <h2 className="mt-2 text-lg font-semibold text-fog">{step.title}</h2>
                <p className="mt-2 text-pretty text-sm text-haze">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="nrp-no-print border-t border-night-3 py-8">
        <div className="flex flex-col gap-4 text-sm text-haze sm:flex-row sm:items-center sm:justify-between">
          <p>nrapkén.dev — AI-Friendly Indonesian PaaS</p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://nrapken.dev"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex min-h-11 items-center transition-colors hover:text-fog ${linkFocus}`}
            >
              nrapken.dev
            </a>
            <Link
              href="/quick"
              className={`inline-flex min-h-11 items-center transition-colors hover:text-fog ${linkFocus}`}
            >
              Cara coba
            </Link>
            <a
              href="https://wa.me/6287777650643"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex min-h-11 items-center transition-colors hover:text-fog ${linkFocus}`}
            >
              Klaim coupon trial
            </a>
          </nav>
        </div>
        <p className="mt-4 text-xs text-haze">
          Klik Ctrl/Cmd + P untuk menjadikan halaman ini poster.
        </p>
      </footer>
    </div>
  );
}

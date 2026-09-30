import Link from "next/link";
import BrandMark from "../../components/BrandMark";
import McpSnippet from "../../components/McpSnippet";

export const metadata = { title: "Apa itu Quick?" };

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-night";

const BENEFITS = [
  "Repository-based builds untuk Next.js dan aplikasi JS modern",
  "Dua mode artefak: build output atau runnable bundle",
  "Release ber-versi dengan aktivasi live, tanpa downtime",
  "Runtime log, restart, stop, dan status deployment",
  "Database attachment — kredensial siap pakai untuk aplikasi",
  "URL stabil per aplikasi, plus custom domain",
];

const STAGES = [
  { n: "01", label: "Repo · git push" },
  { n: "02", label: "Build · npm ci + next build (Node 20)" },
  { n: "03", label: "Artifact · runnable bundle (.next)" },
  { n: "04", label: "Release · aktivasi" },
  { n: "05", label: "Live · https://<app>.quick.nrapken.dev" },
];

const TRY_STEPS = [
  {
    title: "Buat akun",
    body: "Buka console.nrapken.dev dan daftar gratis. Tanpa kartu kredit.",
  },
  {
    title: "Sambungkan repo",
    body: "Hubungkan GitHub kamu, lalu pilih repository — Next.js, Vite, atau Node biasa.",
  },
  {
    title: "Buat Quick App",
    body: "Isi nama app, branch, install command (npm ci), build command (npm run build), dan Node version 20.",
  },
  {
    title: "Tunggu build",
    body: "Build jalan otomatis dengan log yang bisa kamu pantau langsung.",
  },
  {
    title: "Deploy & aktifkan release",
    body: "Aktifkan release-nya, aplikasi live di https://<slug>.quick.nrapken.dev. Attach database kalau butuh.",
  },
];

const MCP_BULLETS = [
  "49 tool MCP di 5 keluarga produk",
  "PAT scoped, akses dibatasi per organisasi",
];

export default function QuickPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 sm:px-8">
      <header className="flex flex-wrap items-center justify-between gap-4 py-5">
        <BrandMark />
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className={`inline-flex min-h-11 items-center text-sm text-haze transition-colors hover:text-fog ${linkFocus}`}
          >
            ← Halaman scan
          </Link>
          <span
            aria-current="page"
            className="hidden min-h-11 items-center text-sm text-haze sm:inline-flex"
          >
            Apa itu Quick?
          </span>
          <a
            href="https://console.nrapken.dev/login"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex min-h-11 items-center rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-strong ${linkFocus}`}
          >
            Daftar gratis
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="border-t border-night-3 py-12 sm:py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-haze">
            Fitur 01 / 09 · Platform Capabilities
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Quick App Deployments
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-haze sm:text-lg">
            Build, package, dan jalankan aplikasi JavaScript langsung dari repo GitHub — dengan
            deployment yang paham framework, aktivasi release ber-versi, dan log operasional live.
          </p>
        </section>

        <section className="border-t border-night-3 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Apa itu Quick?</h2>
          <div className="mt-5 max-w-2xl space-y-4 text-pretty text-base text-haze">
            <p>
              Quick App Deployments adalah cara nrapkén membawa repo GitHub kamu jadi aplikasi hidup
              tanpa kamu menyentuh server. Platform yang menjalankan install, build, dan
              packaging-nya, lalu menyajikan hasilnya sebagai release yang bisa diaktifkan atau
              di-rollback.
            </p>
            <p>
              Kamu tetap pegang kontrol operasionalnya: build log live, runtime log, restart dan
              stop, status deployment, sampai URL aplikasi — semuanya dari satu dashboard.
            </p>
          </div>

          <ul className="mt-8 grid gap-x-8 gap-y-3 text-sm text-fog sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span aria-hidden="true" className="font-mono text-brand">
                  →
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-night-3 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Alur kerjanya</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-5 sm:gap-4">
            {STAGES.map((stage) => (
              <div key={stage.n} className="border-l border-night-3 pl-4">
                <p className="font-mono text-xs text-brand">{stage.n}</p>
                <p className="mt-2 text-pretty text-sm text-fog">{stage.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-haze">
            Build pertama biasanya ~3–4 menit. Setelah itu setiap release tinggal diaktifkan.
          </p>
        </section>

        <section className="border-t border-night-3 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Cara coba</h2>
          <ol className="mt-6 space-y-6">
            {TRY_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-mono text-sm text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-fog">{step.title}</h3>
                  <p className="mt-1 text-pretty text-sm text-haze">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-night-3 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tanpa dashboard pun bisa
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base text-haze">
            Sambungkan MCP client (Claude Desktop atau apa pun yang mendukung MCP) dengan personal
            access token kamu, lalu minta agent-nya yang deploy.
          </p>
          <div className="mt-6">
            <McpSnippet />
          </div>
          <ul className="mt-6 space-y-2 text-sm text-fog">
            {MCP_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span aria-hidden="true" className="font-mono text-brand">
                  →
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-night-3 py-12 sm:py-16">
          <div className="rounded-2xl border border-night-3 bg-night-2 p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Siap coba?</h2>
            <p className="mt-3 max-w-xl text-pretty text-base text-haze">
              Gratis, tanpa kartu kredit. Mau coupon trial sampai 1 tahun? Chat kami.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://console.nrapken.dev/login"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex min-h-11 items-center rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-strong ${linkFocus}`}
              >
                Mulai sekarang
              </a>
              <a
                href="https://wa.me/6287777650643"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex min-h-11 items-center rounded-full border border-night-3 px-5 py-2 text-sm font-medium text-fog transition-colors hover:border-brand hover:text-brand ${linkFocus}`}
              >
                Klaim coupon trial
              </a>
              <Link
                href="/"
                className={`inline-flex min-h-11 items-center text-sm text-haze transition-colors hover:text-fog ${linkFocus}`}
              >
                Kembali ke halaman scan →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-night-3 py-8">
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
      </footer>
    </div>
  );
}

import Link from "next/link";
import BrandMark from "../../components/BrandMark";
import McpSnippet from "../../components/McpSnippet";

export const metadata = { title: "Apa itu Quick?" };

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
  { n: "05", label: "Live · <app>.quick.nrapken.dev" },
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
    body: "Aktifkan release-nya, aplikasi live di <slug>.quick.nrapken.dev. Attach database kalau butuh.",
  },
];

const MCP_BULLETS = ["49 tool MCP di 5 keluarga produk", "PAT scoped, akses dibatasi per organisasi"];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-night";
const navLink = `font-mono text-[11px] uppercase tracking-[0.16em] text-haze transition-colors hover:text-brand ${focus}`;
const label = "font-mono text-[11px] tracking-[0.2em] text-brand";
const btnPrimary = `inline-flex min-h-11 items-center bg-brand px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-strong ${focus}`;
const btnGhost = `inline-flex min-h-11 items-center border border-line px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:border-brand hover:text-brand ${focus}`;

function SectionTitle({ index, children }) {
  return (
    <div className="flex items-center gap-4 border-t border-line pt-4">
      <span className={label}>{index}</span>
      <h2 className="text-lg font-semibold tracking-[-0.01em] text-fog sm:text-xl">{children}</h2>
    </div>
  );
}

export default function QuickPage() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-4xl flex-col px-5 sm:px-8">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-4">
        <BrandMark />
        <nav className="flex items-center gap-6">
          <Link href="/" className={navLink}>
            ← Halaman scan
          </Link>
          <span aria-current="page" className={`${navLink} hidden hover:text-haze sm:block`}>
            Apa itu Quick?
          </span>
          <a
            href="https://console.nrapken.dev/login"
            target="_blank"
            rel="noreferrer"
            className={btnPrimary}
          >
            Daftar gratis
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-haze">
            Fitur 01 / 09 · Platform Capabilities
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Quick App Deployments
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-haze sm:text-lg">
            Build, package, dan jalankan aplikasi JavaScript langsung dari repo GitHub — dengan
            deployment yang paham framework, aktivasi release ber-versi, dan log operasional live.
          </p>
        </section>

        <section className="py-10 sm:py-12">
          <SectionTitle index="01">Apa itu Quick?</SectionTitle>
          <div className="mt-6 max-w-2xl space-y-4 text-pretty text-base leading-relaxed text-haze">
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

          <ul className="mt-9 grid gap-x-10 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="border-t border-line py-3.5 text-sm text-fog">
                <span aria-hidden="true" className="mr-3 font-mono text-brand">
                  —
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10 sm:py-12">
          <SectionTitle index="02">Alur kerjanya</SectionTitle>
          <div className="mt-7 grid border-t border-line sm:grid-cols-5">
            {STAGES.map((stage, index) => (
              <div
                key={stage.n}
                className={`border-line py-4 ${
                  index > 0 ? "border-t sm:border-l sm:border-t-0 sm:pl-4" : "sm:pr-4"
                }`}
              >
                <p className={label}>{stage.n}</p>
                <p className="mt-2 text-pretty text-sm leading-snug text-fog">{stage.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-haze">
            Build pertama biasanya ~3–4 menit. Setelah itu setiap release tinggal diaktifkan.
          </p>
        </section>

        <section className="py-10 sm:py-12">
          <SectionTitle index="03">Cara coba</SectionTitle>
          <ol className="mt-7 border-t border-line">
            {TRY_STEPS.map((step, index) => (
              <li
                key={step.title}
                className={`flex gap-5 py-5 ${index > 0 ? "border-t border-line" : ""}`}
              >
                <span className={`${label} pt-1`}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-fog">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-haze">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-10 sm:py-12">
          <SectionTitle index="04">Tanpa dashboard pun bisa</SectionTitle>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-haze">
            Sambungkan MCP client (Claude Desktop atau apa pun yang mendukung MCP) dengan personal
            access token kamu, lalu minta agent-nya yang deploy.
          </p>
          <div className="mt-7">
            <McpSnippet />
          </div>
          <ul className="mt-7">
            {MCP_BULLETS.map((bullet) => (
              <li key={bullet} className="border-t border-line py-3.5 text-sm text-fog">
                <span aria-hidden="true" className="mr-3 font-mono text-brand">
                  —
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10 sm:py-12">
          <SectionTitle index="05">Siap coba?</SectionTitle>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-haze">
            Gratis, tanpa kartu kredit. Mau coupon trial sampai 1 tahun? Chat kami.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="https://console.nrapken.dev/login"
              target="_blank"
              rel="noreferrer"
              className={btnPrimary}
            >
              Mulai sekarang
            </a>
            <a
              href="https://wa.me/6287777650643"
              target="_blank"
              rel="noreferrer"
              className={btnGhost}
            >
              Klaim coupon trial
            </a>
          </div>
          <Link href="/" className={`${navLink} mt-6 inline-block`}>
            ← Kembali ke halaman scan
          </Link>
        </section>
      </main>

      <footer className="mt-10 border-t border-line py-6">
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
      </footer>
    </div>
  );
}

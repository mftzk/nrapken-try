export default function QrPanel({ url, svg }) {
  const target = `${url}/quick`;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-fit">
        <span className="nrp-bracket nrp-bracket--tl" aria-hidden="true" />
        <span className="nrp-bracket nrp-bracket--tr" aria-hidden="true" />
        <span className="nrp-bracket nrp-bracket--bl" aria-hidden="true" />
        <span className="nrp-bracket nrp-bracket--br" aria-hidden="true" />

        <div className="nrp-print-plain rounded-[28px] bg-white p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] sm:p-4 nrp-qr-card">
          <div
            role="img"
            aria-label="QR code menuju halaman penjelasan Quick"
            className="nrp-qr relative w-[min(78vw,22rem)] sm:w-[min(60vw,26rem)] lg:w-[28rem]"
          >
            <div dangerouslySetInnerHTML={{ __html: svg }} />
            <div className="absolute left-1/2 top-1/2 grid aspect-square w-[13%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-white">
              <div className="grid aspect-square w-[62%] place-items-center rounded-md bg-brand">
                <svg
                  viewBox="0 0 64 64"
                  className="h-[62%] w-[62%]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M17 47V17h8.2l13.2 18.6V17H46v30h-8.2L24.6 28.4V47z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="break-all text-center text-xs font-mono text-haze sm:text-sm">
        {target}
      </p>
      <p className="text-center text-sm text-haze">
        Scan pakai kamera HP — halaman penjelasan langsung terbuka.
      </p>
    </div>
  );
}

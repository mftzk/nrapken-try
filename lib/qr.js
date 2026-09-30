import QRCode from "qrcode";

// Local/private hosts are reached over plain http in dev; anything public is
// https. The Quick ingress terminates TLS before the pod, so it reports
// `x-forwarded-proto: http` even for https visitors — never trust that header
// to pick a scheme for a public host, or the poster QR would ship an http URL.
function isLocalHost(host) {
  return /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\]|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(
    host,
  );
}

// Base public URL of this deployment. Used to build the QR payload.
export function getPublicBaseUrl(headerStore) {
  const explicit = process.env.TRY_PUBLIC_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const host = headerStore.get("x-forwarded-host") || headerStore.get("host") || "localhost:3000";
  const proto = isLocalHost(host) ? headerStore.get("x-forwarded-proto") || "http" : "https";
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

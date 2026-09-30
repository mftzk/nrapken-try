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

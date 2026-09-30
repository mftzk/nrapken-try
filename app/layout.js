import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://try-nrapken.quick.nrapken.dev"),
  title: {
    default: "Try Us — nrapkén.dev",
    template: "%s — nrapkén.dev",
  },
  description:
    "Scan, coba, deploy. Nrapkén.dev Quick App Deployments: dari repo GitHub ke aplikasi live dalam ~60 detik.",
  keywords: [
    "nrapken",
    "nrapken.dev",
    "Quick App Deployments",
    "PaaS Indonesia",
    "deploy Next.js",
    "MCP",
  ],
  openGraph: {
    type: "website",
    siteName: "nrapkén.dev",
    title: "Try Us — nrapkén.dev",
    description:
      "Scan QR, kenali Quick App Deployments, dan deploy aplikasi pertamamu gratis.",
  },
  twitter: { card: "summary_large_image" },
};

const viewport = {
  themeColor: "#0a0d14",
  width: "device-width",
  initialScale: 1,
};

export { viewport };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}

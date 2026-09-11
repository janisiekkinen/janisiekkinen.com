import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Analytics } from "../components/Analytics";
import { site } from "../config/site";
import "../styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#121614",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "fi";
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preload" href="/fonts/barlow-condensed-latin-700-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/schibsted-grotesk-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-dvh bg-slate text-ink antialiased">
        {children}
        <Analytics locale={locale} />
      </body>
    </html>
  );
}

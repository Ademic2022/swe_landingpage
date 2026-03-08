import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";

const syne = Syne({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Software Engineer — Scalable Solutions | Ademic",
  description:
    "Software Engineer building scalable mobile apps, web applications, and DevOps infrastructure. Available for projects.",
  openGraph: {
    type: "website",
    title: "Ademic — Software Engineer",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <Cursor />
        {/* Noise texture overlay — inline SVG, zero network requests */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            position: "fixed",
            inset: 0,
            opacity: 0.4,
            pointerEvents: "none",
            zIndex: 1000,
          }}
        />
        {children}
      </body>
    </html>
  );
}

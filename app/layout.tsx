import type { Metadata, Viewport } from "next";

// Self-hosted fonts: Fraunces for headings, Manrope for body.
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";

import "./globals.css";
import { seo, site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export const viewport: Viewport = { themeColor: "#fafafa" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

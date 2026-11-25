import type { Metadata, Viewport } from "next";

// Self-hosted font: Inter for headings and body.
import "@fontsource-variable/inter";

import "./globals.css";
import { ReferralCapture } from "@/components/site/referral-capture";
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
      <body>
        <ReferralCapture />
        {children}
      </body>
    </html>
  );
}

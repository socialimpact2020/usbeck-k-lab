import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { suitFont } from "@/config/font";

import { SWRProvider } from "./swr-provider";
import { SessionProvider } from "next-auth/react";
import { Providers } from "@/components/Providers";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.klabuzb.com"),
  title: {
    default: "K LAB Uzbekistan",
    template: "%s | K LAB Uzbekistan",
  },
  description:
    "Bu Koreya Respublikasining Rasmiy Taraqqiyot Yordami (ODA) doirasida amalga oshirilayotgan bepul AKT (Axborot-kommunikatsiya texnologiyalari) ta’lim loyihasidir.",
  keywords: [
    "K LAB Uzbekistan",
    "K-LAB",
    "ODA",
    "AKT ta'lim",
    "ICT education",
    "Korea ODA",
    "Uzbekistan ICT",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.klabuzb.com",
    siteName: "K LAB Uzbekistan",
    title: "K LAB Uzbekistan",
    description:
      "Bu Koreya Respublikasining Rasmiy Taraqqiyot Yordami (ODA) doirasida amalga oshirilayotgan bepul AKT (Axborot-kommunikatsiya texnologiyalari) ta’lim loyihasidir.",
    locale: "uz_UZ",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/next/logo.png",
        width: 1200,
        height: 630,
        alt: "K LAB Uzbekistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    title: "K LAB Uzbekistan",
    description:
      "Bu Koreya Respublikasining Rasmiy Taraqqiyot Yordami (ODA) doirasida amalga oshirilayotgan bepul AKT (Axborot-kommunikatsiya texnologiyalari) ta’lim loyihasidir.",
    images: [
      "https://d2p8484c990lgc.cloudfront.net/KLAB/next/logo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="uz" className="scroll-smooth">
        <body className={suitFont.className}>
          <Script
            id="ld-json-org"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "K LAB Uzbekistan",
              alternateName: "Uzbekistan K_LAB",
              url: "https://www.klabuzb.com",
              logo:
                "https://d2p8484c990lgc.cloudfront.net/KLAB/next/logo.png",
            })}
          </Script>
          <Script
            id="ld-json-website"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "K LAB Uzbekistan",
              url: "https://www.klabuzb.com",
              inLanguage: "uz-UZ",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.klabuzb.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })}
          </Script>
          <div className="w-full h-full m-auto">
            <main>{children}</main>
          </div>
        </body>
      </html>
    </Providers>
  );
}

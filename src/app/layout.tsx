import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { suitFont } from "@/config/font";

import { SWRProvider } from "./swr-provider";
import { SessionProvider } from "next-auth/react";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.klabuzb.com"),
  title: "Uzbekistan K_LAB ",
  description: "Uzbekistan K_LAB ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className="scroll-smooth">
        <body className={suitFont.className}>
          <div className="w-full h-full m-auto">
            <main>{children}</main>
          </div>
        </body>
      </html>
    </Providers>
  );
}

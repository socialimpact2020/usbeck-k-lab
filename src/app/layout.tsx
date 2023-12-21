import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { suitFont } from "@/config/font";
import Header from "@/components/UI/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uzbekistan K_LAB MAKER SPACE",
  description: "Uzbekistan K_LAB MAKER SPACE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={suitFont.className}>
        <div className="w-full h-full m-auto mt-8">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

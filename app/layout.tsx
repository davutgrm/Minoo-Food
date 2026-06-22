import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MINOO FOOD – Fast Food & Pizza | Toulouse",
  description:
    "MINOO FOOD, Toulouse'da taze malzemeler ve ev yapımı patates kızartmasıyla hizmetinizdedir. İçeride servis, paket ve adrese teslimat. Her gün 11:30–23:00.",
  openGraph: {
    title: "MINOO FOOD – Fast Food & Pizza | Toulouse",
    description: "Taze, lezzetli, hızlı. Her gün 11:30–23:00.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-stone-900`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERA | Alışkanlık ve Farkındalık Koçu",
  description: "Stres anındaki dürtüleri yönet, alışkanlıklarını dönüştür.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

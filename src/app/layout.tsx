import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERA — Stres Anındaki Dürtüleri Yönet, Alışkanlıklarını Dönüştür",
  description: "VERA, yapay zeka destekli kişisel gelişim asistanın. Uygulama indirmeye gerek yok, sadece WhatsApp üzerinden bir mesajla başla.",
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

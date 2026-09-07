import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERO — Sürdürülebilir Değişim, Kişiselleştirilmiş Yaklaşım",
  description: "Bilimsel temelli, 1'e 1 dijital koçluk ile kalıcı sonuçlar. Uygulama indirmeye gerek yok, sadece bir mesajla başlayın.",
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

import { inter } from '@/app/ui/fonts';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Tableau de bord Acme',
    default: 'Tableau de bord Acme'
  },
  description: "Exercice app Next.js Dashboard avec App Router",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

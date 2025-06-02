import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eliane Turismo",
  description: "Viagens saindo de Araguari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}

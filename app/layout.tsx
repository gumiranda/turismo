import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredDataScript } from "./structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Eliane Turismo - Passagens de Ônibus Araguari | Brás, Mega Moda Goiânia",
  description:
    "Viagens de ônibus executivo com Wi-Fi e ar condicionado saindo de Araguari para São Paulo (Brás), Goiânia (Mega Moda) e Monte Sião. Excursões para compras no atacado, moda e malhas. Conforto, segurança e os melhores preços em passagens. Reserve agora!",
  keywords:
    "passagens de ônibus Araguari, viagens para Brás São Paulo, excursão Mega Moda Goiânia, Monte Sião malhas, compras atacado Brás, excursão feira da madrugada, turismo de compras, ônibus executivo wifi, viagens seguras, passagens promocionais, excursão para compras, Eliane Turismo",
  authors: [{ name: "Eliane Turismo" }],
  creator: "Eliane Turismo",
  publisher: "Eliane Turismo",
  robots: "index, follow",
  openGraph: {
    title:
      "Eliane Turismo - Passagens de Ônibus Araguari | Brás, Mega Moda Goiânia",
    description:
      "Viagens de ônibus executivo com Wi-Fi saindo de Araguari para São Paulo (Brás), Goiânia (Mega Moda). Excursões especializadas para compras no atacado, moda e malhas. Conforto e segurança garantidos!",
    url: "https://elianeturismo.com.br",
    siteName: "Eliane Turismo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Eliane Turismo - Passagens de Ônibus para Compras | Brás, Mega Moda Goiânia",
    description:
      "Viagens executivas de Araguari para os principais centros de compras: Brás (SP), Mega Moda (Goiânia). Wi-Fi e ar condicionado.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredDataScript />
        {children}
      </body>
    </html>
  );
}

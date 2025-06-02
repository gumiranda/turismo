import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredDataScript } from "./structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Eliane Turismo - Viagens de Ônibus Araguari | São Paulo, Goiânia, Monte Sião",
  description:
    "Viagens de ônibus confortáveis saindo de Araguari para São Paulo (Brás), Goiânia, Monte Sião. Excursões de compras, turismo e lazer com a melhor empresa de turismo de Araguari. Reserve já!",
  keywords:
    "viagens ônibus Araguari, turismo Araguari, excursões São Paulo Brás, viagens Goiânia, Monte Sião turismo, compras São Paulo, ônibus Uberaba Uberlândia, Eliane Turismo, viagens confortáveis",
  authors: [{ name: "Eliane Turismo" }],
  creator: "Eliane Turismo",
  publisher: "Eliane Turismo",
  robots: "index, follow",
  openGraph: {
    title:
      "Eliane Turismo - Viagens de Ônibus Araguari | São Paulo, Goiânia, Monte Sião",
    description:
      "Viagens de ônibus confortáveis saindo de Araguari para São Paulo (Brás), Goiânia, Monte Sião. Excursões de compras, turismo e lazer.",
    url: "https://elianeturismo.com.br",
    siteName: "Eliane Turismo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eliane Turismo - Viagens de Ônibus Araguari",
    description:
      "Viagens de ônibus confortáveis saindo de Araguari para São Paulo, Goiânia, Monte Sião.",
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

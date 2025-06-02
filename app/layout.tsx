import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredDataScript } from "./structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Eliane Turismo - Excursões para Brás | Saídas de Araguari, Uberaba, Uberlândia e Ribeirão Preto",
  description:
    "Viagens de ônibus executivo com Wi-Fi e ar condicionado saindo de Araguari, Uberaba, Uberlândia e Ribeirão Preto para São Paulo (Brás), Goiânia (Mega Moda) e Monte Sião. Excursões guiadas para compras no atacado, moda e malhas. Conforto, segurança e os melhores preços em passagens. Reserve agora!",
  keywords:
    "passagens de ônibus Araguari, viagens Uberaba São Paulo, excursão Uberlândia Brás, viagem Ribeirão Preto Brás, excursão Mega Moda Goiânia, Monte Sião malhas, compras atacado Brás, excursão feira da madrugada, turismo de compras, ônibus executivo wifi, viagens seguras, passagens promocionais, excursão para compras, Eliane Turismo, bate e volta Brás, excursão guiada compras, sacoleiras Brás, lojistas atacado, compras atacadão roupas, feira madrugada Brás, moda feminina atacado, distribuidora roupas atacado, excursão lojistas Brás, excursão sacoleiras São Paulo",
  authors: [{ name: "Eliane Turismo" }],
  creator: "Eliane Turismo",
  publisher: "Eliane Turismo",
  robots: "index, follow",
  openGraph: {
    title:
      "Eliane Turismo - Excursões para Brás | Saídas de Araguari, Uberaba, Uberlândia e Ribeirão Preto",
    description:
      "Excursões guiadas para compras no Brás, Mega Moda e Monte Sião. Saídas de Araguari, Uberaba, Uberlândia e Ribeirão Preto em ônibus executivo com Wi-Fi. Especialistas em viagens para lojistas e sacoleiras.",
    url: "https://elianeturismo.com.br",
    siteName: "Eliane Turismo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Excursões para Brás e Mega Moda | Saídas do Triângulo Mineiro e Ribeirão Preto",
    description:
      "Viagens guiadas para compras no atacado. Saídas de Araguari, Uberaba, Uberlândia e Ribeirão Preto em ônibus executivo com Wi-Fi e ar condicionado.",
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Guia Definitivo de Compras no Brás 2025 - Feira da Madrugada e Atacadistas | Eliane Turismo",
  description:
    "Guia completo de compras no Brás: Feira da Madrugada, melhores ruas e galerias, horários, dicas de negociação e segurança. Viagem de ônibus executivo Araguari-SP todo domingo, Wi-Fi e ar condicionado. Especialistas em excursões para lojistas e sacoleiras.",
  keywords:
    "feira da madrugada 2025, compras atacado Brás, rua Maria Marcolina, Feirinha da Madrugada horário, galerias do Brás, moda feminina atacado, jeans no Brás, roupas atacado São Paulo, passagem Araguari Brás, excursão compras São Paulo, guia compras Brás atualizado, melhores lojas Brás",
  authors: [{ name: "Eliane Turismo" }],
  openGraph: {
    title:
      "Guia Definitivo de Compras no Brás 2025 - Feira da Madrugada e Atacadistas",
    description:
      "Guia atualizado com os melhores lugares para compras no Brás: Feira da Madrugada, ruas especializadas e galerias. Viagens semanais de Araguari com ônibus executivo, Wi-Fi e ar condicionado. Ideal para lojistas e sacoleiras.",
    url: "https://elianeturismo.com.br/blog/compras-bras-sao-paulo",
    type: "article",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Guia Definitivo de Compras no Brás 2025 - Atacado e Feira da Madrugada",
    description:
      "Descubra os melhores pontos de compra no Brás: Feira da Madrugada, ruas especializadas e galerias. Viagens semanais de Araguari em ônibus executivo.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

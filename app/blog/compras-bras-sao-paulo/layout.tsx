import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Guia Completo: Compras no Brás São Paulo - Viagens Eliane Turismo Araguari",
  description:
    "Descubra como fazer as melhores compras no Brás, São Paulo, com a Eliane Turismo. Viagens de ônibus saindo de Araguari todo domingo às 15:30. Dicas exclusivas, melhores lojas e preços imperdíveis no maior centro comercial do Brasil.",
  keywords:
    "compras Brás São Paulo, viagem ônibus Araguari São Paulo, Eliane Turismo, centro comercial Brás, atacado São Paulo, compras atacado, viagem compras domingo, Feirinha da Madrugada, moda atacado",
  authors: [{ name: "Eliane Turismo" }],
  openGraph: {
    title: "Guia Completo: Compras no Brás São Paulo - Eliane Turismo",
    description:
      "Viagens de ônibus de Araguari para São Paulo todo domingo. Descubra as melhores dicas para compras no Brás com preços até 70% menores.",
    url: "https://elianeturismo.com.br/blog/compras-bras-sao-paulo",
    type: "article",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia Completo: Compras no Brás São Paulo",
    description:
      "Viagens de ônibus de Araguari para São Paulo. Dicas exclusivas para compras no Brás.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

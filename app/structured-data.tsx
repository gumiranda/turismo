import { whatsappNumber } from "./page";

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Eliane Turismo",
  description:
    "Empresa de turismo especializada em viagens de ônibus saindo de Araguari para São Paulo, Goiânia e Monte Sião",
  url: "https://elianeturismo.com.br",
  telephone: whatsappNumber,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Araguari",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-18.6475",
    longitude: "-48.1864",
  },
  sameAs: [`https://wa.me/+${whatsappNumber}`],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "-18.6475",
      longitude: "-48.1864",
    },
    geoRadius: "500000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Viagens de Ônibus",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Viagem de Ônibus Araguari - São Paulo (Brás)",
          description:
            "Viagem de ônibus confortável saindo de Araguari todo domingo às 15:30 com destino ao Brás em São Paulo",
          provider: {
            "@type": "TravelAgency",
            name: "Eliane Turismo",
          },
          departureLocation: {
            "@type": "Place",
            name: "Araguari, MG",
          },
          arrivalLocation: {
            "@type": "Place",
            name: "São Paulo - Brás, SP",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Viagem de Ônibus Araguari - Goiânia",
          description:
            "Viagem de ônibus confortável saindo de Araguari toda sexta-feira às 23:30 com destino a Goiânia",
          provider: {
            "@type": "TravelAgency",
            name: "Eliane Turismo",
          },
          departureLocation: {
            "@type": "Place",
            name: "Araguari, MG",
          },
          arrivalLocation: {
            "@type": "Place",
            name: "Goiânia, GO",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Viagem de Ônibus Araguari - Monte Sião",
          description: "Viagem de ônibus para as águas termais de Monte Sião",
          provider: {
            "@type": "TravelAgency",
            name: "Eliane Turismo",
          },
          departureLocation: {
            "@type": "Place",
            name: "Araguari, MG",
          },
          arrivalLocation: {
            "@type": "Place",
            name: "Monte Sião, MG",
          },
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

export const StructuredDataScript = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Eliane Turismo",
          description:
            "Agência de viagens especializada em viagens de ônibus com saídas regulares de Araguari para São Paulo (Brás), Goiânia (Mega Moda). Oferecemos conforto, segurança e os melhores preços em passagens de ônibus.",
          url: "https://www.elianeturismo.com.br",
          telephone: "+55-34-99236-9984",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Elias Peixoto, 552",
            addressLocality: "Araguari",
            addressRegion: "MG",
            postalCode: "38440-256",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -18.6456,
            longitude: -48.1934,
          },
          sameAs: [
            "https://www.facebook.com/elianeturismo",
            "https://www.instagram.com/elianeturismo",
          ],
          areaServed: [
            {
              "@type": "City",
              name: "São Paulo",
              description:
                "Viagens para o Brás, principal destino de compras em São Paulo",
            },
            {
              "@type": "City",
              name: "Goiânia",
              description:
                "Viagens para o Mega Moda Shopping, centro de moda em Goiânia",
            },
            {
              "@type": "City",
              name: "Monte Sião",
              description:
                "Viagens para o maior polo de tricô e malhas de Minas Gerais",
            },
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "TravelAction",
                name: "Passagens de Ônibus Araguari - São Paulo (Brás)",
                description:
                  "Viagens regulares de ônibus executivo com Wi-Fi, ar condicionado e poltronas reclináveis de Araguari para o Brás em São Paulo. Ideal para lojistas e compradores.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "TravelAction",
                name: "Passagens de Ônibus Araguari - Goiânia (Mega Moda)",
                description:
                  "Viagens regulares de ônibus executivo com Wi-Fi, ar condicionado e poltronas reclináveis de Araguari para o Mega Moda em Goiânia. Perfeito para compras no atacado.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "TravelAction",
                name: "Passagens de Ônibus Araguari - Monte Sião",
                description:
                  "Viagens regulares de ônibus executivo com Wi-Fi, ar condicionado e poltronas reclináveis de Araguari para Monte Sião. Excelente para compras de malhas e tricô.",
              },
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "512",
          },
          keywords:
            "passagens de ônibus Araguari, viagens para São Paulo Brás, viagens para Goiânia Mega Moda, viagens para Monte Sião, compras no Brás, excursão para Goiânia, turismo de compras, ônibus executivo, viagens seguras, passagens promocionais",
        }),
      }}
    />
  );
};

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

export function StructuredDataScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

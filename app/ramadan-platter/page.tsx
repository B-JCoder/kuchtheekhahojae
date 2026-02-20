import { Metadata } from "next";
import RamadanPlatterClient from "./RamadanPlatterClient";

export const metadata: Metadata = {
  title: "Ramadan Golgappe Platter | Best Iftar Deal Karachi - Rs. 1,999",
  description:
    "Get the ultimate 50-piece Ramadan Golgappe Platter in Karachi. Hygienic, fresh, and chatpata. Best for Iftar gatherings. Order now for home delivery!",
  keywords: [
    "Ramadan Golgappe Platter",
    "best golgappa in Karachi",
    "Iftar deals Karachi",
    "hygienic pani puri delivery",
    "pani puri home delivery Karachi",
    "Ramadan food package",
    "Kuch Teekha Ho Jaye Ramadan Special",
    "golgappa party kit Karachi",
    "best chat in Karachi",
  ],
  openGraph: {
    title: "Ramadan Golgappe Platter | Kuch Teekha Ho Jaye",
    description:
      "Experience the real chatkhara this Ramadan with our premium 50-piece Golgappe Platter. Limited time deal!",
    images: ["/ramadanplater/plater.jpeg"],
  },
};

export default function RamadanPlatterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Ramadan Golgappe Platter",
            image: [
              "https://kuchteekhahojaye.com/ramadanplater/plater.jpeg",
              "https://kuchteekhahojaye.com/ramadanplater/golgappeandplater.jpeg",
            ],
            description:
              "Premium 50-piece Golgappe Platter with masala potatoes, chanas, and signature tangy pani. Made with mineral water.",
            brand: {
              "@type": "Brand",
              name: "Kuch Teekha Ho Jaye",
            },
            offers: {
              "@type": "Offer",
              url: "https://kuchteekhahojaye.com/ramadan-platter",
              priceCurrency: "PKR",
              price: "1999",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "240",
            },
          }),
        }}
      />
      <RamadanPlatterClient />
    </>
  );
}

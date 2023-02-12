import Service from "@/components/Service";
import offers from "@/pages/api/offers";

export default function Services() {
  const myOffers = offers.map((offer) => {
    return <Service key={offer.id} {...offer} />;
  });

  return <>{myOffers}</>;
}

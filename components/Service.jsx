import { motion } from "framer-motion";
import { Timeline } from "flowbite-react";
import offers from "@/pages/api/offers";
import Headings from "./Headings";

export default function Service(props) {
  const ourOffers = offers.map((offer) => {
    return (
      <div key={offer.id} className="flex flex-col gap-2">
        <h2 className="text-xl">{offer.title}</h2>
        <p className="text-sm">{offer.desc}</p>
        <span className="text-xs text-teal-600">{offer.price}</span>
      </div>
    );
  });

  return (
    <section id="service" className="">
      <div className="text-gray-900 w-screen flex flex-col items-center px-4 bg-pink-300 lg:px-98">
        <Headings title="Our Services" />
        {ourOffers}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import offers from "@/pages/api/offers";
import Headings from "./Headings";
import Image from "next/image";

export default function Service(props) {
  const ourOffers = offers.map((offer) => {
    return (
      <div key={offer.id} className="flex flex-col gap-2">
        <Image alt="nails" src={offer.img} className="w-[50%]" />
        <h2 className="text-xl">{offer.title}</h2>
        <p className="text-sm">{offer.desc}</p>
        <span className="text-xs text-teal-600">{offer.price}</span>
      </div>
    );
  });

  return (
    <section id="service" className="container px-4 py-10 mx-auto">
      <Headings title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {ourOffers}
      </div>
    </section>
  );
}

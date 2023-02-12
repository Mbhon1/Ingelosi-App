import Layout from "@/layouts/layout";
import { motion } from "framer-motion";
import { Timeline } from "flowbite-react";

export default function Service(props) {
  return (
    <Layout>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full px-12 pt-20 text-gray-900 bg-pink-300 lg:px-98"
      >
        <h2 className="text-xl">{props.title}</h2>
        <p className="text-sm">{props.desc}</p>
        <span className="text-xs text-teal-600">{props.price}</span>

        <div className="py-4 ">
          <h2 className="pb-4 text-4xl">Location</h2>
          <p>1234 Maddison Str</p>
          <p>Protea Glen, Soweto</p>
        </div>

        <motion.div vaariants={container1} className="py-4 overflow-hidden">
          <h2 className="pb-4 overflow-hidden text-4xl">Hours</h2>
          <ul>
            <div className="overflow-hidden">
              <li vaariants={item1}>Open 7 days a week</li>
            </div>
            <div className="overflow-hidden">
              <li vaariants={item1}>Monday - Sunday</li>
            </div>
            <div className="overflow-hidden">
              <li vaariants={item1}>9am - 8pm</li>
            </div>
            <div className="overflow-hidden">
              <li vaariants={item1}>Sunday</li>
            </div>
            <div className="overflow-hidden">
              <li vaariants={item1}>11am - 6pm</li>
            </div>
          </ul>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

const container1 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item1 = {
  hidden: { y: "-100%" },
  show: { y: "0%", transition: { duration: 1 } },
};

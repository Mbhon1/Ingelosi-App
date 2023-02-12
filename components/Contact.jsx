import { motion } from "framer-motion";
import Layout from "@/layouts/layout";
import Form from "./Form";

const letsTalk = "Let's Talk";
export default function Contact() {
  return (
    <Layout>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="pt-20 text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-12"
      >
        <motion.div className="text-center py-8">{letsTalk}</motion.div>
        <Form />
      </motion.div>
    </Layout>
  );
}

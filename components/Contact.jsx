import { motion } from "framer-motion";
import Form from "./Form";

const letsTalk = "Let's Talk";
export default function Contact() {
  return (
    <>
      <motion.div
        id="contact"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="text-gray-900 bg-red-400 lg:px-48 px-12"
      >
        <motion.div className="text-center py-8">{letsTalk}</motion.div>
        <Form />
      </motion.div>
    </>
  );
}

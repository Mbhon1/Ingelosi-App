import { motion } from "framer-motion";
import emailjs from "node_modules/emailjs-com";
import Swal from "sweetalert2";

export default function Form() {
  // ! These API keys are meant to be public while using the EmailJs services and it's endpoints.
  const SERVICE_ID = "service_iquonrh";
  const TEMPLATE_ID = "template_1ipf8jz";
  const USER_ID = "emWpaSnr3C9Ar-DR_";

  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({ title: "Message Sent!", icon: "success" });
      },
      (error) => {
        Swal.fire({ title: "Ooops, something went wrong!", icon: "error" });
      }
    );
    // * clears the form after sending the email
    e.target.reset();
  }

  return (
    <>
      <motion.form
        initial="hidden"
        animate="show"
        variants={container}
        onSubmit={handleOnSubmit}
        className="flex flex-col items-center gap-5 overflow-hidden"
      >
        <div className="overflow-hidden">
          <motion.input
            variants={item}
            required
            name="from_name"
            label="Full Name"
            placeholder="Full Name"
            className="px-2 py-1"
          />
        </div>
        <div className="overflow-hidden">
          <motion.input
            variants={item}
            variant="outlined"
            required
            name="from_email"
            label="Email"
            placeholder="Email"
            className="px-2 py-1"
          />
        </div>
        <div className="overflow-hidden">
          <motion.textarea
            variants={item}
            name="message"
            color="blue"
            label="Message"
            required
            placeholder="Message"
            className="px-2 py-1"
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          variants={submitBtn}
          className="px-6 py-3 mt-6 uppercase rounded-lg bg-rose-300"
          type="submit"
        >
          Send
        </motion.button>
      </motion.form>
    </>
  );
}

// ? animating the form elelmensts
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: "-100%" },
  show: { x: "0%", transition: { duration: 0.5 } },
};

const submitBtn = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.5 } },
};
import { motion } from "framer-motion";
import Headings from "./Headings";

const letsTalk = "Let's Talk";

export default function Contact() {
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
      <section id="contact" className="container px-4 mx-auto pb-10">
        <Headings title="Contact Us" />

        <form onSubmit={handleOnSubmit} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              name="from_name"
              placeholder="Name"
              className="inputStyle"
              required
            />
            <input
              name="from_email"
              placeholder="Email"
              className="inputStyle"
              required
            />
          </div>
          <input
            name="from_subject"
            placeholder="Subject"
            className="inputStyle"
            required
          />
          <textarea
            name="message"
            className="inputStyle"
            placeholder="Message"
            rows="6"
            required
          />
          <div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import MyNavbar from "@/components/MyNavbar";
import MyFooter from "@/components/MyFooter";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="px-10 py-4 lg:px-48">
      <AnimatePresence initial={false}>
        <MyNavbar />
        <Component key={router.pathname} {...pageProps} />
        <MyFooter />
      </AnimatePresence>
    </div>
  );
}

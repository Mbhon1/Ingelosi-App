import Head from "next/head";
import Layout, { siteTitle } from "@/layouts/layout";
// import Hero from "@/components/Hero";
import { Lobster_Two } from "@next/font/google";
import { motion } from "framer-motion";
import MyCarousel from "@/components/MyCarousel";

const lobsterTwo = Lobster_Two({
  weight: ["700", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <Hero /> */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full px-12 pt-20 text-gray-900 bg-orange-300 lg:px-48"
      >
        <div className="p-1 overflow-hidden lg:my-80">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`${lobsterTwo} text-6xl text-center lg:text-left lg:text-9xl`}
          >
            Nailed By Ingelosi
          </motion.h1>
        </div>
        <div>
          <MyCarousel />
        </div>
      </motion.div>
    </Layout>
  );
}

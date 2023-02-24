import Head from "next/head";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import MyNavbar from "@/components/MyNavbar";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const name = "Nailed By Ingelosi is a salon that offers menicure and pedicure.";
const siteTitle = "Ingelosi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Head>
        <meta name="description" content={name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
      </Head>

      <MyNavbar toggleSidebar={toggleSidebar} />

      <main>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Hero
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita blanditiis est explicabo voluptate inventore quaerat harum laudantium doloribus itaque!"
          title="Nailed By Ingelosi"
        />
        <Service />
        <Contact />
      </main>
    </>
  );
}

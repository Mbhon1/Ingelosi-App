import Head from "next/head";
import Hero from "@/components/Hero";
import MyNavbar from "@/components/MyNavbar";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import About from "@/components/About";
import MyFooter from "@/components/MyFooter";

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

      <main className="dark:bg-slate-800 dark:text-white">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Hero
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita blanditiis est explicabo voluptate inventore quaerat harum laudantium doloribus itaque!"
          title="Nailed By Ingelosi"
        />
        <About
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi
              vitae doloremque quas ex fugiat earum obcaecati quod laudantium
              aliquam dicta, sapiente in cum. Culpa vitae quam obcaecati
              nesciunt incidunt."
          street="1234 Maddison Str"
          city="Protea Glen, Soweto"
        />
        <Service />
        <Contact />
        <MyFooter date="2023" rights="All rights reserved." />
      </main>
    </>
  );
}

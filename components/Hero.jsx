import { motion } from "framer-motion";
import React from "react";
import { Lobster_Two } from "@next/font/google";
import TypeWriter from "typewriter-effect";

const lobsterTwo = Lobster_Two({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Hero = (props) => {
  return (
    <>
      <div
        id="hero"
        className="bg-[url(/hero.jpg)] flex items-center h-screen bg-fixed bg-center bg-cover "
      >
        <div className="container flex items-center h-screen bg-fixed bg-center bg-cover  px-4 mx-auto">
          <div className="max-w-[450ox] text-black flex flex-col gap-[40px]">
            <div>
              <h1 className={`text-7xl ${lobsterTwo.className}`}>
                {props.title}
              </h1>
              <h4 className="mt-3 text-2xl text-white">
                <TypeWriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome!")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("We're a nail salon")
                      .pauseFor(2000)
                      .deleteChars(12)
                      .typeString("the people's salon")
                      .pauseFor(2500)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                    changeDelay: 3,
                    changeDeletedSpeed: 2,
                  }}
                />
              </h4>
            </div>
            <div className="bg-[#ff4d41] h-[2px] w-[40px]"></div>
            <div>
              <p className="text-white">{props.description}</p>
              {/* <Button link="https://github.com/Mbhon1" text="Learn More" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="absolute top-0 left-0 w-screen h-screen px-12 pt-20 text-gray-900 bg-orange-300 lg:px-48"
      >
        <div className="p-5 overflow-hidden lg:my-80">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`${lobsterTwo.className} text-6xl text-center lg:text-left lg:text-9xl`}
          >
            Nailed By Ingelosi
          </motion.h1>
        </div>
        <div></div>
      </motion.div> */}
    </>
  );
};

export default Hero;

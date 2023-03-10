import React from "react";
import { Lobster_Two } from "@next/font/google";

const lobsterTwo = Lobster_Two({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Headings = (props) => {
  return (
    <div
      className={`text-black text-[40px] font-bold flex items-center gap-4 py-10 dark:text-white ${lobsterTwo.className}`}
    >
      {props.title}
      {/* <div className="bg-emerald-700 h-[2px] w-[40px] translate-y-1"></div> */}
    </div>
  );
};

export default Headings;

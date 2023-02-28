import { Lobster } from "@next/font/google";
import { Link } from "react-scroll";

const lobster = Lobster({
  weight: ["400", "400"],
  subsets: ["latin"],
});

export default function MyNavbar(props) {
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10 dark:bg-slate-800 dark:text-white">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className={`text-[24px] ${lobster.className}`}>Ingelosi</div>
        <div className="hidden gap-6 md:flex">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="cursor-pointer hover:text-emerald-700"
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="about"
            className="cursor-pointer hover:text-emerald-700"
          >
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="service"
            className="cursor-pointer hover:text-emerald-700"
          >
            Services
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="contact"
            className="cursor-pointer hover:text-emerald-700"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={props.toggleSidebar}
            className="inline-block bg-indigo-400 rounded-[15px] shadow-md hover:bg-indigo-500 active:bg-indigo-500 active:shadow-lg active:translate-y-[4px]  px-4 py-1 font-semibold  uppercase"
          >
            {props.isOpen ? "Close" : "Open"}
          </button>
        </div>
      </div>
    </div>
  );
}

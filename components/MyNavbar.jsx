import { Inter, Lobster } from "@next/font/google";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";

const lobster = Lobster({
  weight: ["400", "400"],
  subsets: ["cyrillic"],
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
        <div onClick={props.toggleSidebar} className="md:hidden text-[24px]">
          <FiMenu />
        </div>
      </div>
    </div>
  );
}

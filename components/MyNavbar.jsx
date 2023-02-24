import { Inter } from "@next/font/google";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";

const inter = Inter({
  weight: ["700", "700"],
  subsets: ["latin"],
});

export default function MyNavbar(props) {
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="text-[24px]">Ingelosi</div>
        <div className="hidden gap-6 md:flex">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:text-emerald-700 cursor-pointer"
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="service"
            className="hover:text-emerald-700 cursor-pointer"
          >
            Services
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-0}
            duration={500}
            to="contact"
            className="hover:text-emerald-700 cursor-pointer"
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

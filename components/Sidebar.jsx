import React from "react";
import { Link } from "react-scroll";
import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import { IoHome } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { BsPatchExclamationFill } from "react-icons/bs";

const inter = Inter({
  weight: ["700", "700"],
  subsets: ["latin"],
});

const links = [
  { name: "Home", to: "hero", id: 1, icon: <IoHome className="mr-3" /> },
  {
    name: "About",
    to: "about",
    id: 2,
    icon: <BsPatchExclamationFill className="mr-3" />,
  },
  {
    name: "Services",
    to: "service",
    id: 3,
    icon: <BsHandbagFill className="mr-3" />,
  },
  {
    name: "Contact",
    to: "contact",
    id: 4,
    icon: <FaEnvelope className="mr-3" />,
  },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const Sidebar = (props) => {
  return (
    <div>
      {props.isOpen && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          className={`w-screen h-screen ${props.isOpen ? "fixed" : "hidden"} ${
            inter.className
          } dark:bg-gray-800 z-20 text-black dark:text-white grid place-items-center`}
        >
          <motion.div
            initial="closed"
            animate="open"
            variants={sideVariants}
            className="my-[4.5rem] mx-[1.4rem]"
          >
            {links.map(({ name, to, id, icon }, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  smooth={true}
                  spy={true}
                  duration={500}
                  key={id}
                  to={to}
                  className="dark:text-white hover:text-teal-600 cursor-pointer text-2xl font-extrabold flex m-[20px]  justify-center items-center"
                >
                  {icon}
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.aside>
      )}
    </div>
  );
};

export default Sidebar;

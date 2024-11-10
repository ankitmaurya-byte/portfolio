"use client";

import { useEffect, useState } from "react";
import MobileNavbar from "./MobileSidebar";
import NavbarOptions from "./NavbarOptions";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`w-full max-w-[1340px] h-20 flex justify-between fixed z-40 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      } px-6 md:px-8`}
    >
      <div className="flex justify-start items-center text-secondary z-50 w-full h-full font-[700] text-2xl">
        AM
      </div>
      <div className="hidden lg:block">
        <ul className="w-full h-full flex justify-center items-center gap-6 text-gray-200 font-[400] text-lg">
          <NavbarOptions />
        </ul>
      </div>
      <MobileNavbar />
    </motion.nav>
  );
};

export default Navbar;

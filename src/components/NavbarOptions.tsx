"use client";
import { FC, useState, useEffect } from "react";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  CommandLineIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface NavbarProps {
  handleActiveMenu?: () => void;
}

const Navbar: FC<NavbarProps> = ({ handleActiveMenu }) => {
  const [hash, setHash] = useState<string>("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeNav = (active: string) => {
    if (handleActiveMenu) {
      handleActiveMenu();
    }
    setHash(active);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mt-14 mx-auto px-4">
        <ul className="flex flex-col lg:flex-row justify-end  items-start lg:items-center gap-4 lg:gap-8 py-4">
          <li>
            <div className="group">
              <a
                href="#home"
                onClick={() => activeNav("#home")}
                className="flex"
              >
                <HomeIcon className="text-secondary w-6 h-6 mr-2" />
                Home
              </a>
              <div
                className={`lg:active-nav ${
                  hash === "#home" ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          </li>
          <li>
            <div className="group">
              <a
                href="#experience"
                onClick={() => activeNav("#experience")}
                className="flex"
              >
                <BriefcaseIcon className="text-secondary w-6 h-6 mr-2" />
                Experience
              </a>
              <div
                className={`lg:active-nav ${
                  hash === "#experience" ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          </li>
          <li>
            <div className="group">
              <a
                href="#projects"
                onClick={() => activeNav("#projects")}
                className="flex"
              >
                <CommandLineIcon className="text-secondary w-6 h-6 mr-2" />
                Projects
              </a>
              <div
                className={`lg:active-nav ${
                  hash === "#projects" ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          </li>
          <li>
            <div className="group h-full">
              <a
                href="#skills"
                onClick={() => activeNav("#skills")}
                className="flex"
              >
                <CodeBracketIcon className="text-secondary w-6 h-6 mr-2" />
                Skills
              </a>
              <div
                className={`lg:active-nav ${
                  hash === "#skills" ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          </li>
          <li>
            <div className="group">
              <a
                href="#about"
                onClick={() => activeNav("#about")}
                className="flex"
              >
                <UserIcon className="text-secondary w-6 h-6 mr-2" />
                About
              </a>
              <div
                className={`lg:active-nav ${
                  hash === "#about" ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          </li>
          <li>
            <div className="group">
              <a
                href="#contact"
                onClick={() => activeNav("#contact")}
                className="flex lg:bg-secondary lg:rounded-md transition-all duration-200 lg:hover:scale-105 lg:px-3 lg:py-2"
              >
                <EnvelopeIcon className="text-secondary lg:text-white w-6 h-6 mr-2" />
                Contact
              </a>
              <div
                className={`lg:active-nav md:hidden ${
                  hash === "#contact" ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

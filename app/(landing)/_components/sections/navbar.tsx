"use client";
import { useState, useEffect } from "react";
import { navLinks } from "../secondary/constants";
import Image from "next/image";

const LETTER_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#FF9999",
  "#88D8B0",
  "#FFCC5C",
  "#AAD8B0",
  "#FF6F69",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#FF9999",
  "#88D8B0",
  "#FFCC5C",
  "#AAD8B0",
  "#FF6F69",
  "#4ECDC4",
  "#45B7D1",
];
const Navbar = () => {
  const title = "Tijuanita mi ciudad".split("");
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const mobileBreakIndex = 20;

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo flex items-center">
          <div className="flex-shrink-0">
            <Image
              src="/images/logos/logo.png" // Replace with your logo path
              alt="Logo"
              width={64} // Reduced size for better proportion
              height={64} // Reduced size for better proportion
              className="h-16 w-16" // Consistent sizing
            />
          </div>
          <div className="ml-3 flex items-center">
            <span className="flex flex-wrap items-center">
              {title.slice(0, mobileBreakIndex).map((letter, index) => (
                <span
                  key={index}
                  style={{ color: LETTER_COLORS[index] }}
                  className="font-kawaiiRT inline-block text-xl md:text-2xl leading-none" // Added leading-none
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </div>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group ">
                <a href={link}>
                  <span className=" font-bold">{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;

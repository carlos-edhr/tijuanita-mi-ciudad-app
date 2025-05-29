"use client";
import { useState, useEffect } from "react";
import { navLinks } from "../secondary/constants";
import Image from "next/image";

const Navbar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

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
            <p className="font-kawaiiRT text-moradoSecundario flex flex-wrap items-center font-sm tracking-wide">
              <span className="  md:tracking-widest">Tijuanita </span>{" "}
              <span className="text-aquamarine md:tracking-widest">mi </span>{" "}
              <span className=" md:tracking-widest">ciudad</span>
            </p>
          </div>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group ">
                <a href={link}>
                  <span className="text-moradoSecundario font-bold">
                    {name}
                  </span>
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

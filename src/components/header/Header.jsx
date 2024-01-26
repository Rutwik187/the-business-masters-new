"use client";

import { useEffect, useState } from "react";

import NavItems from "./NavItems";
import MobileNav from "./MobileNav.jsx";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/input";
const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos <= 100 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <header
        className={`w-full bg-white border-b  fixed top-0 transition-transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Image
            width={500}
            height={500}
            src="/img/icons/logo.png"
            alt="logo"
            className="w-80 h-8"
          />
          <div className="flex gap-4">
            <Image
              width={30}
              height={30}
              src="/img/icons/instagram.svg"
              alt="instagram"
            />
            <Image
              width={30}
              height={30}
              src="/img/icons/facebook.svg"
              alt="facebook"
            />
            <Image
              width={30}
              height={30}
              src="/img/icons/twitter.svg"
              alt="twitter"
            />
          </div>
        </div>
        <div className="w-full wrapper flex items-center justify-between bg-primary-red px-4">
          <nav className="md:flex md:flex-between hidden w-full max-w-xl h-full">
            <NavItems />
          </nav>

          <div className="w-full flex md:justify-end justify-between items-center gap-3 py-2">
            <MobileNav />
            <Input className="w-60" placeholder="Search" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

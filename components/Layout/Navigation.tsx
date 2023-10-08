"use client";

import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Logo from "../Logo";
import HamburgerNav from "../Hamburger";

const Navigation = () => {
  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "/" },
    { value: "About us", slug: "/about" },
    { value: "News", slug: "/news" },
    { value: "Bio", slug: "/bio" },
    { value: "FAQ", slug: "/faq" },
    { value: "Help", slug: "/help" },
    { value: "Terms", slug: "/terms" },
    { value: "Contact us", slug: "/contact" },
  ]);

  const pathname = usePathname();

  return (
    <nav className="z-[1013] bg-white shadow-deep absolute bottom-[90%] lg:bottom-0 w-full h-[10vh] border-t border-white-shade-4 soft-shadow">
      <div className="container flex gap-x-6 lg:gap-x-0 lg:justify-between items-center h-full">
        <ul className="navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 font-opensans font-medium">
          {menuItems.map((link) => {
            const isActive = pathname.startsWith(link.slug);
            return (
              <li className={isActive ? "active" : "normal"}>
                <Link href={link.slug}>{link.value}</Link>
              </li>
            );
          })}
        </ul>
        <HamburgerNav />
        {/* <div>
          <label className="switch">
            <input type="checkbox" />
            <div className="switch__button"></div>
            <div className="switch__background"></div>
          </label>
        </div> */}
        <div className="flex gap-x-6 items-center">
          <div className="App App--Day" id="app">
            <label htmlFor="switch" className="Switch">
              <input id="switch" type="checkbox" className="Switch__CheckBox" />
              <span className="Switch__Label Switch__Label--Day font-out">DAY</span>
              <div className="Switch__Slider">
                <div className="Switch__SliderDot"></div>
              </div>
              <span className="Switch__Label Switch__Label--Night font-out">NIGHT</span>
            </label>
          </div>
          <Link href={"/"}>
            <Logo classes="lg:w-auto" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

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
    <nav className="z-[1013] bg-white dark:bg-[#1a202c] shadow-deep absolute bottom-[90%] lg:bottom-0 w-full h-[9vh] border-t border-white-shade-4 dark:border-[#293446] soft-shadow">
      <div className="container flex gap-x-6 lg:gap-x-0 lg:justify-between items-center h-full">
        <ul className="navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 dark:text-white font-opensans font-medium">
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
        <div className="flex gap-x-6 items-center">
          <Link href={"/"}>
            <Logo classes="lg:w-auto" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

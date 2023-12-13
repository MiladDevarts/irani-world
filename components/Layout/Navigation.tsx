"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";

import HamburgerNav from "../Hamburger";

import { usePathname } from "next/navigation";

interface NavigationProps {
  LogoType: ReactNode;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "/" },
    { value: "About us", slug: "/about" },
    { value: "Blog", slug: "/blog" },
    { value: "FAQ", slug: "/faq" },
    { value: "Origin", slug: "/origin" },
    { value: "Privecy Policy ", slug: "/privecy-policy " },
    { value: "Contact us", slug: "/contact" },
  ]);

  const currentRoute = usePathname();

  const linkStyle =
    "h-full flex items-center hover:cursor-pointer transitaion-all";
  const activeStyle =
    linkStyle +
    "text-black border-t-4 border-black dark:text-white dark:border-white";
  const nonActiveStyle = linkStyle + " border-t-none";

  return (
    <nav className="z-[1013] bg-white lg:h-[8vh] shadow-deep absolute top-0 lg:top-[92%] w-full lg:border-t border-white-shade-4 soft-shadow">
      <div className="container flex gap-x-6 lg:gap-x-0 lg:justify-between items-center h-full">
        <div className="navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 dark:text-white font-opensans font-medium">
          {menuItems.map((link) => {
            return (
              <Link
                className={
                  currentRoute === link.slug ? activeStyle : nonActiveStyle
                }
                href={link.slug}
              >
                {link.value}
              </Link>
            );
          })}
        </div>
        <HamburgerNav />
        <div className="flex gap-x-6 items-center">
          <Link href={"/"}>{props.LogoType}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

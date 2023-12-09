"use client";

import { useEffect, useContext, useState, useRef } from "react";
import Link from "next/link";

import { MenuContext } from "@/context/MenuProvider";
import classNames from "classnames";

const OverlayMenu = () => {
  let menuVisibilty = useContext(MenuContext);


  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "/" },
    { value: "About us", slug: "/about" },
    { value: "Blog", slug: "/blog" },
    { value: "Bio", slug: "https://irani.bio" },
    { value: "FAQ", slug: "/faq" },
    { value: "Help", slug: "/help" },
    { value: "Terms", slug: "/terms" },
    { value: "Contact us", slug: "/contact" },
  ]);
  

  const OverlayClasses = classNames(
    "z-[1010] block lg:hidden w-full h-auto transition-all fixed top-0 -left-[1200px] z-10 soft-shadow bg-white duration-200",
    {
      "left-0": menuVisibilty.menu,
      "-left-[1200px]": !menuVisibilty.menu,
    }
  );
  return (
    <section className={OverlayClasses}>
      <div
        className="w-full h-full bg-white dark:bg-[#131821] dark:text-white text-black bg-cover"
        style={{
          backgroundImage: `url('/images/menu/overlay-background.png')`,
        }}
      >
        <ul className="py-10 container flex flex-col  gap-y-6 font-opensans font-normal text-lg dark:text-white  text-black pt-28">
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index} className="text-black dark:text-white font-normal">
                <Link
                data-aos="fade-right"
                  href={menuItem.slug}
                  onClick={() => {
                    menuVisibilty.setMenu(!menuVisibilty.menu);
                  }}
                >
                  {menuItem.value}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OverlayMenu;

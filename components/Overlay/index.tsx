"use client";

import { useEffect, useContext, useState, useRef } from "react";
import Link from "next/link";

import { MenuContext } from "@/context/MenuProvider";
import { HamburgerContext } from "@/context/HamburgerProvider";
import classNames from "classnames";

const OverlayMenu = () => {
  let menuVisibilty = useContext(MenuContext);
  let hamVisibilty = useContext(HamburgerContext);

  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "/" },
    { value: "About", slug: "/about" },
    { value: "Blog", slug: "/blog" },
    { value: "FAQ", slug: "/faq" },
    { value: "Origin", slug: "/origin" },
    { value: "Privacy Policy", slug: "/privacy-policy" },
    { value: "Contact", slug: "/contact" },
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
        <ul className="pt-36 pb-10 container flex flex-col  gap-y-6 font-opensans font-normal text-lg dark:text-white  text-black">
          {menuItems.map((menuItem, index) => {
            return (
              <li
                key={index}
                className="text-black dark:text-white font-normal"
              >
                <Link
                  data-aos="fade-right"
                  href={menuItem.slug}
                  onClick={() => {
                    menuVisibilty.setMenu(!menuVisibilty.menu);
                    hamVisibilty.setThreeLineHam(!hamVisibilty.threeLineHam);
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

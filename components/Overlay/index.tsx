"use client";

import { useContext, useState } from "react";
import Link from "next/link";

import { MenuContext } from "@/context/MenuProvider";
import classNames from "classnames";

const OverlayMenu = () => {
  let menuVisibilty = useContext(MenuContext);

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

  const OverlayClasses = classNames(
    "z-[1010] block lg:hidden w-full h-auto transition-all fixed top-0 -left-[1200px] z-10 soft-shadow bg-white p-4 duration-500",
    {
      "left-0": menuVisibilty.menu,
      "-left-[1200px]": !menuVisibilty.menu,
    }
  );
  return (
    <section className={OverlayClasses}>
      <div
        className="w-full h-full bg-white text-black bg-cover"
        style={{
          backgroundImage: `url('/images/menu/overlay-background.png')`,
        }}
      >
        <ul className="py-6 container flex flex-col  gap-y-6 font-opensans font-semibold text-xl  text-black mt-20">
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index} className="font-semibold text-black">
                <Link
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

"use client";

import { useContext } from "react";
import Link from "next/link";

import { MenuContext } from "@/context/MenuProvider";
import classNames from "classnames";


const OverlayMenu = () => {
  let menuVisibilty = useContext(MenuContext);

  const OverlayClasses = classNames(
    "z-[1010] block lg:hidden w-full h-auto transition-all fixed top-0 z-10 sofy-shadow bg-white p-10",
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
        <ul className="pt-20 container flex flex-col items-center gap-y-6 font-opensans text-xl font-medium text-white-shade-10 mt-20">
          <li className="font-semibold text-black">
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About us</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link href={"/terms"}>Terms & Privacy</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OverlayMenu;

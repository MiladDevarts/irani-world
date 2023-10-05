"use client";

import { useContext } from "react";
import Link from "next/link";

import { MenuContext } from "@/context/MenuProvider";
import classNames from "classnames";

const OverlayMenu = () => {
  let menuVisibilty = useContext(MenuContext);

  const OverlayClasses = classNames(
    "z-[1010] block lg:hidden w-full h-auto transition-all fixed top-0 z-10 soft-shadow bg-white p-10",
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
          <li className="font-semibold text-black">
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About us</Link>
          </li>
          <li>
            <Link href={"/news"}>News</Link>
          </li>
          <li>
            <Link href={"/bio"}>Bio</Link>
          </li>
          <li>
            <Link href={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link href={"/terms"}>Terms & Privacy</Link>
          </li>
          <li>
            <Link href={"/plans"}>Plans</Link>
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

import React from "react";
import Link from "next/link";

import { Facebook, Instagram, X, Youtube } from "../Icons/Socials";

interface SocialsProps  {
  classes:string
}

const Socials:React.FC<SocialsProps> = (props) => {
  return (
    <div className={`${props.classes} items-center gap-x-3 mt-2 lg:mt-16 lg:mb-6 mb-10`}>
      <Link
        className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-14 h-14 rounded-xl border border-white-shade-4 dark:border-[#1F2836] hover:cursor-pointer"
        href={"#"}
      >
        <Youtube />
      </Link>
      <Link
        className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-14 h-14 rounded-xl border border-white-shade-4 dark:border-[#1F2836] hover:cursor-pointer"
        href={"#"}
      >
        <Instagram />
      </Link>
      <Link
        className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-14 h-14 rounded-xl border border-white-shade-4 dark:border-[#1F2836] hover:cursor-pointer"
        href={"#"}
      >
        <Facebook />
      </Link>
      <Link
        className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-14 h-14 rounded-xl border border-white-shade-4 dark:border-[#1F2836] hover:cursor-pointer"
        href={"#"}
      >
        <X />
      </Link>
    </div>
  );
};

export default Socials;


import React from 'react'
import Link from 'next/link';

import { Facebook, Instagram, X, Youtube } from "../Icons/Socials";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 mt-10 lg:mt-16 lg:mb-6">
          <Link
            className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4 hover:cursor-pointer"
            href={"#"}
          >
            <Youtube />
          </Link>
          <Link
            className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4 hover:cursor-pointer"
            href={"#"}
          >
            <Instagram />
          </Link>
          <Link
            className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4 hover:cursor-pointer"
            href={"#"}
          >
            <Facebook />
          </Link>
          <Link
            className="group hover:bg-black transition-all duration-300 flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4 hover:cursor-pointer"
            href={"#"}
          >
            <X />
          </Link>
        </div>
  )
}

export default Socials
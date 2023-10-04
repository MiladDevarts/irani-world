
import React from 'react'
import Link from 'next/link';

import { Facebook, Instagram, X, Youtube } from "../Icons/Socials";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 lg:mt-16 mb-6">
          <Link
            className="flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4"
            href={"#"}
          >
            <Youtube />
          </Link>
          <Link
            className="flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4"
            href={"#"}
          >
            <Instagram />
          </Link>
          <Link
            className="flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4"
            href={"#"}
          >
            <Facebook />
          </Link>
          <Link
            className="flex items-center justify-center w-16 h-16 rounded-xl border border-white-shade-4"
            href={"#"}
          >
            <X />
          </Link>
        </div>
  )
}

export default Socials
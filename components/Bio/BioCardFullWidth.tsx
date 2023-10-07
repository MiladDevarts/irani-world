import React from "react";

import Image from "next/image";
import Link from "next/link";

interface BioCardFullWidthProps {
  readingTime: string;
  title: string;
  summery: string;
  author: string;
  publish: string;
  avatar: string;
  cover: string;
}

const BioCardFullWidth: React.FC<BioCardFullWidthProps> = (props) => {
  return (
    <Link
      href={"/"}
      className="group flex items-center justify-between w-full h-64 p-8 gap-x-8 py-8 border-y border-white-shade-4  hover:shadow-card transition-all duration-300"
    >
      <div
        className="w-1/5 h-full flex items-center justify-center border rounded-3xl border-white-shade-4 group-hover:border-white-shade-18 transition-all duration-300">
          <Image src={"/images/bio/hakhamanesh.png"} width={100} height={100} alt=""/>
        </div>
      <div className="w-4/5 flex flex-col gap-y-4">
        <h2 className="text-blacl text-xl font-outfit font-medium text-black">
          {props.title}
        </h2>
        <p className="text-white-shade-8">{props.summery}</p>
        <span className="w-[105px] h-10 flex items-center justify-center bg-white-shade-3 group-hover:text-white transition-all duration-300 group-hover:bg-black text-black font-medium font-opensans text-sm rounded-lg">
          {props.readingTime} min read
        </span>
      </div>
    </Link>
  );
};

export default BioCardFullWidth;

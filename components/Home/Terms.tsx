import React from "react";
import Image from "next/image";
import Link from "next/link";

const Terms = () => {
  return (
    <>
      {/* 4. Terms + Flag Icons List */}
      <div className="flex flex-col items-center lg:items-start mt-10 w-full h-auto lg:text-left text-center">
        <Image
          className="w-40 lg:w-auto"
          src={"/images/home/flags.png"}
          width={100}
          height={100}
          alt="Irani World"
        />
        <svg
        className="mt-5 mb-7"
          width="284"
          height="1"
          viewBox="0 0 284 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="284" y2="0.5" stroke="#E6E6E6" />
        </svg>
        <p className="text-lg lg:text-base font-opensans text-white-shade-8">
          <Link href={"/terms"} className="font-semibold mr-1 text-white-shade-15">Terms</Link>
           and conditions outline
          <br />
          what users can and cannot do 
        </p>
      </div>
    </>
  );
};

export default Terms;

import React from "react";
import Image from "next/image";

const Terms = () => {
  return (
    <>
      {/* 4. Terms + Flag Icons List */}
      <div className="flex flex-col items-center lg:items-start mt-10 w-full h-auto lg:text-left text-center">
        <Image
          className="w-auto"
          src={"/images/home/flags.png"}
          width={100}
          height={100}
          alt="Irani World"
        />
        <svg
        className="my-4"
          width="284"
          height="1"
          viewBox="0 0 284 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="284" y2="0.5" stroke="#E6E6E6" />
        </svg>
        <p className="font-opensans text-white-shade-8">
          Terms and conditions outline
          <br />
          what users can and cannot do with your
        </p>
      </div>
    </>
  );
};

export default Terms;

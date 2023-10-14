"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Socials from "./Socials";
import Image from "next/image";

interface StatisticsProps {
  classes: string;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  return (
    <>
      <div
        className={`${props.classes} flex-col lg:flex-row gap-x-4 gap-y-4 mt-10 lg:mt-16 items-start`}
      >
        <div className="flex flex-col items-center gap-y-2">
          {/* <video autoPlay muted loop className="w-28">
            <source src="/videos/hakhamanesh.gif" />
          </video> */}
          <Image src={"/videos/hakhamanesh.gif"} className="w-32" width={40} height={40} alt="irani world" />
          <Link className="group hover:bg-black transition-all duration-300 p-2 rounded-full border border-white-shade-4" href={"https://irani.bio"}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99992 1.83334C8.12659 1.83334 8.25325 1.88001 8.35325 1.98001L12.3999 6.02667C12.5933 6.22001 12.5933 6.54001 12.3999 6.73334C12.2066 6.92668 11.8866 6.92668 11.6933 6.73334L7.99992 3.04001L4.30659 6.73334C4.11325 6.92668 3.79325 6.92668 3.59992 6.73334C3.40659 6.54001 3.40659 6.22001 3.59992 6.02668L7.64659 1.98001C7.74659 1.88001 7.87325 1.83334 7.99992 1.83334Z"
                fill="black"
                className="group-hover:fill-white"
              />
              <path
                d="M8 1.94667C8.27333 1.94667 8.5 2.17334 8.5 2.44667L8.5 13.6667C8.5 13.94 8.27333 14.1667 8 14.1667C7.72667 14.1667 7.5 13.94 7.5 13.6667L7.5 2.44667C7.5 2.17334 7.72667 1.94667 8 1.94667Z"
                fill="black"
                className="group-hover:fill-white"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-y-4 lg:order-2 lg:mt-7">
          <div className="flex flex-col justify-center lg:items-start items-center gap-y-6 order-2 lg:order-1">
            <h4 className="text-black dark:text-white font-outfit text-2xl text-center lg:text-left font-medium">
              <span className="text-3xl font-semibold">
                <span className="mr-1">6</span>
              </span>
              Platform
            </h4>
            <span className="font-opensans font-medium -mt-6 text-white-shade-8 dark:text-white">
              All around the world
            </span>
          </div>
          <div className="flex gap-x-10 order-1 lg:order-2 text-center lg:text-left">
            <div className="">
              <h4 className="text-black dark:text-white  font-outfit text-5xl lg:text-2xl font-semibold">
                7.5M
              </h4>
              <span className="font-opensans text-white-shade-8 dark:text-white">
                Iranian immigrant
              </span>
            </div>
          </div>
        </div>
        <Socials classes="flex lg:hidden" />
      </div>
    </>
  );
};

export default Statistics;

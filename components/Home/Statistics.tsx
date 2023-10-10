"use client";

import React, { useEffect } from "react";

interface StatisticsProps {
  classes: string;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  return (
    <>
      <div
        className={`${props.classes}  flex-col lg:flex-row gap-x-4 gap-y-4 mt-10 lg:mt-16 items-center`}
      >
        <video autoPlay muted loop className="w-28">
          <source src="/videos/hakhamanesh.mov" />
        </video>
        <div className="flex flex-col gap-y-6 order-1 lg:order-2">
          <div className="flex flex-col justify-center lg:items-start items-center gap-y-6 order-2 lg:order-1">
            <h4 className="text-black dark:text-white font-outfit text-2xl text-center lg:text-left font-medium">
              <span className="text-3xl font-semibold">
                <span className="mr-1">
                  6
                </span>
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
                Iranian Community
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;

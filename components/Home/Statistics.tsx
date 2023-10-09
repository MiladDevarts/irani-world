"use client";

import React from "react";

interface StatisticsProps {
  classes: string;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  return (
    <>
      <div
        className={`${props.classes}  flex-col lg:flex-row gap-y-4 mt-10 lg:mt-2  items-center`}
      >
        <video autoPlay muted loop className="w-48">
          <source src="/videos/hakhamanesh-color.mov" />
        </video>
        <div className="flex flex-col gap-y-6 order-1 lg:order-2 -ml-4">
          <div className="flex flex-col justify-center lg:items-start items-center gap-y-6 order-2 lg:order-1">
            <h4 className="text-black dark:text-white font-outfit text-2xl text-center lg:text-left font-medium">
              <span className="text-3xl font-semibold">+10M</span> users
            </h4>
            <span className="font-opensans font-medium -mt-4 text-white-shade-8 dark:text-white">
              From all around the world
            </span>
          </div>
          <div className="flex gap-x-10 order-1 lg:order-2 text-center lg:text-left">
            <div className="">
              <h4 className="text-black dark:text-white  font-outfit text-5xl lg:text-2xl font-semibold">
                3,452k
              </h4>
              <span className="font-opensans text-white-shade-8 dark:text-white">
                Followers
              </span>
            </div>
            <div className="flex flex-col items-center text-center lg:text-left">
              <h4 className="text-black dark:text-white  font-outfit text-5xl lg:text-2xl font-semibold">
                600
              </h4>
              <span className="font-opensans text-white-shade-8 dark:text-white">
                Followers
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;

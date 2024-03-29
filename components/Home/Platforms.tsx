"use client";

import React, { useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import IraniWorldBox from "./IraniWorldBox";
import Terms from "./Terms";

import {
  IraniAsia,
  IraniAustralia,
  IraniCanada,
  IraniEurope,
  IraniUAE,
  IraniUSA,
} from "../Logo/Platforms";

import {
  AustraliaMap,
  CanadaMap,
  EuropeMap,
  UAEMap,
  USAMap,
  AsiaMap,
} from "../MapBox";

interface PlatformsProps {
  classes: string;
}

const Platforms: React.FC<PlatformsProps> = (props) => {
  const [activePlatform, setActivePlatform] = useState("usa");

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const platformsBox = useRef();

  return (
    <>
      {/* Right => Services in Countries */}
      <section
        className={`${props.classes} w-full lg:w-1/3 lg:h-full pt-10 pl-0 lg:pl-20 text-black`}
      >
        <IraniWorldBox />
        {/* 2. Countries Platform List */}
        <div
          ref={ref}
          {...events}
          onClick={() => {
            scrollTo(200, 0);
          }}
          className="relative grid no-scroll auto-cols-[100px] grid-flow-col gap-x-3 overflow-x-auto p-4 -z[200] w-full h-32 rounded-3xl bg-white-shade-2 dark:bg-[#273140] hover:cursor-pointer transition-all duration-300"
        >
          <div
            onClick={() => setActivePlatform("usa")}
            className="platform-shadow relative flex items-center col-span-1 justify-center w-full h-full bg-white dark:bg-[#191f2b] hover:box-shadow rounded-2xl hover:cursor-pointer transition-all duration-300"
          >
            <svg
              className="absolute top-0 left-0 m-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="animate-pulse"
                cx="12"
                cy="12"
                r="11"
                fill="#43D100"
                fillOpacity="0.34"
                stroke="white"
                stroke-width="2"
              />
              <circle
                className="animate-pulse"
                cx="12"
                cy="12"
                r="6"
                fill="#43D100"
              />
            </svg>
            <IraniUSA />
          </div>
          <div
            onClick={() => setActivePlatform("uae")}
            className="platform-shadow relative flex items-center col-span-1 justify-center w-full h-full bg-white rounded-2xl hover:cursor-pointer dark:bg-[#191f2b] transition-all duration-300"
          >
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="15.5"
                fill="#FB8800"
                fillOpacity="0.3"
              />
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="9.5"
                fill="#FB8800"
              />
            </svg>
            <IraniUAE />
          </div>
          <div
            onClick={() => setActivePlatform("ca")}
            className="platform-shadow relative flex items-center col-span-1 justify-center w-full h-full bg-white rounded-2xl dark:bg-[#273140] hover:cursor-pointer transition-all duration-300"
          >
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="15.5"
                fill="#FB8800"
                fillOpacity="0.3"
              />
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="9.5"
                fill="#FB8800"
              />
            </svg>
            <IraniCanada />
          </div>
          <div
            onClick={() => setActivePlatform("eu")}
            className="platform-shadow relative flex items-center col-span-1 justify-center w-full h-full bg-white rounded-2xl dark:bg-[#273140] hover:cursor-pointer transition-all duration-300"
          >
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="15.5"
                fill="#FB8800"
                fillOpacity="0.3"
              />
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="9.5"
                fill="#FB8800"
              />
            </svg>
            <IraniEurope />
          </div>
          <div
            onClick={() => setActivePlatform("au")}
            className="platform-shadow relative flex items-center col-span-1 justify-center w-full h-full bg-white rounded-2xl dark:bg-[#273140] hover:cursor-pointer transition-all duration-300"
          >
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="15.5"
                fill="#FB8800"
                fillOpacity="0.3"
              />
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="9.5"
                fill="#FB8800"
              />
            </svg>
            <IraniAustralia />
          </div>
          <div
            onClick={() => setActivePlatform("as")}
            className="platform-shadow relative flex items-center col-span-1 justify-center w-full h-full bg-white dark:bg-[#191f2b] rounded-2xl"
          >
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="15.5"
                fill="#FB8800"
                fillOpacity="0.3"
              />
              <circle
                className="animate-pulse"
                cx="15.5"
                cy="15.5"
                r="9.5"
                fill="#FB8800"
              />
            </svg>
            <IraniAsia />
          </div>
        </div>

        {activePlatform == "usa" && <USAMap />}
        {activePlatform == "uae" && <UAEMap />}
        {activePlatform == "ca" && <CanadaMap />}
        {activePlatform == "eu" && <EuropeMap />}
        {activePlatform == "au" && <AustraliaMap />}
        {activePlatform == "as" && <AsiaMap />}

        <Terms />
      </section>
    </>
  );
};

export default Platforms;

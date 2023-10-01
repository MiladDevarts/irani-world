import React from "react";
import { Sweden, Uae, Usa } from "../Icons/Countries";

const Countries = () => {
  return (
    <div className="relative bg-white-shade-2 w-full grid grid-cols-2 lg:flex mt-6 gap-x-2 justify-between p-4 rounded-2xl">
      <div className="w-full flex flex-col items-center gap-y-4 bg-white p-3 rounded-2xl">
        <span className="text-white-shade-10">12:00</span>
        <Usa />
        <span className="font-opensans text-black font-medium text-sm">
          New York,USA
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-y-4 bg-white p-3 rounded-2xl">
        <span className="text-white-shade-10">12:00</span>
        <Sweden />
        <span className="font-opensans text-black font-medium text-sm">
          Stockholm
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-y-4 bg-white p-3 rounded-2xl">
        <span className="text-white-shade-10">12:00</span>
        <Usa />
        <span className="font-opensans text-black font-medium text-sm">
          Los Angles, USA
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-y-4 bg-white p-3 rounded-2xl">
        <span className="text-white-shade-10">12:00</span>
        <Uae />
        <span className="font-opensans text-black font-medium text-sm">
          Dubai, UEA
        </span>
      </div>
    </div>
  );
};

export default Countries;

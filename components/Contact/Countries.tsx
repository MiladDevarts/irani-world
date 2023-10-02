import React from "react";
import { Sweden, Uae, Usa } from "../Icons/Countries";

const Countries = () => {
  return (
    <div className="relative bg-white-shade-2 w-full grid grid-cols-2  mt-6 gap-x-2 gap-y-2 justify-between p-4 rounded-2xl">
      <div className="w-full h-20 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-2xl">
        <Usa />
        <div className="flex flex-col">
          <span className="text-white-shade-10">12:00</span>
          <span className="font-opensans text-black font-medium text-sm">
            New York,USA
          </span>
        </div>
      </div>
      <div className="w-full h-20 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-2xl">
        <Usa />
        <div className="flex flex-col">
          <span className="text-white-shade-10">12:00</span>
          <span className="font-opensans text-black font-medium text-sm">
            New York,USA
          </span>
        </div>
      </div>
      <div className="w-full h-20 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-2xl">
        <Usa />
        <div className="flex flex-col">
          <span className="text-white-shade-10">12:00</span>
          <span className="font-opensans text-black font-medium text-sm">
            New York,USA
          </span>
        </div>
      </div>
      <div className="w-full h-20 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-2xl">
        <Usa />
        <div className="flex flex-col">
          <span className="text-white-shade-10">12:00</span>
          <span className="font-opensans text-black font-medium text-sm">
            New York,USA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Countries;

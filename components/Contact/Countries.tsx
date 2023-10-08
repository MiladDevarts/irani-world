import React from "react";
import { Sweden, Uae, Usa } from "../Icons/Countries";

interface ContactOptionsProps {
  classes:string
}

const Countries:React.FC<ContactOptionsProps> = (props) => {
  return (
    <div className={`${props.classes} relative bg-white-shade-2 w-full  grid-cols-2  mt-6 gap-x-2 gap-y-2 justify-between p-4 rounded-2xl`}>
      <div className="w-full h-28 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-3xl hover:bg-black hover:cursor-pointer transition-all duration-300 group">
        <Usa />
        <div className="flex flex-col">
          <span className="text-white-shade-10 text-lg group-hover:text-white transition-all duration-300">12:00</span>
          <span className="font-opensans text-black font-medium group-hover:text-white transition-all duration-300">
            New York,USA
          </span>
        </div>
      </div>
      <div className="w-full h-28 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-3xl hover:bg-black hover:cursor-pointer transition-all duration-300 group">
        <Usa />
        <div className="flex flex-col">
          <span className="text-white-shade-10 text-lg group-hover:text-white transition-all duration-300">12:00</span>
          <span className="font-opensans text-black font-medium group-hover:text-white transition-all duration-300">
          Los Angles, USA
          </span>
        </div>
      </div>
      <div className="w-full h-28 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-3xl hover:bg-black hover:cursor-pointer transition-all duration-300 group">
        <Sweden />
        <div className="flex flex-col">
          <span className="text-white-shade-10 text-lg group-hover:text-white transition-all duration-300">12:00</span>
          <span className="font-opensans text-black font-medium group-hover:text-white transition-all duration-300">
          Stockholm, Sweden
          </span>
        </div>
      </div>
      <div className="w-full h-28 flex flex-row items-center gap-y-4 gap-x-3 bg-white p-3 rounded-3xl hover:bg-black hover:cursor-pointer transition-all duration-300 group">
        <Uae />
        <div className="flex flex-col">
          <span className="text-white-shade-10 text-lg group-hover:text-white transition-all duration-300">12:00</span>
          <span className="font-opensans text-black font-medium group-hover:text-white transition-all duration-300">
            New York,USA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Countries;

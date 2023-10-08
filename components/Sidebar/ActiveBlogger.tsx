import Image from "next/image";
import React from "react";
import { Verified } from "../Icons/Solid";

interface ActiveBlogger {
  icon: string;
  title: string;
  role: string;
}

const ActiveBlogger: React.FC<ActiveBlogger> = (props) => {
  return (
    <div className="flex items-center gap-x-3">
      <Image src={props.icon} className="w-12" width={40} height={40} alt="" />
      <div className="flex flex-col gap-y-1">
        <span className="flex items-center gap-x-2 text-black text-xl">
          {props.title}
          <Verified />
        </span>
        <span className="text-white-shade-7 font-medium">{props.role}</span>
      </div>
    </div>
  );
};

export default ActiveBlogger;

import React from "react";

import Image from "next/image";
import Link from "next/link";

interface NewsCardFullWidthProps {
  readingTime: string;
  title: string;
  subtitle:string;
  summery: string;
  author: string;
  publish: string;
  avatar: string;
  cover: string;
  url:string
}

const NewsCardFullWidth: React.FC<NewsCardFullWidthProps> = (props) => {
  return (
    <Link
      href={props.url}
      className="group flex flex-col gap-y-4 lg:flex-row lg:items-center justify-between w-full h-auto lg:px-6 lg:p-8 py-8 border-b border-white-shade-4  hover:shadow-card transition-all duration-300 rounded-xl"
    >
      <div className="w-full lg:w-3/5 flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <Image className="" src={props.avatar} width={40} height={40} alt="" />
          <div className="flex flex-col">
            <span className="inline-flex font-medium gap-x-2 items-center text-black text-base">
              {props.author}
              <span className="text-white-shade-8 text-xs">
                {props.publish}
              </span>
            </span>
            <span className="text-white-shade-8 text-sm">{props.subtitle}</span>
          </div>
        </div>
        <h2 className="text-blacl text-xl font-outfit font-medium text-black">
          {props.title}
        </h2>
        <p className="text-white-shade-8">{props.summery}</p>
        <span className="group-hover:bg-black group-hover:text-white duration-300 transition-all w-[105px] h-10 flex items-center justify-center bg-white-shade-3 text-black font-medium font-opensans text-sm rounded-lg">
          {props.readingTime} min read
        </span>
      </div>
      <div
        className="w-[96%] lg:w-56 h-44 lg:h-40  mx-auto lg:mx-0 rounded-2xl bg-center bg-cover"
        style={{ backgroundImage: `url(${props.cover})` }}
      ></div>
    </Link>
  );
};

export default NewsCardFullWidth;

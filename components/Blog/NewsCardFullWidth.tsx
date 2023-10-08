
import React from "react";

import Image from "next/image";
import Link from "next/link";

interface NewsCardFullWidthProps {
  readingTime: string;
  title: string;
  summery: string;
  author: string;
  publish: string;
  avatar: string;
  cover: string;
}

const NewsCardFullWidth: React.FC<NewsCardFullWidthProps> = (props) => {
  return (
    <Link
      href={"/"}
      className="group flex flex-col gap-y-4 lg:flex-row lg:items-center justify-between w-full h-auto px-6 lg:p-8 py-8 border-y border-white-shade-4  hover:shadow-card transition-all duration-300"
    >
      <div className="w-full lg:w-3/5 flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <Image src={"/images/avatar/2.png"} width={70} height={70} alt="" />
          <div className="flex flex-col">
            <span className="inline-flex gap-x-2 items-center text-black text-xl">
              {props.author}
              <span className="text-white-shade-8 text-base">
                {props.publish}
              </span>
            </span>
            <span className="text-white-shade-8">Architecture</span>
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
        className="w-full lg:w-1/5 h-44 lg:h-32 bg-black rounded-3xl bg-center bg-cover"
        style={{ backgroundImage: `url('/images/thumbnails/2.png')` }}
      ></div>
    </Link>
  );
};

export default NewsCardFullWidth;

import Link from "next/link";
import React from "react";

interface NewsCarsProps {
  classes: string;
  readingTime: string;
  title: string;
  summery: string;
  author: string;
  publish: string;
  avatar: string;
  cover: string;
  cm: string;
  like: string;
}

const NewsCars: React.FC<NewsCarsProps> = (props) => {
  return (
    <>
      <Link href={"#"} className="w-1/2 group mt-0 hover:-mt-2 transition-all duration-500">
        <div
          className={`${props.classes} border-[1.5px] border-white-shade-3 rounded-2xl hover:shadow-card transition-all duration-300 `}
        >
          <div className="w-1/2 flex flex-col gap-y-5 p-5">
            <span className="w-[105px] h-10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 bg-white-shade-3 text-black font-medium font-opensans text-sm rounded-lg">
              {props.readingTime}
            </span>
            <h1 className="text-black text-xl font-outfit font-semibold lg:max-w-sm lg:text-lg">
              {props.title}
            </h1>
            <p className="font-opensans text-white-shade-11 font-medium text-xs lg:max-w-xs">
              {props.summery}
            </p>
            <div>
              <div className="flex items-center gap-x-5 py-5 lg:py-0 lg:pt-7">
                <div className="flex items-center gap-x-3">
                  <img className="w-10" src="/images/avatar/1.png" alt="" />
                  <h1 className="text-black text-sm font-semibold font-opensans flex flex-col items-start">
                    {props.author}
                    <span className="font-opensans text-sm text-white-shade-9 font-normal">
                      {props.publish}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-1/2 min-h-full  bg-cover bg-center rounded-2xl ml-6 mr-3 my-3"
            style={{ backgroundImage: `url('/images/thumbnails/1.png')` }}
          ></div>
        </div>
      </Link>
    </>
  );
};

export default NewsCars;
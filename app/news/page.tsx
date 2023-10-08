import React from "react";

import { ActiveBlogger, Tag } from "@/components/Sidebar";
import { NewsCardFullWidth, NewsCars } from "@/components/Blog";

import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Irani World | News",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="container flex flex-col lg:flex-row">
        <div className="w-full lg:w-5/6 pt-16 lg:mt-0 mt-16">
          <div className="w-full flex flex-col gap-y-4 lg:flex-row justify-between items-center mb-10 ">
            <div className="group flex items-center gap-x-3 px-3 py-3 w-full lg:w-1/2 h-22 rounded-full border border-white-shade-4">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="29" cy="29" r="29" fill="#FAFAFA" />
                <path
                
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.5 19.75C23.6675 19.75 19.75 23.6675 19.75 28.5C19.75 33.3325 23.6675 37.25 28.5 37.25C33.3325 37.25 37.25 33.3325 37.25 28.5C37.25 23.6675 33.3325 19.75 28.5 19.75ZM18.25 28.5C18.25 22.8391 22.8391 18.25 28.5 18.25C34.1609 18.25 38.75 22.8391 38.75 28.5C38.75 31.0605 37.8111 33.4017 36.2589 35.1982L39.5303 38.4697C39.8232 38.7626 39.8232 39.2374 39.5303 39.5303C39.2374 39.8232 38.7626 39.8232 38.4697 39.5303L35.1982 36.2589C33.4017 37.8111 31.0605 38.75 28.5 38.75C22.8391 38.75 18.25 34.1609 18.25 28.5Z"
                  fill="black"
                />
              </svg>

              <input
                type="text"
                placeholder="Search here..."
                className="group-focus-within:outline group-focus:outline-blue rounded-full text-lg text-black w-5/6 h-full focus:outline-none focus:border-none border-none outline-none"
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <Link
                className="flex justify-center items-center bg-blue text-white text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-14"
                href={"/"}
              >
                Popular
              </Link>
              <Link
                className="hover:bg-black hover:text-white transition-all duration-300 flex justify-center items-center text-white-shade-8 text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-14"
                href={"/"}
              >
                Latest
              </Link>
              <Link
                className="hover:bg-black hover:text-white transition-all duration-300 flex justify-center items-center text-white-shade-8 text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-14"
                href={"/"}
              >
                Design
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-y-6 gap-x-6 mb-10">
            <NewsCars
              readingTime={"  3 min read"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered plugin."
              }
              author={"Anna Rosé"}
              publish={"Posted just now"}
              avatar={"/images/blog/blogCar.webp"}
              cover={"/images/thumbnails/1.png"}
              cm={"120"}
              like={"2k"}
            />
            <NewsCars
              readingTime={"  3 min read"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered plugin."
              }
              author={"Anna Rosé"}
              publish={"Posted just now"}
              avatar={"/images/blog/blogCar.webp"}
              cover={"/images/thumbnails/1.png"}
              cm={"120"}
              like={"2k"}
            />
          </div>
          <div className="w-full flex gap-y-4">
            <NewsCardFullWidth
              readingTime={"3"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Takeyour design to real world with Locofys AI powered plugin.Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered see post"
              }
              author={"Cameron Williamson"}
              publish={"Sep 16,2023"}
              avatar={"/images/avatar/1.png"}
              cover={""}
            />
          </div>
        </div>
        <div className="lg:relative w-full lg:w-1/6 lg:h-screen">
          <div className="lg:fixed w-full h-full pt-16">
            <div className="flex flex-col mx-12">
              <h3 className="text-2xl font-outfit font-semibold text-black mb-4">
                Most active bloggers
              </h3>
              <div className="flex flex-col gap-y-4">
                <ActiveBlogger
                  icon={"/images/bloggers/irani-world.png"}
                  title={"Irani World"}
                  role={"Main"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/irani-usa.png"}
                  title={"Irani USA"}
                  role={"USA Platform"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/wsa.png"}
                  title={"WSA"}
                  role={"Company"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/riv.png"}
                  title={"Riv Design"}
                  role={"Company"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/wps.png"}
                  title={"WPS"}
                  role={"Community"}
                />
              </div>
            </div>
            <div className="flex flex-col mx-12 mt-6">
              <h3 className="text-2xl font-outfit font-semibold text-black mb-4">
                Tags
              </h3>
              <div className="max-w-sm flex items-center flex-wrap gap-x-2 gap-y-3">
                <Tag title={"Platform"} />
                <Tag title={"Design"} />
                <Tag title={"Starter"} />
              </div>
            </div>
            <div className="flex flex-col mx-12">
              <h3 className="text-2xl font-outfit font-semibold text-black mb-6 mt-10">
                Featured blog
              </h3>
              <div className="flex w-full flex-col gap-y-6">
                <div className="flex w-full h-32 gap-x-4 p-3">
                  <div
                    className="w-24 h-full roundex-3xl bg-center bg-cover rounded-xl"
                    style={{ backgroundImage: `url('/images/featured/1.png')` }}
                  ></div>
                  <div className="flex flex-col gap-y-3">
                    <span className="text-black font-outfit text-xl font-semibold mt-2">
                      White Candle Black
                      <br />– White Deer Anons
                    </span>
                    <span className="font-medium text-white-shade-8 text-lg">
                      11 aug 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

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
            <div className="flex items-center gap-x-3 px-3 w-full lg:w-1/2 h-24 rounded-full border border-white-shade-4">
              <svg
                width="83"
                height="74"
                viewBox="0 0 83 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="41.5" cy="37.5" r="41.5" fill="#FAFAFA" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.7835 24.05C33.8569 24.05 28.2418 29.5345 28.2418 36.3C28.2418 43.0655 33.8569 48.55 40.7835 48.55C47.71 48.55 53.3251 43.0655 53.3251 36.3C53.3251 29.5345 47.71 24.05 40.7835 24.05ZM26.0918 36.3C26.0918 28.3747 32.6695 21.95 40.7835 21.95C48.8974 21.95 55.4751 28.3747 55.4751 36.3C55.4751 39.8847 54.1294 43.1624 51.9045 45.6775L56.5936 50.2575C57.0134 50.6676 57.0134 51.3324 56.5936 51.7425C56.1738 52.1525 55.4931 52.1525 55.0733 51.7425L50.3842 47.1624C47.8093 49.3356 44.4535 50.65 40.7835 50.65C32.6695 50.65 26.0918 44.2253 26.0918 36.3Z"
                  fill="black"
                />
              </svg>
              <input
                type="text"
                placeholder="Search here..."
                className="rounded-full text-lg text-black w-5/6 h-full focus:outline-none focus:border-none border-none outline-none"
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <Link
                className="flex justify-center items-center bg-blue text-white text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-16"
                href={"/"}
              >
                Popular
              </Link>
              <Link
                className="flex justify-center items-center text-white-shade-8 text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-16"
                href={"/"}
              >
                Latest
              </Link>
              <Link
                className="flex justify-center items-center text-white-shade-8 text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-16"
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
              <div className="flex flex-col gap-y-6">
                <ActiveBlogger
                  icon={"/images/bloggers/irani-world.png"}
                  title={"Irani World"}
                  role={"Main"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/irani-usa.png"}
                  title={"Irani World"}
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

import React from "react";

import { ActiveBlogger, Tag } from "@/components/Sidebar";
import { NewsCard } from "@/components/Blog";
import BioCardFullWidth from "@/components/Bio/BioCardFullWidth";

import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irani World | Bio",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="container flex flex-col lg:flex-row">
        <div className="w-full lg:w-5/6 pt-16">
          <div className="w-full flex items-center gap-x-8 pb-10 mt-20 lg:mt-0">
            <svg
              width="685"
              height="1"
              viewBox="0 0 685 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="-4.37114e-08"
                y1="0.5"
                x2="685"
                y2="0.49994"
                stroke="#E6E6E6"
              />
            </svg>
            <svg
              width="51"
              height="77"
              viewBox="0 0 51 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.9397 32.0138C41.6965 28.5042 43.6202 24.4162 44.5662 20.0571L51 21.449C49.8432 26.7794 47.4906 31.7785 44.1197 36.07C40.7484 40.3616 36.4463 43.8339 31.537 46.2257C28.4592 47.7253 25.1929 48.7757 21.8381 49.354L26.6542 67.2998C27.2301 69.4461 29.4395 70.7197 31.5889 70.1446C33.7384 69.5695 35.014 67.3635 34.4381 65.2172L32.8857 59.4322C32.8829 59.4332 32.8801 59.4338 32.8773 59.4344L32.6891 58.6995L31.5594 54.4901L31.6073 54.4772L31.2459 53.0668C35.6415 51.9439 39.7194 49.8252 43.1628 46.8746L47.4499 51.8626C44.9207 54.0296 42.112 55.8296 39.107 57.2194L40.7969 63.5161C42.3138 69.1686 38.954 74.9787 33.2927 76.4934C27.6315 78.0081 21.8125 74.6535 20.2955 69.001L15.1629 49.8751C9.91051 49.7979 4.7356 48.5777 0 46.2967L2.86022 40.3767C6.88363 42.3145 11.2948 43.3163 15.7619 43.3062C20.229 43.2962 24.6356 42.2747 28.6502 40.3189C32.6649 38.3629 36.1829 35.5234 38.9397 32.0138Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.2124 19.1127L29.031 13.4814L30.8599 20.372C32.3245 25.8899 29.0807 31.5618 23.6146 33.0404L12.6933 35.9944L8.2124 19.1127ZM15.5689 23.4002L16.9406 28.5681L23.0838 26.9064C24.7802 26.4476 25.7869 24.6874 25.3324 22.9749L24.7837 20.9077L15.5689 23.4002Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.2073 15.3233C6.14669 11.3275 8.49571 7.22034 12.454 6.14967L31.9074 0.887695L33.6756 7.54899C35.1906 13.2573 31.8349 19.1247 26.1803 20.6542L9.79848 25.0853L7.2073 15.3233ZM12.6434 12.3758L14.0458 17.6591L25.3083 14.6126C27.3817 14.0518 28.6121 11.9005 28.0565 9.80739L27.6601 8.31399L12.6434 12.3758Z"
                fill="black"
              />
            </svg>

            <svg
              width="685"
              height="1"
              viewBox="0 0 685 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="-4.37114e-08"
                y1="0.5"
                x2="685"
                y2="0.49994"
                stroke="#E6E6E6"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col gap-y-4 lg:flex-row gap-x-6">
            <NewsCard
              readingTime={"  3 min read"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered plugin."
              }
              author={"Anna Rosé"}
              publish={"Posted just now"}
              avatar={"/images/blog/blogCar.webp"}
              cover={"/images/thumbnails/1.jpg"}
              cm={"120"}
              like={"2k"}
            />
            <NewsCard
              readingTime={"  3 min read"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered plugin."
              }
              author={"Anna Rosé"}
              publish={"Posted just now"}
              avatar={"/images/blog/blogCar.webp"}
              cover={"/images/thumbnails/1.jpg"}
              cm={"120"}
              like={"2k"}
            />
          </div>
          <div className="flex flex-col w-full gap-y-8 my-10">
            <BioCardFullWidth
              readingTime={"3"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Takeyour design to real world with Locofys AI powered plugin.Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered see post"
              }
              author={"Cameron Williamson"}
              publish={"Sep 16,2023"}
              avatar={"/images/avatar/1.png"}
              cover={"/images/bio/hakhamanesh.png"}
            />
            <BioCardFullWidth
              readingTime={"3"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Takeyour design to real world with Locofys AI powered plugin.Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered see post"
              }
              author={"Cameron Williamson"}
              publish={"Sep 16,2023"}
              avatar={"/images/avatar/1.png"}
              cover={"/images/bio/hakhamanesh.png"}
            />
            <BioCardFullWidth
              readingTime={"3"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Takeyour design to real world with Locofys AI powered plugin.Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered see post"
              }
              author={"Cameron Williamson"}
              publish={"Sep 16,2023"}
              avatar={"/images/avatar/1.png"}
              cover={"/images/bio/hakhamanesh.png"}
            />
            <BioCardFullWidth
              readingTime={"3"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Takeyour design to real world with Locofys AI powered plugin.Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered see post"
              }
              author={"Cameron Williamson"}
              publish={"Sep 16,2023"}
              avatar={"/images/avatar/1.png"}
              cover={"/images/bio/hakhamanesh.png"}
            />
            <BioCardFullWidth
              readingTime={"3"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Takeyour design to real world with Locofys AI powered plugin.Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered see post"
              }
              author={"Cameron Williamson"}
              publish={"Sep 16,2023"}
              avatar={"/images/avatar/1.png"}
              cover={"/images/bio/hakhamanesh.png"}
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
                <div className="flex w-full h-32 gap-x-3 p-3">
                  <div
                    className="w-20 h-full roundex-3xl bg-center bg-cover rounded-xl"
                    style={{ backgroundImage: `url('/images/featured/1.png')` }}
                  ></div>
                  <div className="flex flex-col gap-y-3">
                    <span className="text-black font-outfit text-lg font-semibold mt-2">
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

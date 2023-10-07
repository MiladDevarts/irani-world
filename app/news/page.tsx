import React from "react";

import { ActiveBlogger, Tag } from "@/components/Sidebar";
import { NewsCardFullWidth, NewsCars } from "@/components/Blog";

import OverlayMenu from "@/components/Overlay";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="container flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/5 pt-16 mt-20">
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
        <div className="lg:relative w-full lg:w-1/5 lg:h-screen">
          <div className="lg:fixed w-full h-full pt-16">
            <div className="flex flex-col mx-12">
              <h3 className="text-2xl font-outfit font-semibold text-black mb-10">
                Most active bloggers
              </h3>
              <div className="flex flex-col gap-y-7">
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
            <div className="flex flex-col mx-12 mt-10">
              <h3 className="text-2xl font-outfit font-semibold text-black mb-10">
                Tags
              </h3>
              <div className="max-w-sm flex items-center flex-wrap gap-x-2 gap-y-3">
                <Tag title={"Dastgah"} />
                <Tag title={"Folk music"} />
                <Tag title={"setar"} />
                <Tag title={"tar"} />
                <Tag title={"tar"} />
                <Tag title={"tour"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

import React from "react";

import { ActiveBlogger, Tag } from "@/components/Sidebar";
import { NewsCars } from "@/components/Blog";
import BioCardFullWidth from "@/components/Bio/BioCardFullWidth";

const page = () => {
  return (
    <main className="flex container">
      <div className="w-4/5 pt-16">
        <div className="w-full flex items-center gap-x-8 pb-10">
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
          <div className="flex flex-col items-center">
            <span className="text-5xl font-outfit font-medium text-black">235</span>
            <span className="text-white-shade-8 text-sm">People</span>
          </div>
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
        <div className="w-full flex gap-x-6">
          <NewsCars
            classes={"lg:flex"}
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
            classes={"lg:flex"}
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
            cover={""}
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
            cover={""}
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
            cover={""}
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
            cover={""}
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
            cover={""}
          />
        </div>
      </div>
      <div className="relative w-1/5 h-screen">
        <div className="fixed w-full h-full pt-16">
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
  );
};

export default page;

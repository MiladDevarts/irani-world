import React from "react";
import { ActiveBlogger, Tag } from "@/components/Sidebar";

const page = () => {
  return (
    <main className="flex container">
      <div className="w-3/4 pt-16">
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          magni dolorum exercitationem architecto fugiat corporis, debitis
          harum, sed ipsam eum labore omnis nam excepturi iusto molestiae
          incidunt autem id molestias.
        </p>
      </div>
      <div className="relative w-1/4 h-screen">
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
            <div className="w-full flex gap-x-3 flex-wrap gap-y-7">
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

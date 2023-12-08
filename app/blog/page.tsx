import React from "react";

import { ActiveBlogger, Tag } from "@/components/Sidebar";
import { NewsCardFullWidth, NewsCard } from "@/components/Blog";

import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Irani World | Blog",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="container flex flex-col lg:flex-row">
        <div className="w-full lg:w-5/6 pt-16 lg:mt-0 mt-16">
          <div className="w-full flex flex-col gap-y-4 lg:flex-row justify-between items-center mb-10 ">
            <div className="focus-within:border-black focus-within:border-2 transition-all flex items-center gap-x-3 px-3 py-3 w-full lg:w-1/2 h-22 rounded-full border-2 border-white-shade-4">
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
                className="gap-x-2 flex justify-center items-center bg-blue text-white text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-14"
                href={"/"}
              >
                <svg width="14" height="20" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.74687 6.16322L6.59942 6.53857L6.59942 6.53857L5.74687 6.16322ZM2.83259 10.9281L1.98004 10.5528L1.98004 10.5528L2.83259 10.9281ZM9.7583 1.02869L10.1375 0.0653453L10.1375 0.0653453L9.7583 1.02869ZM9.45161 6.91694L8.45125 6.91885L9.45161 6.91694ZM10.6844 9.96201L10.4971 10.9443L10.4979 10.9443L10.6844 9.96201ZM15.0811 10.399L14.1459 10.9454L14.1459 10.9454L15.0811 10.399ZM14.1675 12.6803L14.9782 13.1196L15.0002 13.0881L15.02 13.0556L14.1675 12.6803ZM14.1675 12.6803L13.3568 12.241L13.3348 12.2725L13.3149 12.3049L14.1675 12.6803ZM11.2532 17.4452L12.1058 17.8205L12.1058 17.8205L11.2532 17.4452ZM7.24179 22.5797L6.86257 23.5431L6.86257 23.5431L7.24179 22.5797ZM7.54847 16.6915L8.54883 16.6896L8.54883 16.6896L7.54847 16.6915ZM6.37788 13.6463L6.56519 12.664L6.56346 12.664L6.37788 13.6463ZM1.91902 13.2094L2.85422 12.663L2.85422 12.663L1.91902 13.2094ZM7.93808 14.6267L6.93772 14.6286L7.93808 14.6267ZM7.94989 13.7898L8.78888 13.0946L7.94989 13.7898ZM9.06201 8.98163L8.06165 8.98354L9.06201 8.98163ZM9.0502 9.8185L8.21121 10.5138L9.0502 9.8185ZM4.89433 5.78787L1.98004 10.5528L3.68513 11.3035L6.59942 6.53857L4.89433 5.78787ZM10.1375 0.0653453C9.5065 -0.0630312 8.93033 0.250827 8.54188 0.566852C8.16658 0.872177 7.81368 1.29536 7.47914 1.74874C6.80226 2.66607 5.95909 4.04698 4.89433 5.78787L6.59942 6.53857C7.6925 4.75138 8.46771 3.48622 9.06341 2.6789C9.36516 2.26996 9.56212 2.06117 9.67441 1.96981C9.77356 1.88915 9.62276 2.0416 9.37908 1.99203L10.1375 0.0653453ZM10.452 6.91503C10.8077 5.02981 11.091 3.53516 11.1797 2.49834C11.2236 1.98583 11.2298 1.49264 11.1316 1.09162C11.0301 0.677066 10.7677 0.193563 10.1375 0.0653453L9.37908 1.99203C9.13618 1.94261 9.11921 1.75699 9.14549 1.86431C9.17507 1.98517 9.19138 2.23786 9.15184 2.70016C9.07375 3.61296 8.81641 4.98364 8.45125 6.91885L10.452 6.91503ZM10.0624 8.97971L10.452 6.91503L8.45125 6.91885L8.06165 8.98354L10.0624 8.97971ZM9.68777 10.9443H10.4971L10.8718 8.97971H10.0624L9.68777 10.9443ZM11.0056 8.97968C10.96 8.97968 10.915 8.97968 10.871 8.97971L10.4979 10.9443C10.541 10.9443 10.5852 10.9443 10.631 10.9443L11.0056 8.97968ZM13.0208 8.97968H11.0056L10.631 10.9443H12.6462L13.0208 8.97968ZM16.0163 9.85256C15.7421 9.2939 15.1895 9.1155 14.7167 9.04487C14.263 8.9771 13.6655 8.97968 13.0208 8.97968L12.6462 10.9443C13.3568 10.9443 13.7759 10.9469 14.0536 10.9883C14.3121 11.027 14.2056 11.0671 14.1459 10.9454L16.0163 9.85256ZM15.02 13.0556C15.3777 12.4708 15.7113 11.9301 15.9114 11.4807C16.12 11.0123 16.2905 10.4115 16.0163 9.85256L14.1459 10.9454C14.086 10.8235 14.1758 10.7486 14.062 11.0041C13.9397 11.2788 13.7093 11.6602 13.315 12.3049L15.02 13.0556ZM14.9782 13.1196L14.9782 13.1196L13.3568 12.241L13.3568 12.241L14.9782 13.1196ZM12.1058 17.8205L15.02 13.0556L13.3149 12.3049L10.4007 17.0698L12.1058 17.8205ZM6.86257 23.5431C7.49358 23.6714 8.06975 23.3576 8.4582 23.0415C8.8335 22.7362 9.1864 22.313 9.52094 21.8597C10.1978 20.9423 11.041 19.5614 12.1058 17.8205L10.4007 17.0698C9.30758 18.857 8.53237 20.1222 7.93667 20.9295C7.63492 21.3384 7.43796 21.5472 7.32567 21.6386C7.22652 21.7193 7.37732 21.5668 7.621 21.6164L6.86257 23.5431ZM6.54811 16.6934C6.19238 18.5786 5.90904 20.0732 5.82034 21.1101C5.7765 21.6226 5.77027 22.1158 5.86844 22.5168C5.96993 22.9313 6.23234 23.4148 6.86257 23.5431L7.621 21.6164C7.8639 21.6658 7.88087 21.8514 7.8546 21.7441C7.82501 21.6232 7.8087 21.3705 7.84825 20.9082C7.92633 19.9954 8.18367 18.6248 8.54883 16.6896L6.54811 16.6934ZM6.93772 14.6286L6.54811 16.6934L8.54883 16.6896L8.93845 14.6248L6.93772 14.6286ZM7.31233 12.664H6.56519L6.19058 14.6286H6.93772L7.31233 12.664ZM5.99448 14.6287C6.06207 14.6287 6.12827 14.6287 6.19231 14.6286L6.56346 12.664C6.50146 12.6641 6.43702 12.6641 6.36909 12.6641L5.99448 14.6287ZM3.97931 14.6287H5.99448L6.36909 12.6641H4.35392L3.97931 14.6287ZM0.983816 13.7558C1.25798 14.3145 1.81058 14.4929 2.28339 14.5635C2.73703 14.6313 3.33454 14.6287 3.97931 14.6287L4.35392 12.6641C3.64326 12.6641 3.2242 12.6615 2.94651 12.6201C2.68799 12.5814 2.7945 12.5413 2.85422 12.663L0.983816 13.7558ZM1.98004 10.5528C1.62235 11.1376 1.28877 11.6783 1.0887 12.1276C0.880086 12.5961 0.709533 13.1969 0.983816 13.7558L2.85422 12.663C2.91404 12.7849 2.82427 12.8598 2.93805 12.6043C3.06038 12.3296 3.2908 11.9482 3.68513 11.3035L1.98004 10.5528ZM8.93845 14.6248C8.97682 14.4214 9.02636 14.1701 9.03747 13.9561C9.05004 13.7137 9.02454 13.3787 8.78888 13.0946L7.1109 14.4851C7.0589 14.4224 7.02885 14.3524 7.01479 14.2913C7.00253 14.238 7.00597 14.2065 7.00519 14.2214C7.00439 14.237 7.00089 14.2733 6.98874 14.3478C6.97668 14.4218 6.96021 14.5094 6.93772 14.6286L8.93845 14.6248ZM6.93772 14.6286C7.05908 14.6286 7.14827 14.6287 7.22324 14.6305C7.2987 14.6324 7.33504 14.6357 7.3505 14.6378C7.36533 14.6398 7.33377 14.6374 7.28362 14.6154C7.22613 14.5903 7.16291 14.5478 7.1109 14.4851L8.78888 13.0946C8.55323 12.8104 8.22863 12.7233 7.98807 12.6907C7.77556 12.6619 7.51937 12.664 7.31233 12.664L6.93772 14.6286ZM8.06165 8.98354C8.02327 9.18692 7.97374 9.43818 7.96263 9.65227C7.95006 9.8946 7.97556 10.2296 8.21121 10.5138L9.88919 9.12323C9.9412 9.18594 9.97124 9.25591 9.9853 9.31705C9.99757 9.37037 9.99413 9.40183 9.9949 9.38689C9.99571 9.37132 9.99921 9.33501 10.0114 9.26053C10.0234 9.18655 10.0399 9.09892 10.0624 8.97971L8.06165 8.98354ZM10.0624 8.97971C9.94102 8.97971 9.85182 8.97965 9.77686 8.97778C9.7014 8.9759 9.66505 8.97261 9.64959 8.97052C9.63477 8.96851 9.66633 8.97096 9.71647 8.99289C9.77397 9.01804 9.83718 9.06052 9.88919 9.12323L8.21121 10.5138C8.44687 10.7979 8.77147 10.8851 9.01202 10.9176C9.22454 10.9464 9.48073 10.9443 9.68777 10.9443L10.0624 8.97971Z" fill="white"/>
</svg>

                Popular
              </Link>
              <Link
                className="hover:bg-black gap-x-2 hover:text-white transition-all duration-300 flex justify-center items-center text-white-shade-8 text-lg font-semibold font-outfit rounded-full border border-white-shade-4 px-10 h-14"
                href={"/"}
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.08823 13.5487C2.83036 13.5487 1 11.7229 1 9.47068C1 7.21846 2.83036 5.39267 5.08823 5.39267H6.437M5.08823 13.5487C5.08823 13.5487 6.5 18.4396 7 19.9345C7.5 21.4293 10 21.4293 10 19.4362C10 17.4431 10 16.349 10 13.8088M5.08823 13.5487H6.437M10 13.8088C12.8477 14.4575 15.4867 16.1862 18.0258 17.4526C23.1139 19.9902 22.9998 11.9421 22.9998 9.47068C22.9998 6.99924 23.1139 -1.04887 18.0258 1.48881C14.8411 3.07716 11.4994 5.39267 7.78577 5.39267H6.437M10 13.8088C9.27601 13.6438 8.53853 13.5487 7.78577 13.5487H6.437M6.437 13.5487V5.39267"
                    stroke="#A6A6A6"
                    stroke-width="2"
                  />
                  <path
                    d="M24 7V12"
                    stroke="#A6A6A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Latest
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-y-6 gap-x-6 mb-10">
            <NewsCard
              url="blog/what-is-irani-world"
              readingTime={"1 min read"}
              title={"What is the Irani.World platform?"}
              summery={
                "All people who have some connection to Iranian culture or ethnicity, are welcome to this platform. "
              }
              author={"Irani World"}
              publish={"Dec 1 , 2023"}
              avatar={"/images/bloggers/irani-world.png"}
              cover={"/images/thumbnails/iw-1-cover.jpg"}
              cm={"120"}
              like={"2k"}
            />
            <NewsCard
              url="blog/why-use-invest-time-iraniworld"
              readingTime={"3 min read"}
              title={
                "Why should you use and invest time in the Irani.World platform? "
              }
              summery={
                "Bringing Iranian businesses and professionals together has valuable positive "
              }
              author={"Irani World"}
              publish={"Nov 25 , 2023"}
              avatar={"/images/bloggers/irani-world.png"}
              cover={"/images/thumbnails/iw-2-cover.jpg"}
              cm={"120"}
              like={"2k"}
            />
          </div>
          <div className="w-full flex flex-col gap-y-4 mb-10">
            <NewsCardFullWidth
              url="blog/vision-of-irani-usa"
              readingTime={"2"}
              title={"Crafting the Vision of Irani USA from Idea to Reality"}
              subtitle={"Compnay"}
              summery={
                "In the world of web design and development, there are stories that stand out as inspiring examples of creativity, dedication, and collaboration. "
              }
              author={"Riv Design"}
              publish={"Oct 15,2023"}
              avatar={"/images/bloggers/riv.png"}
              cover={"/images/thumbnails/riv-cover.jpg"}
            />
            <NewsCardFullWidth
              url="blog/wsa-riv-wps-partnership-innovative-ad-platform"
              readingTime={"5"}
              title={
                "WSA Company Announces Exciting Partnership with RIV Company and WPS Association for Innovative Advertising Platform"
              }
              subtitle={"Compnay"}
              summery={
                "In a significant leap forward for the world of advertising and marketing, WSA Company is proud to announce... "
              }
              author={"WSA"}
              publish={"Oct 18,2023"}
              avatar={"/images/bloggers/wsa.png"}
              cover={"/images/thumbnails/wsa-cover.jpg"}
            />
            <NewsCardFullWidth
              url="blog/wps-associations-new-endeavor"
              readingTime={"4"}
              title={
                "Bridging Boundaries: WPS Association's New Endeavor - WSA"
              }
              subtitle={"Compnay"}
              summery={
                "In a remarkable testament to the power of collaboration and innovation, the WPS Association has taken a... "
              }
              author={"WPS"}
              publish={"Oct 22,2023"}
              avatar={"/images/bloggers/wps.png"}
              cover={"/images/thumbnails/wps-cover.jpg"}
            />
            <NewsCardFullWidth
              url="/blog/irani-world-job-personalization-iranian-americans"
              readingTime={"7"}
              title={
                "Unveiling Irani.World's American Section: A Job and Personalization Platform Tailored for Iranian Americans"
              }
              subtitle={"USA Platform"}
              summery={
                "Greetings, dear readers and future users of the Irani.World project! We're excited to introduce you to the latest..."
              }
              author={"Irani USA"}
              publish={"Oct 26,2023"}
              avatar={"/images/bloggers/irani-usa.png"}
              cover={"/images/thumbnails/iu-2-cover.jpg"}
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
                <div className="flex w-full h-32 gap-x-3 p-3">
                  <div
                    className="w-20 h-full roundex-3xl bg-center bg-cover rounded-xl"
                    style={{
                      backgroundImage: `url('/images/thumbnails/riv-cover.jpg')`,
                    }}
                  ></div>
                  <div className="flex flex-col gap-y-3">
                    <span className="text-black font-outfit text-lg font-semibold mt-2">
                      Crafting the Vision of
                      <br />
                      Irani USA from Idea to Reality
                    </span>
                    <span className="font-medium text-white-shade-8">
                      15 oct 2023
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

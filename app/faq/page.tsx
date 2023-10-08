import React from "react";
import { Metadata } from "next";

import OverlayMenu from "@/components/Overlay";
import { FAQItem } from "@/components/FAQ";
import { Category } from "@/components/Blog";

export const metadata: Metadata = {
  title: "Irani World | FAQ",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="container flex flex-col lg:flex-row gap-x-20">
        <div className="w-full lg:w-1/3 flex flex-col mt-28 lg:mt-16">
          <div>
            <h1 className="text-black text-3xl font-semibold font-outfit mb-6">
              <span className="flex items-center gap-x-3">
                Frequently
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 1.75C5.89137 1.75 1.75 5.89137 1.75 11C1.75 16.1086 5.89137 20.25 11 20.25C16.1086 20.25 20.25 16.1086 20.25 11C20.25 5.89137 16.1086 1.75 11 1.75ZM0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11 6.75C10.3787 6.75 9.875 7.25368 9.875 7.875C9.875 8.28921 9.53921 8.625 9.125 8.625C8.71079 8.625 8.375 8.28921 8.375 7.875C8.375 6.42525 9.55025 5.25 11 5.25C12.4497 5.25 13.625 6.42525 13.625 7.875C13.625 8.83834 13.1056 9.67957 12.3353 10.1354C12.1385 10.2518 11.9761 10.3789 11.8703 10.5036C11.7675 10.6246 11.75 10.7036 11.75 10.75V12C11.75 12.4142 11.4142 12.75 11 12.75C10.5858 12.75 10.25 12.4142 10.25 12V10.75C10.25 10.2441 10.4715 9.83364 10.7266 9.53301C10.9786 9.23602 11.2929 9.0092 11.5715 8.84439C11.9044 8.64739 12.125 8.28655 12.125 7.875C12.125 7.25368 11.6213 6.75 11 6.75ZM11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16Z"
                    fill="black"
                  />
                </svg>
              </span>
              asked questions
            </h1>
            <p className="text-white-shade-8 max-w-md">
            Find frequently asked questions here.If you cannot find your question answered here fell free to contact us directly.
            </p>
            <div className="hidden lg:flex flex-col py-4">
                <Category classes={""} content={"General"} />
                <Category classes={""} content={"Platform"} />
                <Category classes={""} content={"Plans"} />
                <Category classes={""} content={"Accounts"} />
              </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col mt-6 lg:mt-16 rounded-3xl">
          <div className="w-full flex flex-col gap-y-4 lg:gap-6 p-5 rounded-xl">
            <FAQItem
              title={"What is White Snail American all about?"}
              content={
                "Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."
              }
            />
            <FAQItem
              title={"Who can use your platform?"}
              content={
                "Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."
              }
            />
            <FAQItem
              title={"Why is brand development important for my business?"}
              content={
                "Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."
              }
            />
            <FAQItem
              title={"What types of ideas and startups do you invest in?"}
              content={
                "Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."
              }
            />
            <FAQItem
              title={"How much funding do you typically provide?"}
              content={
                "Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."
              }
            />
            <FAQItem
              title={"What other resources do you provide besides funding?"}
              content={
                "Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

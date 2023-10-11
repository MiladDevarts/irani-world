"use client";

import React, { useState } from "react";
import { Metadata } from "next";

import OverlayMenu from "@/components/Overlay";
import { FAQItem } from "@/components/FAQ";
import { Category } from "@/components/Blog";
import Link from "next/link";

const page = () => {
  const [faqList, setFaqList] = useState({
    general: [
      {
        question: "In which countries is this platform currently active?",
        answer:
          "In its initial stage, all Iranians can access and use the services of this platform at IraniUSA.com.",
      },
      {
        question: "How can I find my desired region?",
        answer:
          "On the homepage of the irani.world website, you can find and enter all the accessible regions and the regions that will be added to the platform soon.",
      },
      {
        question:
          "Can I collaborate with your organization or be employed by you?",
        answer:
          "Yes, you can contact us for collaboration at enquiries@irani.world. If you're interested in job opportunities on our team, visit irani.world/jobs.",
      },
      {
        question: "Who is this platform for?",
        answer:
          "his platform is for anyone who has a business or profession, as well as those who need services from businesses or professionals. Anyone can access the platform and start their journey today!",
      },
    ],
    platform: [
      {
        question: "Will this platform be active in other countries as well?",
        answer:
          "Yes, although this platform is currently available only in the United States, it will be made available to other countries in the not-so-distant future. You can check out the list of upcoming platforms at this link!",
      },
      {
        question:
          "Can companies and investors buy this platform to launch it in other countries and communities?",
        answer:
          "Yes, simply contact us with your company's official email address at Rivdesign.se.",
      },
      {
        question: "Can we advertise our business on this platform?",
        answer:
          "Yes, if you have a business or offer services, you can register on the platform and display your advertisements in designated spots. You can advertise your business banner in the ads reserve section.",
      },
      {
        question: "Can artists collaborate on this platform?",
        answer:
          "Yes, artists can have their own profiles by registering in the Artist & Event plan.",
      },
    ],
    accounts: [
      {
        question: "How can I request a verified badge?",
        answer:
          "After creating an account on the platform, simply go to the Verify section in the user panel and review the requirements of the verification process.",
      },
    ],
    plans: [
      {
        question: "Can I create an account on the platform for free? ",
        answer:
          "Except for the Ultra plans, all platform plans will be accessible for free, but they will have fewer features compared to paid plans.",
      },
    ],
  });
  const [faqCategory, setFaqCategory] = useState("general");

  return (
    <>
      <OverlayMenu />
      <div
        className="w-full pb-20 bg-cover"
        style={{ backgroundImage: `url('/images/general/bg.png')` }}
      >
        <main className="container flex flex-col lg:flex-row gap-x-2">
          <div className="w-full lg:w-1/3 flex flex-col mt-28 lg:mt-16">
            <div>
              <h1 className="text-black text-4xl lg:text-3xl font-semibold font-outfit my-6 lg:mb-6">
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
              <p className="text-white-shade-8 max-w-md lg:text-base text-xl my-9 lg:my-0">
                Find frequently asked questions here.If you cannot find your
                question answered here fell free to contact us directly.
              </p>
              <div className="hidden lg:flex flex-col py-4">
                <Link
                  onClick={() => {
                    setFaqCategory("general");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      General
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("platform");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Platform
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("plans");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Plans
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("accounts");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Accounts
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col mt-6 lg:mt-16 rounded-3xl">
            <div className="w-full flex flex-col gap-y-4 lg:gap-6 lg:p-5 rounded-xl">
              {faqCategory == "general" &&
                faqList.general.map((faq, id) => {
                  return (
                    <FAQItem
                      key={id}
                      title={faq.question}
                      content={faq.answer}
                    />
                  );
                })}{" "}
              {faqCategory == "platform" &&
                faqList.platform.map((faq, id) => {
                  return (
                    <FAQItem
                      key={id}
                      title={faq.question}
                      content={faq.answer}
                    />
                  );
                })}
              {faqCategory == "plans" &&
                faqList.plans.map((faq, id) => {
                  return (
                    <FAQItem
                      key={id}
                      title={faq.question}
                      content={faq.answer}
                    />
                  );
                })}
              {faqCategory == "accounts" &&
                faqList.accounts.map((faq, id) => {
                  return (
                    <FAQItem
                      key={id}
                      title={faq.question}
                      content={faq.answer}
                    />
                  );
                })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;

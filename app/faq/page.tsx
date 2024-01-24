"use client";

import React, { useState } from "react";

import OverlayMenu from "@/components/Overlay";
import { FAQItem } from "@/components/FAQ";
import Link from "next/link";

const page = () => {
  const [faqList, setFaqList] = useState({
    general: [
      {
        question: "What is the Irani.World platform?",
        answer:
          "Irani.World is a central platform website for the promotion of Iranian cultural and business growth.",
      },
      {
        question: "How does Irani.World reach its goal?",
        answer:
          "Irani.World promotes Iranian cultural growth by collecting and publishing our historical and cultural stories and research. Irani.World business growth is achieved through a series of regional Iranian business promotional platform websites.",
      },
      {
        question:
          "How do I reach and use the cultural and business promotional platform websites?",
        answer:
          "Irani.World is the central platform website from which each regional Iranian business promotional platform website can be accessed. Link to the cultural websites (Irani.Bio, Irani.Photos) from the Irani.World homepage.",
      },
    ],
    join: [
      {
        question:
          "How do I join the Iranian cultural websites or the Iranian business promotional platform websites?",
        answer:
          "To join the Iranian business promotional platform website, first find the region where you intend to conduct business on the Irani.World homepage. Once you reach the homepage of your region, you can select the appropriate plan and create a profile for your profession or business. Once you have joined an Iranian business promotional platform at the appropriate level, you can begin the process of obtaining a Credential Badge to unlock your ability to submit content for the cultural websites. Once you have obtained a Credential Badge, you can submit content for a cultural website.",
      },
      {
        question: "How much does it cost to join?",
        answer:
          "Join for free or choose a plan with additional and specialized features that unlock access to cultural websites. Read the details of each plan to find the one that meets your needs.",
      },
      {
        question: "How do I join the Irani.World cultural websites?",
        answer:
          "There are two ways to become part of the Irani.World cultural websites. The first is join your regional Iranian business promotional platform website and become active on your blog. As views and interest in your blog and work grows, you can apply to receive a Credential Badge which will give you access to submit your works to the cultural websites via your Iranian business promotional platform website dashboard. The second method is to apply immediately after joining your regional Iranian business promotional platform at the appropriate level and submitting a sample work and credentials for review and approval. If your work meets stringent scholarly standards, your application will most likely be approved.",
      },
      {
        question: "Once I join a cultural website, what can I publish?",
        answer:
          "All works must be original, supported by research and citations, and be of cultural and historical value to the Iranian people",
      },
    ],
    collaborate: [
      {
        question: "How can I collaborate with Irani.World?",
        answer:
          "In addition to collaboration through our various platforms and websites, companies and individuals can become investors to further the goals of an existing or upcoming platforms or website.",
      },
    ],
    culturalWebsites: [
      {
        question: "What is the Irani.Bio website?",
        answer:
          "The Irani.Bio website chronicles important Iranian historical and cultural information",
      },
      {
        question: "How do I become a part of the Irani.Bio website? ",
        answer:
          "Several steps are required to join Irani.Bio. The first step is to join your regional Iranian business promotional platform website at the appropriate level and become active on your blog. As views and interest in your blog and work grows, you can apply to receive a Credential Badge which will give you access to submit your works to the cultural websites via your Iranian business promotional platform website dashboard. The second method is to apply immediately after joining your regional Iranian business promotional platform website at the appropriate level and submitting a sample work and credentials for review and approval. If your work meets scholarly standards, your application will most likely be approved.",
      },
      {
        question:
          "Once I have obtained my Credential Badge, what can I submit to the Irani.Bio website for publication? ",
        answer:
          "Members with a Credential Badge can submit research, essays, and biographies about Iranian culture and history. ",
      },
      {
        question: "What is the Irani.Photos? ",
        answer:
          "Irani.Photos is a website designed to publish photos by Iranian photographers.",
      },
      {
        question: "What type of photos can be published?",
        answer:
          "Photos by Iranian artists or of Iranian subjects and subject matter. Photos can be made available for users for free or for revenue.",
      },
      {
        question: "How do I become a part of the Irani.Photos website? ",
        answer:
          "The first step is to join your regional Iranian business promotional platform website at the appropriate level. Once you have joined a regional Iranian business promotional platform, you can apply to receive a Credential Badge which will give you access to submit your photos to Irani.Photos.  ",
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 1.75C5.89137 1.75 1.75 5.89137 1.75 11C1.75 16.1086 5.89137 20.25 11 20.25C16.1086 20.25 20.25 16.1086 20.25 11C20.25 5.89137 16.1086 1.75 11 1.75ZM0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11 6.75C10.3787 6.75 9.875 7.25368 9.875 7.875C9.875 8.28921 9.53921 8.625 9.125 8.625C8.71079 8.625 8.375 8.28921 8.375 7.875C8.375 6.42525 9.55025 5.25 11 5.25C12.4497 5.25 13.625 6.42525 13.625 7.875C13.625 8.83834 13.1056 9.67957 12.3353 10.1354C12.1385 10.2518 11.9761 10.3789 11.8703 10.5036C11.7675 10.6246 11.75 10.7036 11.75 10.75V12C11.75 12.4142 11.4142 12.75 11 12.75C10.5858 12.75 10.25 12.4142 10.25 12V10.75C10.25 10.2441 10.4715 9.83364 10.7266 9.53301C10.9786 9.23602 11.2929 9.0092 11.5715 8.84439C11.9044 8.64739 12.125 8.28655 12.125 7.875C12.125 7.25368 11.6213 6.75 11 6.75ZM11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16Z"
                      fill="black"
                    />
                  </svg>
                </span>
                asked questions
              </h1>
              <p className="text-white-shade-8 max-w-md lg:text-base text-xl my-9 lg:my-0">
                The Irani.World platform is a series of websites designed to
                elevate the businesses and cultural aspects of the worldwide
                Iranian community.
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
                    setFaqCategory("join");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Join
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("collaborate");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Collaborate
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("culturalWebsites");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Cultural Websites
                    </span>
                  </div>
                </Link>
              </div>

              <div className="flex py-4 text-sm">
                <Link
                  onClick={() => {
                    setFaqCategory("general");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6  text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      General
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("join");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Join
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("collaborate");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6  pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Collaborate
                    </span>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setFaqCategory("culturalWebsites");
                  }}
                  href={"#"}
                  className=""
                >
                  <div className="py-6 pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
                    <span className="flex items-center  justify-between font-opensans ">
                      Cultural Websites
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
              {faqCategory == "join" &&
                faqList.join.map((faq, id) => {
                  return (
                    <FAQItem
                      key={id}
                      title={faq.question}
                      content={faq.answer}
                    />
                  );
                })}
              {faqCategory == "collaborate" &&
                faqList.collaborate.map((faq, id) => {
                  return (
                    <FAQItem
                      key={id}
                      title={faq.question}
                      content={faq.answer}
                    />
                  );
                })}
              {faqCategory == "culturalWebsites" &&
                faqList.culturalWebsites.map((faq, id) => {
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

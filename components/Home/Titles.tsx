"use client";

import React, { useEffect, useState } from "react";

import Statistics from "./Statistics";

import Link from "next/link";
import Socials from "./Socials";
import Platforms from "./Platforms";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const Titles = () => {
  const [showMainData, setShowMainData] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowMainData(true);
    }, 1000);
  }, []);

  return (
    <>
      {/* Left => Titles, Statics */}

      <section className="w-full lg:w-1/3 pt-28 lg:pt-10">
        {!showMainData ? (
          <>
            <Skeleton
              duration={1}
              count={1}
              className="max-w-[100px] mb-14 mt-4"
            />
            <Skeleton duration={1} count={3} className="max-w-xs my-2" />
            <Skeleton duration={1} count={1} className="max-w-[150px] mt-8" />
            <Skeleton duration={1} count={1} className="max-w-[100px] mb-8" />
            <Skeleton
              duration={1}
              count={1}
              className="max-w-[180px] mt-8 mb-3"
            />
          </>
        ) : (
          <div>
            <span
              data-aos="zoom-in-right"
              className="hidden lg:inline-flex items-center py-2 px-6 rounded-full font-medium font-outfit text-black bg-white hover:text-white hover:bg-blue mb-0 dark:text-white dark:bg-[#1F2836] shadow-badge mt-10 hover:cursor-pointer lg:mt-0 transition-all duration-500"
            >
              🎉 Made for Persian People
              {/* <Image src="/images/gif/watermelon.gif" width={50} height={50} alt="Yalda"/>
              Happy 
              <span className="mx-1 text-[#fa1e1ee0]">Yalda</span>
               Night */}
            </span>

            <h1
              data-aos="zoom-in-right"
              data-aos-delay="200"
              className="text-4xl font-outfit font-semibold dark:text-white text-black mt-5"
            >
              Advance Iranian
              <span className="flex items-center">
                Business,
                <svg
                  className="ml-4 mt-4"
                  width="99"
                  height="30"
                  viewBox="0 0 99 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.43718 6.12351C4.11243 8.36657 2.6665 11.5144 2.6665 15C2.6665 21.8115 8.18832 27.3334 14.9998 27.3334C15.1699 27.3334 15.3391 27.3299 15.5074 27.3231C15.2335 26.1076 15.1963 24.4735 16.0318 22.8991C16.9012 21.2606 18.7015 20.5496 20.025 20.2243C20.7185 20.0539 21.3609 19.9698 21.828 19.9279C22.0627 19.9068 22.2562 19.8961 22.3934 19.8907C22.462 19.888 22.5168 19.8866 22.5559 19.8859L22.6024 19.8852L22.6137 19.8851C24.8437 19.8619 25.8484 19.1367 26.3816 18.4449C26.8371 17.8539 27.009 17.2628 27.1834 16.6633C27.2056 16.5871 27.2278 16.5107 27.2507 16.4341C27.3052 15.9636 27.3332 15.4851 27.3332 15C27.3332 11.6346 25.9852 8.58397 23.7997 6.35865C23.7881 6.40407 23.7762 6.44882 23.7641 6.49283C23.5471 7.28344 23.1965 8.09487 22.8156 8.67301C22.4744 9.19086 21.8125 9.71325 21.2632 10.1079C20.9016 10.3677 20.5252 10.5884 20.1838 10.7852C20.1425 10.809 20.1018 10.8324 20.0616 10.8555C19.7575 11.0304 19.484 11.1877 19.2207 11.3617C18.6449 11.7421 18.1994 12.1515 17.8996 12.7697C17.7946 12.9862 17.7914 13.1975 17.8534 13.4236C17.9528 13.7856 18.0206 14.1929 18.0217 14.6081C18.0239 15.4734 17.5831 16.1757 17.0167 16.6322C16.4569 17.0833 15.7253 17.3413 14.9889 17.3333C11.7152 17.2976 9.7024 14.6408 9.43692 11.686C9.33132 10.5106 8.81599 9.32163 8.16531 8.28248C7.56774 7.32815 6.89443 6.56129 6.43718 6.12351ZM7.99324 4.84884C8.54663 5.40618 9.24096 6.23177 9.86042 7.22107C10.6038 8.40823 11.2848 9.90348 11.4289 11.507C11.6302 13.7474 13.0464 15.312 15.0108 15.3334C15.2808 15.3364 15.5615 15.2363 15.7617 15.075C15.9552 14.919 16.0221 14.7545 16.0217 14.6132C16.0212 14.4059 15.9862 14.1767 15.9248 13.9531C15.7633 13.3648 15.7402 12.639 16.1001 11.897C16.6134 10.8386 17.3742 10.1845 18.1182 9.69297C18.4371 9.4823 18.7678 9.29226 19.0662 9.12076C19.1064 9.09764 19.1461 9.07486 19.185 9.05241C19.5254 8.85626 19.8241 8.67921 20.0962 8.48371C20.6709 8.07075 21.0345 7.7411 21.1455 7.57264C21.3888 7.20342 21.6624 6.5938 21.8355 5.96335C21.9726 5.46384 22.0107 5.0805 21.9978 4.84289C20.0096 3.47043 17.5986 2.66669 14.9998 2.66669C12.3974 2.66669 9.98314 3.47275 7.99324 4.84884ZM29.2388 16.6537C29.3011 16.1111 29.3332 15.5593 29.3332 15C29.3332 7.08394 22.9159 0.666687 14.9998 0.666687C7.08376 0.666687 0.666504 7.08394 0.666504 15C0.666504 22.9161 7.08376 29.3334 14.9998 29.3334C22.2803 29.3334 28.293 23.9052 29.2116 16.8752C29.236 16.7905 29.2571 16.7201 29.2759 16.6669L29.2388 16.6537ZM25.5394 21.4089C24.7452 21.6999 23.7881 21.873 22.6346 21.885L22.6241 21.8851V21.8851L22.6206 21.8851L22.5932 21.8855C22.5672 21.886 22.5264 21.887 22.4724 21.8891C22.3643 21.8934 22.2043 21.9021 22.0068 21.9199C21.6092 21.9555 21.0715 22.0266 20.5024 22.1665C19.3007 22.4619 18.2465 22.9923 17.7985 23.8366C17.1912 24.9809 17.2778 26.2261 17.5044 27.0789C20.903 26.3779 23.7907 24.2785 25.5394 21.4089Z"
                    fill="#520017"
                    className="dark:fill-primaty-tint-8"
                  />
                  <path
                    d="M45 18H96.5L87 8.5"
                    stroke="#520017"
                    className="dark:stroke-white"
                    stroke-width="2"
                  />
                </svg>
              </span>
              <span className="block text-primary dark:text-[#ff4b4b]">
                Expertise, and Art
              </span>
            </h1>

            <p
              data-aos="zoom-in-right"
              data-aos-delay="300
          "
              className="max-w-sm text-[20px] lg:text-lg text-white-shade-8 dark:text-[#ffffff] my-6 font-normal lg:font-light"
            >
              With history and heritage in mind to fuel an economic and cultural
              renaissance
            </p>
            <div className="flex gap-x-2">
              <Link
                className="dark:hidden text-white btn-flashing-animation inline-flex justify-center items-center font-opensans font-normal lg:font-medium rounded-2xl text-center text-xl lg:text-base p-3 w-64 lg:w-52 h-16 lg:h-12 hover:bg-[#333b44] transition-all"
                href="https://iraniusa.com"
                target="_blank"
              >
                Our Platform
              </Link>
              <Link
                className="inline-flex justify-center items-center font-opensans border border-bg-white-shade-3 bg-white-shade-3  font-medium rounded-2xl text-center p-3 w-12 h-16 lg:h-12 hover:bg-white hover:border hover:border-[#011223] transition-all duration-300"
                href="/"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.79981 1.14999C2.49605 1.14999 2.24981 0.903744 2.24981 0.599988C2.24981 0.296231 2.49605 0.0499878 2.79981 0.0499878H9.39981C9.70356 0.0499878 9.94981 0.296231 9.94981 0.599988V7.19999C9.94981 7.50375 9.70356 7.74999 9.39981 7.74999C9.09605 7.74999 8.84981 7.50375 8.84981 7.19999V1.92781L0.988713 9.7889C0.773925 10.0037 0.425684 10.0037 0.210896 9.7889C-0.00389241 9.57411 -0.00389241 9.22587 0.210896 9.01108L8.07199 1.14999H2.79981Z"
                    fill="#B3B3B3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}

        <Socials classes="hidden lg:flex" />
        <Statistics classes="hidden lg:flex" />
        <Platforms classes={"block lg:hidden"} />
      </section>
    </>
  );
};

export default Titles;

"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Socials from "./Socials";
import Image from "next/image";

interface StatisticsProps {
  classes: string;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  return (
    <>
      <div
        className={`${props.classes} flex-col lg:flex-row gap-x-4 gap-y-4 mt-10 lg:mt-16 items-center lg:items-start`}
      >
        <div className="flex flex-col items-center gap-y-2">
          {/* <video autoPlay muted loop className="w-28">
            <source src="/videos/hakhamanesh.gif" />
          </video> */}
          <Image
            src={"/videos/hakhamanesh.gif"}
            className="w-32"
            width={40}
            height={40}
            alt="irani world"
          />
          <Link
            className="group hover:bg-black transition-all duration-300 p-2 rounded-full border border-white-shade-4"
            href={"https://irani.bio"}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99992 1.83334C8.12659 1.83334 8.25325 1.88001 8.35325 1.98001L12.3999 6.02667C12.5933 6.22001 12.5933 6.54001 12.3999 6.73334C12.2066 6.92668 11.8866 6.92668 11.6933 6.73334L7.99992 3.04001L4.30659 6.73334C4.11325 6.92668 3.79325 6.92668 3.59992 6.73334C3.40659 6.54001 3.40659 6.22001 3.59992 6.02668L7.64659 1.98001C7.74659 1.88001 7.87325 1.83334 7.99992 1.83334Z"
                fill="black"
                className="group-hover:fill-white"
              />
              <path
                d="M8 1.94667C8.27333 1.94667 8.5 2.17334 8.5 2.44667L8.5 13.6667C8.5 13.94 8.27333 14.1667 8 14.1667C7.72667 14.1667 7.5 13.94 7.5 13.6667L7.5 2.44667C7.5 2.17334 7.72667 1.94667 8 1.94667Z"
                fill="black"
                className="group-hover:fill-white"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-y-4 lg:order-2 lg:mt-7">
          <div className="flex flex-col justify-center lg:items-start items-center gap-y-6 order-2 lg:order-1">
            <h4 className="text-black dark:text-white font-outfit text-2xl text-center lg:text-left font-medium">
              <span className="text-3xl font-semibold">
                <span className="mr-1">6</span>
              </span>
              Platforms
            </h4>
            <span className="font-opensans font-medium -mt-6 text-white-shade-8 dark:text-white">
            Cultural Platform 
            </span>
          </div>
          <svg
            className="block lg:hidden mb-10 mt-3"
            width="279"
            height="32"
            viewBox="0 0 279 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="164" y1="14.5" x2="279" y2="14.5" stroke="#E6E6E6" />
            <line
              x1="4.37114e-08"
              y1="14.5"
              x2="112"
              y2="14.5"
              stroke="#E6E6E6"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M144.034 12.8504C145.169 11.4015 145.961 9.71371 146.351 7.9141L149 8.48873C148.524 10.6894 147.555 12.7532 146.167 14.5249C144.779 16.2967 143.007 17.7303 140.986 18.7177C139.718 19.3368 138.374 19.7705 136.992 20.0092L138.975 27.4181C139.212 28.3042 140.122 28.83 141.007 28.5925C141.892 28.3551 142.418 27.4444 142.18 26.5583L141.541 24.17C141.54 24.1704 141.539 24.1706 141.538 24.1709L141.46 23.8675L140.995 22.1296L141.015 22.1243L140.866 21.542C142.676 21.0784 144.355 20.2037 145.773 18.9856L147.538 21.0449C146.497 21.9395 145.34 22.6827 144.103 23.2564L144.799 25.856C145.423 28.1896 144.04 30.5883 141.709 31.2136C139.378 31.839 136.982 30.454 136.357 28.1204L134.244 20.2243C132.081 20.1925 129.95 19.6887 128 18.747L129.178 16.303C130.834 17.103 132.651 17.5166 134.49 17.5124C136.33 17.5083 138.144 17.0865 139.797 16.2791C141.45 15.4716 142.899 14.2993 144.034 12.8504Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M131.382 7.52415L139.954 5.19931L140.707 8.04404C141.31 10.3221 139.975 12.6637 137.724 13.2741L133.227 14.4937L131.382 7.52415ZM134.411 9.29425L134.976 11.4278L137.505 10.7418C138.204 10.5523 138.618 9.82563 138.431 9.11864L138.205 8.26523L134.411 9.29425Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M130.968 5.95969C130.531 4.31004 131.499 2.61441 133.129 2.17239L141.139 0L141.867 2.75009C142.491 5.10674 141.109 7.52907 138.781 8.16054L132.035 9.98991L130.968 5.95969ZM133.207 4.74284L133.784 6.924L138.421 5.66629C139.275 5.43476 139.782 4.54658 139.553 3.68247L139.39 3.06592L133.207 4.74284Z"
              fill="black"
            />
          </svg>
          <div className="flex gap-x-10 order-1 lg:order-2 text-center lg:text-left">
            <div className="">
              <h4 className="text-black dark:text-white  font-outfit text-5xl lg:text-2xl font-semibold">
                8.5M + 85M
              </h4>
              <span className="font-opensans text-white-shade-8 dark:text-white">
              All around the world
              </span>
            </div>
          </div>
        </div>
        <Socials classes="flex lg:hidden" />
      </div>
    </>
  );
};

export default Statistics;

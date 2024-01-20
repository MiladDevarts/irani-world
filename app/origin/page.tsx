"use client";

import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import OverlayMenu from "@/components/Overlay";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <div className="container my-10 pt-32 lg:pt-0"></div>
      <div className="hidden lg:block container">
        <Swiper
          className=" w-full text-black h-[200px] lg:h-[75vh]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/1.jpg')` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/2.jpg')` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/3.jpg')` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/4.jpg')` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/5.jpg')` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/6.jpg')` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/7.jpg')` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-[200px] lg:h-[300px] bg-black  bg-cover bg-center"
            style={{ backgroundImage: `url('/images/brandbook/8.jpg')` }}
          ></SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:hidden container flex flex-col gap-y-6">
        <img src="/images/brandbook/1.jpg" className="rounded-2xl" alt="" />
        <img src="/images/brandbook/2.jpg" className="rounded-2xl" alt="" />
        <img src="/images/brandbook/3.jpg" className="rounded-2xl" alt="" />
        <img src="/images/brandbook/4.jpg" className="rounded-2xl" alt="" />
        <img src="/images/brandbook/5.jpg" className="rounded-2xl" alt="" />
        <img src="/images/brandbook/6.jpg" className="rounded-2xl" alt="" />
        <img src="/images/brandbook/7.jpg" className="rounded-2xl" alt="" />
        <img src="/images/brandbook/8.jpg" className="rounded-2xl" alt="" />
      </div>
    </>
  );
};

export default page;

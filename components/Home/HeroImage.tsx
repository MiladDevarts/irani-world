"use client";

import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const HeroImage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 10,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCurrentSlide(2);
    }, 10000);
  }, [currentSlide]);

  return (
    <>
      {/* Cernter => Image + Logo - LG */}
      {currentSlide == 1 && (
        <section
          data-aos="fade-up"
          className="relative top-0 left-0 overflow-hidden hidden lg:flex  justify-center py-10 w-full lg:w-1/3 h-[400px] lg:h-[92vh] my-20 lg:my-0 bg-center bg-cover bg-no-repeat rounded-3xl lg:rounded-none bg-animate"
        >
          <div
            data-aos="zoom-in"
            data-aso-duration="2000"
            className="slider-bg absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('/images/home/background-1.jpg')` }}
          ></div>
          <div className="flex items-center gap-x-3 w-[80%] bottom-8 absolute">
            <span className="text-2xl font-semibold w-1/12">01</span>
            <div className="relative w-11/12 h-1 bg-white-shade-10">
              <div className="w-1/2 h-full bg-white"></div>
            </div>
          </div>
        </section>
      )}
      {currentSlide == 2 && (
        <section className="relative top-0 left-0 overflow-hidden hidden lg:flex justify-center py-10 w-full lg:w-1/3 h-[600px] lg:h-[92vh] my-20 lg:my-0 bg-center bg-cover bg-no-repeat rounded-3xl lg:rounded-none bg-animate">
          <div
            data-aos="zoom-in"
            data-aso-duration="2000"
            data-aso-delay="10000"
            className="slider-bg absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('/images/home/background-2.jpg')` }}
          ></div>
          <div className="flex items-center gap-x-3 w-[80%] bottom-8 absolute">
            <span className="text-2xl font-semibold w-1/12">02</span>
            <div className="relative w-11/12 h-1 bg-white-shade-10">
              <div className="absolute right-0 w-1/2 h-full bg-white"></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroImage;

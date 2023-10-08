"use client"

import React, { useEffect } from "react";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";

const Modal = () => {

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

  return (
    <main className="flex justify-center z-[10001] fixed top-0 left-0 w-full h-screen bg-black/80">
      <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-1/5 h-96 mt-60 bg-white rounded-3xl">
        <video autoPlay muted loop className="w-56">
          <source src="/videos/loading.mov" />
        </video>
        <h2 className="text-xl font-outfit font-semibold text-black text-center">
          Your message has been sent successfully!
        </h2>
        <Link
          className="mt-6 dark:hidden btn-flashing-animation inline-flex justify-center items-center font-opensans font-medium rounded-2xl bg-[#011223]  text-center p-3 w-40 h-12 hover:bg-[#333b44] transition-all"
          href="/"
        >
          Done
        </Link>
      </div>
    </main>
  );
};

export default Modal;

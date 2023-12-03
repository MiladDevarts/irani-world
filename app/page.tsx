"use client";

import { useEffect } from "react";
import Script from "next/script";

import Aos from "aos";
import "aos/dist/aos.css";

import Titles from "@/components/Home/Titles";
import HeroImage from "@/components/Home/HeroImage";
import Platforms from "@/components/Home/Platforms";
import Statistics from "@/components/Home/Statistics";
import OverlayMenu from "@/components/Overlay";

export default function Home() {
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
    <>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="beforeInteractive"
      />
      <OverlayMenu />

      <div
        className="w-full bg-cover"
        style={{ backgroundImage: `url('/images/general/bg.png')` }}
      >
        <main className="w-full container flex flex-col lg:flex-row overflow-hidden">
          <Titles />
          <HeroImage />
          <Platforms classes={"hidden lg:block"} />
          <Statistics classes="flex lg:hidden" />
        </main>
      </div>
    </>
  );
}

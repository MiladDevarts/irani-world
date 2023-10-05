"use client";

import { useEffect } from "react";

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
      <OverlayMenu />

      <main className="flex flex-col lg:flex-row container">
        <Titles />
        <HeroImage />
        <Platforms />
        <Statistics classes="flex lg:hidden" />
      </main>
    </>
  );
}

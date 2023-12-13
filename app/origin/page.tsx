import React from "react";

import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irani World | Origin",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="flex flex-col lg:flex-row container">
        <div className="w-full flex flex-col mt-10">
       <h1>Under Construction...</h1>
        </div>
      </main>
    </>
  );
};

export default page;

import React from "react";

import ConatctOptions from "@/components/Contact/ConatctOptions";
import ContactForm from "@/components/Contact/ContactForm";
import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irani World | Contact us",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="flex flex-col lg:flex-row container">
        <div className="w-full flex flex-col lg:flex-row gap-x-16 pt-32 lg:pt-10">
          <div className="w-full lg:w-1/2 h-full">
            <ConatctOptions />
          </div>
          <div className="w-full lg:w-1/2 h-full">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

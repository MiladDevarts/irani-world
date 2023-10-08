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
      <main className="container">
        <div className="w-full flex flex-col gap-y-4 justify-center items-center pt-32 lg:pt-10">
            <ConatctOptions />
            <ContactForm />
        </div>
      </main>
    </>
  );
};

export default page;

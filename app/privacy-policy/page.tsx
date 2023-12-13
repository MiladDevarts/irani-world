import React from "react";

import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Irani World | Privacy Policy",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="flex flex-col lg:flex-row container">
        <div className="w-full flex flex-col mt-10">
          <h1 className="text-black text-3xl font-semibold font-outfit mb-20 lg:mt-0 mt-28">
            Terms & privacy policy
          </h1>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            White Snail America LLC 
            <span className="text-black mx-2 font-semibold">(“WSA”)</span>
             does not collect any “personal data”
            from any user that visits our website, 
            <Link href={"https://wsa.team"} className="text-black mx-2 font-semibold" target="_blank">
            www.wsa.team
            </Link>, and does not
            track your usage in any way.
          </p>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            WSA does not partner with any third party to collect user “personal
            data” or track user usage in any way.
          </p>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            We only use cookies that are essenGal to run this website.
          </p>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            Volunteered informaGon such as an email address used for
            communicaGon will be stored only for communicaGon purposes. Email
            informaGon is not required.
          </p>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            We may request your email address to communicate with you.
          </p>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            A request to remove your email from our possession will be responded
            to within 30 days.
          </p>
        </div>
      </main>
    </>
  );
};

export default page;

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
        <div className="max-w-3xl flex flex-col mt-10">
          <h1 className="text-black text-3xl font-semibold font-outfit mb-20 lg:mt-0 mt-28">
            Terms & privacy policy
          </h1>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            Irani.World and its owner White Phoenix Sweden{" "}
            <Link
              href={"https://wps.community"}
              className="text-black mx-2 font-semibold"
              target="_blank"
            >
              (“WPS”)
            </Link>{" "}
            does not collect any “personal data” from any user that visits our
            website, Irani.World, and does not track your usage in any way.
          </p>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            We only use cookies that are essential to run this website.
          </p>
          <p className="text-white-shade-11 mt-3 mb-2 text-lg">
            Volunteered information such as an email address used for
            communication will be stored only for communication purposes. Email
            information is not required.
          </p>
        </div>
      </main>
    </>
  );
};

export default page;

import Link from "next/link";
import React from "react";
import Countries from "./Countries";
import ContactMethods from "./ContactMethods";

const ConatctOptions = () => {
  return (
    <div className="w-full">
      <h1 className="text-black text-3xl font-semibold font-outfit mb-6">
        Contact us
      </h1>
      <p className="text-white-shade-9 max-w-md text-xl font-normal">
        Ask about our platform, pricing, or something else. We will respond to
        your inquiry as soon as possible.
      </p>
      <ContactMethods classes={"hidden lg:flex"} />
      <Countries classes="hidden lg:grid" />
    </div>
  );
};

export default ConatctOptions;

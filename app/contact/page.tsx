
import React from "react";
import Head from "next/head";

import ConatctOptions from "@/components/Contact/ConatctOptions";
import ContactForm from "@/components/Contact/ContactForm";

const page = () => {
  return (
    <>
    <Head>
      <title>Irani World | Contact</title>
    </Head>
      <main className="flex flex-col lg:flex-row container">
        <div className="w-full flex gap-x-4 pt-20 lg:pt-10">
          <div className="w-1/2 h-full">
            <ConatctOptions />
          </div>
          <div className="w-1/2 h-full">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

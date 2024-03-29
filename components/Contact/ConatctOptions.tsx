import React from "react";

const ConatctOptions = () => {
  return (
    <div className="flex flex-col items-center lg:mb-0 mb-14">
     <h1 className="w-full flex items-center gap-x-6 text-black text-4xl lg:text-3xl font-semibold font-outfit mb-6">
        <svg
                className="hidden lg:block"
          width="319"
          height="1"
          viewBox="0 0 319 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-4.37114e-08"
            y1="0.499878"
            x2="319"
            y2="0.49985"
            stroke="#E6E6E6"
          />
        </svg>
        Contact us
        <svg
        className="hidden lg:block"
          width="319"
          height="1"
          viewBox="0 0 319 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-4.37114e-08"
            y1="0.499878"
            x2="319"
            y2="0.49985"
            stroke="#E6E6E6"
          />
        </svg>
      </h1>
      <p className="block lg:hidden text-white-shade-9 max-w-md text-lg font-normal mb-1">
        Ask about our platform, pricing, or something else. We will respond to
        your inquiry as soon as possible.
      </p>
    </div>
  );
};
 
export default ConatctOptions;

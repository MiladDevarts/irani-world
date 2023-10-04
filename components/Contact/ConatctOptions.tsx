import Link from "next/link";
import React from "react";
import Countries from "./Countries";

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
      <div className="w-full flex flex-col gap-y-6 mt-6 border border-white-shade-4 rounded-3xl p-8">
        <Link className="flex items-center gap-x-4" href={"#"}>
          <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3083 16.2748C17.3083 16.5748 17.2416 16.8832 17.1 17.1832C16.9583 17.4832 16.775 17.7665 16.5333 18.0332C16.125 18.4832 15.675 18.8082 15.1666 19.0165C14.6666 19.2248 14.125 19.3332 13.5416 19.3332C12.6916 19.3332 11.7833 19.1332 10.825 18.7248C9.86663 18.3165 8.90829 17.7665 7.95829 17.0748C6.99996 16.3748 6.09163 15.5998 5.22496 14.7415C4.36663 13.8748 3.59163 12.9665 2.89996 12.0165C2.21663 11.0665 1.66663 10.1165 1.26663 9.17484C0.866626 8.22484 0.666626 7.3165 0.666626 6.44984C0.666626 5.88317 0.766626 5.3415 0.966626 4.8415C1.16663 4.33317 1.48329 3.8665 1.92496 3.44984C2.45829 2.92484 3.04163 2.6665 3.65829 2.6665C3.89163 2.6665 4.12496 2.7165 4.33329 2.8165C4.54996 2.9165 4.74163 3.0665 4.89163 3.28317L6.82496 6.00817C6.97496 6.2165 7.08329 6.40817 7.15829 6.5915C7.23329 6.7665 7.27496 6.9415 7.27496 7.09984C7.27496 7.29984 7.21663 7.49984 7.09996 7.6915C6.99163 7.88317 6.83329 8.08317 6.63329 8.28317L5.99996 8.9415C5.90829 9.03317 5.86663 9.1415 5.86663 9.27484C5.86663 9.3415 5.87496 9.39984 5.89163 9.4665C5.91663 9.53317 5.94163 9.58317 5.95829 9.63317C6.10829 9.90817 6.36663 10.2665 6.73329 10.6998C7.10829 11.1332 7.50829 11.5748 7.94163 12.0165C8.39163 12.4582 8.82496 12.8665 9.26663 13.2415C9.69996 13.6082 10.0583 13.8582 10.3416 14.0082C10.3833 14.0248 10.4333 14.0498 10.4916 14.0748C10.5583 14.0998 10.625 14.1082 10.7 14.1082C10.8416 14.1082 10.95 14.0582 11.0416 13.9665L11.675 13.3415C11.8833 13.1332 12.0833 12.9748 12.275 12.8748C12.4666 12.7582 12.6583 12.6998 12.8666 12.6998C13.025 12.6998 13.1916 12.7332 13.375 12.8082C13.5583 12.8832 13.75 12.9915 13.9583 13.1332L16.7166 15.0915C16.9333 15.2415 17.0833 15.4165 17.175 15.6248C17.2583 15.8332 17.3083 16.0415 17.3083 16.2748Z"
                stroke="#011223"
                strokeWidth="1.2"
                strokeMiterlimit="10"
              />
              <path
                d="M14.4167 8.49967C14.4167 7.99967 14.025 7.23301 13.4417 6.60801C12.9083 6.03301 12.2 5.58301 11.5 5.58301"
                stroke="#011223"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3333 8.49984C17.3333 5.27484 14.725 2.6665 11.5 2.6665"
                stroke="#011223"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#8C8C8C]">Tel</span>
            <span className="text-black text-xl">(+49) 71112196760</span>
          </div>
        </Link>
        <Link className="flex items-center gap-x-4" href={"#"}>
          <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1666 17.0832H5.83329C3.33329 17.0832 1.66663 15.8332 1.66663 12.9165V7.08317C1.66663 4.1665 3.33329 2.9165 5.83329 2.9165H14.1666C16.6666 2.9165 18.3333 4.1665 18.3333 7.08317V12.9165C18.3333 15.8332 16.6666 17.0832 14.1666 17.0832Z"
                stroke="#011223"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.1667 7.5L11.5584 9.58333C10.7 10.2667 9.2917 10.2667 8.43337 9.58333L5.83337 7.5"
                stroke="#011223"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#8C8C8C]">Contact us at</span>
            <span className="text-black text-xl">info@example.org</span>
          </div>
        </Link>
        <Link className="flex items-center gap-x-4" href={"#"}>
          <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9996 12.3108C12.5792 12.3108 13.8596 11.0304 13.8596 9.45084C13.8596 7.8713 12.5792 6.59084 10.9996 6.59084C9.42011 6.59084 8.13965 7.8713 8.13965 9.45084C8.13965 11.0304 9.42011 12.3108 10.9996 12.3108Z"
                stroke="#011223"
                strokeWidth="1.5"
              />
              <path
                d="M3.31823 7.7825C5.12406 -0.155836 16.8849 -0.146669 18.6816 7.79166C19.7357 12.4483 16.8391 16.39 14.2999 18.8283C12.4574 20.6067 9.5424 20.6067 7.69073 18.8283C5.16073 16.39 2.26406 12.4392 3.31823 7.7825Z"
                stroke="#011223"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#8C8C8C]">Address</span>
            <span className="text-black text-xl">
              Birkenweg.20 24107 Kiel
              <br />- Christophstraße 26, 70180 Stuttgart
            </span>
          </div>
        </Link>
      </div>
      <Countries />
    </div>
  );
};

export default ConatctOptions;

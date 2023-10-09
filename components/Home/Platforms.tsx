import React, { useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import IraniWorldBox from "./IraniWorldBox";
import { IraniCanada, IraniUAE, IraniUSA } from "../Logo/Platforms";

import Terms from "./Terms";

const Platforms = () => {
  const [canadaBox, setCanadaBox] = useState(false);
  const [usaBox, setUSABox] = useState(true);
  const [uaeBox, setUAEBox] = useState(false);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  // const handleUsaEnter = () => {
  //   setCanadaBox(true);
  // };

  // const handleUsaOut = () => {
  //   setCanadaBox(false);
  // };

  // const handleCanadaEnter = () => {
  //   setCanadaBox(false);
  //   setUSABox(true);
  // };

  // const handleCanadaOut = () => {
  //   setUSABox(false);
  //   setCanadaBox(true);
  // };

  // const handleUaeEnter = () => {
  //   setCanadaBox(false);
  //   setUAEBox(true);
  // };

  // const handleUaeOut = () => {
  //   setUAEBox(false);
  //   setCanadaBox(true);
  // };

  return (
    <>
      {/* Right => Services in Countries */}
      <section className="w-full lg:w-1/3 lg:h-full pt-10 pl-0 lg:pl-20 text-black">
        <IraniWorldBox />
        {/* 2. Countries Platform List */}
        <div
          ref={ref}
          {...events}
          className="grid auto-cols-[100px] grid-flow-col gap-x-3 overflow-x-auto p-4 -z[200] w-full h-36 rounded-3xl bg-white-shade-2 dark:bg-[#273140]"
        >
          <div className="relative flex items-center col-span-1 justify-center w-full h-full bg-white dark:bg-[#191f2b] hover:box-shadow rounded-2xl hover:cursor-pointer hover:shadow-soft-shadow transition-all duration-300">
            <svg
              className="absolute top-0 left-0 m-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="animate-pulse"
                cx="12"
                cy="12"
                r="11"
                fill="#43D100"
                fill-opacity="0.34"
                stroke="white"
                stroke-width="2"
              />
              <circle
                className="animate-pulse"
                cx="12"
                cy="12"
                r="6"
                fill="#43D100"
              />
            </svg>
            <IraniUSA />
          </div>
          <div className="relative flex items-center col-span-1 justify-center w-full h-full bg-white rounded-2xl hover:cursor-pointer hover:shadow-soft-shadow dark:bg-[#191f2b] transition-all duration-300">
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#E1CB00"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <IraniCanada />
          </div>
          <div className="relative flex items-center col-span-1 justify-center w-full h-full bg-white dark:bg-[#191f2b] rounded-2xl">
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#E1CB00"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <IraniUAE />
          </div>
          <div className="relative flex items-center col-span-1 justify-center w-full h-full bg-white dark:bg-[#191f2b] rounded-2xl">
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#E1CB00"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <IraniUAE />
          </div>
          <div className="relative flex items-center col-span-1 justify-center w-full h-full bg-white dark:bg-[#191f2b] rounded-2xl">
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#E1CB00"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <IraniUAE />
          </div>
          <div className="relative flex items-center col-span-1 justify-center w-full h-full bg-white dark:bg-[#191f2b] rounded-2xl">
            <svg
              className=" absolute top-0 left-0 m-2"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#E1CB00"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <IraniUAE />
          </div>
        </div>

        {usaBox && (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="hidden lg:block  z-[1000] my-5 w-full h-auto rounded-3xl bg-white dark:bg-[#212936] shadow-badge p-4"
          >
            <div className="lablel-flashing-animation flex justify-center items-center w-full h-16 bg-blue text-white text-center rounded-2xl">
              <svg
                width="83"
                height="25"
                viewBox="0 0 73 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1463 8.87991C13.0063 7.79548 13.6063 6.53228 13.9014 5.18535L15.9082 5.61544C15.5474 7.26252 14.8136 8.80722 13.7621 10.1333C12.7105 11.4594 11.3686 12.5323 9.83725 13.2714C8.87718 13.7348 7.85833 14.0593 6.81188 14.2379L8.31413 19.7832C8.49378 20.4463 9.18296 20.8399 9.85344 20.6622C10.5239 20.4845 10.9218 19.8028 10.7422 19.1397L10.2579 17.3521C10.257 17.3524 10.2562 17.3526 10.2553 17.3528L10.1966 17.1257L9.84419 15.825L9.85911 15.821L9.74638 15.3852C11.1176 15.0383 12.3895 14.3835 13.4636 13.4719L14.8009 15.0131C14.012 15.6827 13.1358 16.2389 12.1985 16.6684L12.7256 18.614C13.1988 20.3606 12.1508 22.1559 10.3849 22.6239C8.619 23.0919 6.80388 22.0554 6.33071 20.3088L4.72969 14.399C3.09135 14.3751 1.47716 13.9981 0 13.2933L0.892178 11.464C2.14718 12.0628 3.52315 12.3723 4.91655 12.3692C6.30995 12.3661 7.6845 12.0505 8.93676 11.4461C10.189 10.8418 11.2864 9.96434 12.1463 8.87991Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.08175 2.6668L4.81962 4.44549L3.12909 5.08235L4.74805 5.90249L4.83345 7.70998L6.08887 6.42542L7.81837 6.91017L6.98859 5.30214L7.98058 3.7824L6.1981 4.07613L5.08175 2.6668ZM3.24213 3.17395L3.64875 0.41479L5.19676 0L6.92848 2.18619L9.65396 1.73707L10.527 3.07566L9.00649 5.40505L10.2897 7.89169L9.27824 9.13264L6.6142 8.38597L4.6804 10.3646L3.18401 9.79564L3.05195 7.00056L0.570485 5.74349L0.657237 4.14774L3.24213 3.17395Z"
                  fill="white"
                />
                <path
                  d="M22.3634 10.5959V2.70615H24.0049V10.5959H22.3634ZM25.3858 10.5959V2.70615H28.6264C30.2573 2.70615 31.4222 3.57455 31.4222 5.22663C31.4222 6.30684 30.8927 7.06933 30.0561 7.45058L31.8564 10.5959H30.0137L28.4146 7.73652H27.0273V10.5959H25.3858ZM27.0273 6.30684H28.637C29.3254 6.30684 29.7808 5.87264 29.7808 5.22663C29.7808 4.57004 29.3254 4.13584 28.637 4.13584H27.0273V6.30684ZM37.144 2.70615L39.834 10.5959H38.0972L37.5676 8.98617H34.5494L34.0199 10.5959H32.2831L34.973 2.70615H37.144ZM35.0154 7.55649H37.1017L36.0638 4.35823L35.0154 7.55649ZM45.4431 2.70615H47.0846V10.5959H45.8138L42.2661 5.81969V10.5959H40.6246V2.70615H41.8848L45.4431 7.45058V2.70615ZM48.4663 10.5959V2.70615H50.1078V10.5959H48.4663ZM27.182 12.7062H28.8235V17.5988C28.8235 19.3674 27.5315 20.723 25.5935 20.723C23.6555 20.723 22.3634 19.3674 22.3634 17.5988V12.7062H24.0049V17.5988C24.0049 18.5837 24.6403 19.2403 25.5935 19.2403C26.5466 19.2403 27.182 18.5837 27.182 17.5988V12.7062ZM32.8527 20.723C31.2854 20.723 29.951 19.844 29.5168 18.5096L30.8936 17.8636C31.2748 18.785 32.0691 19.2933 32.8527 19.2933C33.6576 19.2933 34.1342 18.9226 34.1342 18.4567C34.1342 18.0436 33.8482 17.8212 33.3823 17.673L31.7725 17.1646C30.4276 16.741 29.7922 15.9785 29.7922 14.9301C29.7922 13.5216 30.9253 12.5791 32.6304 12.5791C34.1448 12.5791 35.3309 13.4157 35.7545 14.5806L34.3777 15.2266C34.113 14.4747 33.4776 14.0088 32.6304 14.0088C31.9102 14.0088 31.4337 14.3794 31.4337 14.8666C31.4337 15.2372 31.709 15.5126 32.2173 15.6714L33.7847 16.1586C35.1085 16.5716 35.7757 17.2811 35.7757 18.3613C35.7757 19.7804 34.6107 20.723 32.8527 20.723ZM40.8006 12.7062L43.4905 20.5959H41.7537L41.2242 18.9862H38.206L37.6764 20.5959H35.9396L38.6296 12.7062H40.8006ZM38.6719 17.5565H40.7582L39.7204 14.3582L38.6719 17.5565ZM44.0164 20.5959V19.0073H45.6049V20.5959H44.0164ZM50.4369 20.723C48.1706 20.723 46.455 18.9862 46.455 16.6457C46.455 14.2947 48.1494 12.5791 50.4369 12.5791C52.142 12.5791 53.4022 13.5216 53.8152 14.6865L52.3644 15.3855C52.089 14.623 51.3901 14.0617 50.4369 14.0617C49.039 14.0617 48.0965 15.1101 48.0965 16.6457C48.0965 18.1919 49.039 19.2403 50.4369 19.2403C51.3901 19.2403 52.089 18.6791 52.3644 17.9166L53.8152 18.6155C53.4022 19.7804 52.142 20.723 50.4369 20.723ZM58.4725 20.723C56.0896 20.723 54.2893 18.965 54.2893 16.6457C54.2893 14.3265 56.0791 12.5791 58.4725 12.5791C60.8658 12.5791 62.6556 14.3265 62.6556 16.6457C62.6556 18.965 60.8553 20.723 58.4725 20.723ZM58.4725 19.2403C59.9127 19.2403 61.0141 18.1707 61.0141 16.6457C61.0141 15.1207 59.9127 14.0617 58.4725 14.0617C57.0322 14.0617 55.9308 15.1207 55.9308 16.6457C55.9308 18.1707 57.0322 19.2403 58.4725 19.2403ZM70.1254 12.7062H71.714V20.5959H70.0725V15.5126L67.6897 18.5837H67.4779L65.0951 15.3961V20.5959H63.4536V12.7062H65.0421L67.5732 16.0421L70.1254 12.7062Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex w-full mt-3">
              <div className="w-5/12 h-48 bg-white-shade-2 dark:bg-[#273140]/0 rounded-2xl p-2">
                <div className="flex flex-col h-1/2 justify-center items-center">
                  <span className="font-opensans text-white-shade-10 dark:text-white text-sm">
                    Active Users
                  </span>
                  <h5 className="font-outfit text-lg font-bold text-black dark:text-white">
                    200K users
                  </h5>
                </div>
                <div className="flex flex-col h-1/2 justify-center items-center rounded-3xl bg-white p-1 dark:bg-[#23374a] dark:text-white">
                  <h5 className="font-outfit text-lg font-bold text-black dark:text-white">
                    USA
                    <br />
                    (GMT-4)
                  </h5>
                </div>
              </div>
              <div
                className="dark:hidden w-7/12 h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/maps/ca-map.png')` }}
              ></div>

              <div
                className="hidden dark:block w-7/12 h-48 bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: `url('/images/maps/ca-map-dark.png')`,
                }}
              ></div>
            </div>
          </div>
        )}

        <Terms />
      </section>
    </>
  );
};

export default Platforms;

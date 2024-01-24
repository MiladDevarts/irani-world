import Link from "next/link";
import React from "react";

const AsiaMap = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="block  z-[1000] my-5 w-full h-auto rounded-3xl bg-white dark:bg-[#212936] shadow-badge p-4"
    >
      <div
        className="flex justify-center items-center w-full h-14 bg-center bg-cover text-white text-center rounded-2xl"
        style={{ backgroundImage: `url('/images/banner/asia.png')` }}
      >
        <svg
          width="85"
          height="26"
          viewBox="0 0 85 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9364 8.75125C14.9231 7.507 15.6116 6.05763 15.9502 4.51219L18.2527 5.00567C17.8387 6.89549 16.9968 8.66784 15.7903 10.1894C14.5837 11.7109 13.044 12.9419 11.287 13.7899C10.1855 14.3216 9.01647 14.694 7.81579 14.8989L9.53944 21.2614C9.74557 22.0223 10.5363 22.4738 11.3056 22.27C12.0749 22.0661 12.5314 21.284 12.3253 20.5231L11.7697 18.4721C11.7687 18.4723 11.7677 18.4726 11.7667 18.4729L11.6993 18.2123L11.295 16.7199L11.3121 16.7153L11.1828 16.2153C12.756 15.8172 14.2155 15.066 15.4478 14.0199L16.9822 15.7883C16.077 16.5566 15.0717 17.1948 13.9963 17.6875L14.601 19.92C15.1439 21.924 13.9415 23.9839 11.9154 24.5208C9.88924 25.0578 7.80661 23.8685 7.26371 21.8645L5.42674 15.0837C3.54695 15.0563 1.69486 14.6237 0 13.815L1.02366 11.7162C2.46363 12.4033 4.04238 12.7584 5.64114 12.7548C7.23989 12.7513 8.81701 12.3891 10.2538 11.6957C11.6907 11.0022 12.9498 9.9955 13.9364 8.75125Z"
            fill="white"
          />
          <path
            d="M9.38005 0C9.67153 1.08411 9.5204 2.23961 8.95992 3.21229C8.39945 4.18498 7.47553 4.89518 6.39142 5.18665C5.30731 5.47813 4.15181 5.327 3.17912 4.76653C2.20644 4.20605 1.49624 3.28213 1.20476 2.19802L3.67205 1.53466C3.78759 1.96441 4.06911 2.33065 4.45469 2.55283C4.84027 2.77501 5.29831 2.83491 5.72806 2.71937C6.15781 2.60383 6.52405 2.3223 6.74623 1.93672C6.96841 1.55115 7.02831 1.0931 6.91277 0.663356L9.38005 0Z"
            fill="white"
          />
          <path
            d="M10.124 7.10693C10.1118 7.12901 10.0994 7.15101 10.0868 7.17291C9.52633 8.1456 8.60241 8.85579 7.5183 9.14727C6.43419 9.43874 5.27869 9.28762 4.30601 8.72714C3.33332 8.16666 2.62312 7.24275 2.33165 6.15863L4.79893 5.49528C4.91447 5.92502 5.196 6.29127 5.58158 6.51345C5.96715 6.73562 6.4252 6.79553 6.85494 6.67999C7.28469 6.56445 7.65094 6.28292 7.87311 5.89734C8.09529 5.51176 8.1552 5.05372 8.03965 4.62397L9.51138 4.22828L10.4939 3.89439C10.596 4.19475 10.7811 4.46002 11.0279 4.65944C11.2746 4.85886 11.5728 4.98426 11.8879 5.02108L11.5913 7.55871C11.0764 7.49854 10.5794 7.34462 10.124 7.10693Z"
            fill="white"
          />
          <path
            d="M24.8725 11.6V2.64658H26.7353V11.6H24.8725ZM27.9418 11.6V2.64658H31.6193C33.4701 2.64658 34.792 3.63206 34.792 5.50688C34.792 6.73272 34.1911 7.59802 33.2417 8.03067L35.2848 11.6H33.1936L31.3789 8.35516H29.8046V11.6H27.9418ZM29.8046 6.73272H31.6313C32.4125 6.73272 32.9292 6.23998 32.9292 5.50688C32.9292 4.76176 32.4125 4.26902 31.6313 4.26902H29.8046V6.73272ZM40.9247 2.64658L43.9773 11.6H42.0064L41.4055 9.77329H37.9803L37.3794 11.6H35.4084L38.461 2.64658H40.9247ZM38.5091 8.15085H40.8767L39.6989 4.5214L38.5091 8.15085ZM49.9822 2.64658H51.845V11.6H50.4028L46.3768 6.17989V11.6H44.514V2.64658H45.9441L49.9822 8.03067V2.64658ZM53.0525 11.6V2.64658H54.9153V11.6H53.0525ZM29.7277 13.6466L32.7803 22.6H30.8094L30.2085 20.7733H26.7833L26.1824 22.6H24.2115L27.264 13.6466H29.7277ZM27.3121 19.1509H29.6797L28.5019 15.5214L27.3121 19.1509ZM36.6821 22.7443C34.9034 22.7443 33.3891 21.7468 32.8964 20.2325L34.4587 19.4994C34.8914 20.5449 35.7927 21.1218 36.6821 21.1218C37.5954 21.1218 38.1363 20.7012 38.1363 20.1724C38.1363 19.7037 37.8118 19.4513 37.283 19.2831L35.4562 18.7062C33.9299 18.2255 33.2089 17.3602 33.2089 16.1704C33.2089 14.572 34.4948 13.5024 36.4297 13.5024C38.1483 13.5024 39.4943 14.4518 39.975 15.7738L38.4127 16.5069C38.1122 15.6536 37.3911 15.1248 36.4297 15.1248C35.6125 15.1248 35.0717 15.5454 35.0717 16.0983C35.0717 16.5189 35.3841 16.8314 35.961 17.0116L37.7397 17.5645C39.2419 18.0332 39.9991 18.8384 39.9991 20.0642C39.9991 21.6746 38.6771 22.7443 36.6821 22.7443ZM40.8461 22.6V13.6466H42.7089V22.6H40.8461ZM48.7707 13.6466L51.8233 22.6H49.8524L49.2515 20.7733H45.8263L45.2254 22.6H43.2545L46.307 13.6466H48.7707ZM46.3551 19.1509H48.7227L47.5449 15.5214L46.3551 19.1509ZM52.4201 22.6V20.7973H54.2228V22.6H52.4201ZM59.7063 22.7443C57.1345 22.7443 55.1875 20.7733 55.1875 18.1173C55.1875 15.4493 57.1104 13.5024 59.7063 13.5024C61.6412 13.5024 63.0714 14.572 63.5401 15.894L61.8936 16.6872C61.5811 15.8219 60.788 15.1849 59.7063 15.1849C58.1199 15.1849 57.0503 16.3747 57.0503 18.1173C57.0503 19.8719 58.1199 21.0617 59.7063 21.0617C60.788 21.0617 61.5811 20.4248 61.8936 19.5595L63.5401 20.3527C63.0714 21.6746 61.6412 22.7443 59.7063 22.7443ZM68.8252 22.7443C66.1212 22.7443 64.0781 20.7493 64.0781 18.1173C64.0781 15.4853 66.1092 13.5024 68.8252 13.5024C71.5413 13.5024 73.5724 15.4853 73.5724 18.1173C73.5724 20.7493 71.5293 22.7443 68.8252 22.7443ZM68.8252 21.0617C70.4597 21.0617 71.7096 19.8479 71.7096 18.1173C71.7096 16.3867 70.4597 15.1849 68.8252 15.1849C67.1908 15.1849 65.9409 16.3867 65.9409 18.1173C65.9409 19.8479 67.1908 21.0617 68.8252 21.0617ZM82.0493 13.6466H83.852V22.6H81.9892V16.8314L79.2852 20.3166H79.0448L76.3407 16.6992V22.6H74.4779V13.6466H76.2806L79.153 17.4323L82.0493 13.6466Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex w-full mt-3 gap-x-2">
        <div className="w-5/12 h-48 bg-white-shade-2 dark:bg-[#273140]/0 rounded-2xl p-2">
          <div className="flex flex-col h-1/2 justify-center items-center">
            <span className="font-opensans text-white-shade-10 dark:text-white text-sm">
              Active Users
            </span>
            <h5 className="font-outfit text-lg font-bold text-black dark:text-white">
              ---
            </h5>
          </div>
          <div className="flex flex-col h-1/2 justify-center items-center rounded-3xl bg-white p-1 dark:bg-[#23374a] dark:text-white">
            <h5 className="font-outfit text-lg font-bold text-black text-center dark:text-white">
              Asia
              <br />
              (GMT+4)
            </h5>
          </div>
        </div>
        <div
          className="dark:hidden w-7/12 h-48 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('/images/maps/asia-map.png')` }}
        ></div>
        <div
          className="hidden dark:block w-7/12 h-48 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('/images/maps/ca-map-dark.png')`,
          }}
        ></div>
      </div>
      <div className="flex w-full mt-3 h-12 gap-x-2">
        <Link
          href={""}
          className="flex font-bold justify-center items-center w-full h-full bg-blue/10 text-blue rounded-2xl"
        >
          Coming Soon!
        </Link>
      </div>
    </div>
  );
};

export default AsiaMap;

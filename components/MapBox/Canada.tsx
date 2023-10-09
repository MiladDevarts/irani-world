import Link from "next/link";
import React from "react";

const CanadaMap = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="hidden lg:block  z-[1000] my-5 w-full h-auto rounded-3xl bg-white dark:bg-[#212936] shadow-badge p-4"
    >
      <div
        className="flex justify-center items-center w-full h-16 bg-center bg-cover text-white text-center rounded-2xl"
        style={{ backgroundImage: `url('/images/banner/ca.png')` }}
      >
        <svg
          width="76"
          height="33"
          viewBox="0 0 76 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.507 12.2548C15.534 10.9443 16.2507 9.41778 16.6032 7.79005L19 8.3098C18.569 10.3003 17.6926 12.167 16.4367 13.7695C15.1808 15.3721 13.5781 16.6687 11.7491 17.5618C10.6025 18.1218 9.38559 18.514 8.13576 18.7299L9.92998 25.4312C10.1445 26.2326 10.9677 26.7082 11.7685 26.4935C12.5692 26.2787 13.0445 25.455 12.8299 24.6535L12.2515 22.4933C12.2505 22.4936 12.2495 22.4939 12.2484 22.4941L12.1783 22.2197L11.7574 20.6478L11.7752 20.643L11.6406 20.1164C13.2783 19.6971 14.7974 18.9058 16.0802 17.8041L17.6774 19.6666C16.7352 20.4758 15.6888 21.148 14.5693 21.667L15.1988 24.0183C15.7639 26.129 14.5123 28.2986 12.4032 28.8642C10.2941 29.4298 8.12621 28.1772 7.56108 26.0664L5.64891 18.9246C3.69216 18.8957 1.76424 18.44 0 17.5883L1.06557 15.3777C2.56449 16.1013 4.20787 16.4754 5.87208 16.4716C7.53629 16.4679 9.17797 16.0865 10.6736 15.3561C12.1693 14.6257 13.4799 13.5653 14.507 12.2548Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.84607 6.91081L6.23176 9.53578L4.43614 9.46371L5.92246 11.8082L9.96662 10.7265L10.1627 7.98978L8.62633 8.91917L6.84607 6.91081ZM4.59826 7.35852L5.27628 4.46133L7.06711 4L9.03129 6.21583L10.8125 5.13833L12.3875 6.12015L11.9927 11.6303L11.2192 12.574L5.72128 14.0445L4.57717 13.5942L1.60055 8.89891L2.51952 7.27509L4.59826 7.35852Z"
            fill="white"
          />
          <path
            d="M27.6805 10V1.55043H29.4385V10H27.6805ZM30.9173 10V1.55043H34.3879C36.1345 1.55043 37.3821 2.48045 37.3821 4.24976C37.3821 5.40661 36.815 6.22321 35.919 6.63152L37.8471 10H35.8736L34.161 6.93774H32.6753V10H30.9173ZM32.6753 5.40661H34.3992C35.1364 5.40661 35.6241 4.9416 35.6241 4.24976C35.6241 3.54657 35.1364 3.08156 34.3992 3.08156H32.6753V5.40661ZM43.5099 1.55043L46.3907 10H44.5306L43.9635 8.27606H40.7312L40.1641 10H38.304L41.1848 1.55043H43.5099ZM41.2302 6.74493H43.4645L42.353 3.31974L41.2302 6.74493ZM52.3979 1.55043H54.1558V10H52.7948L48.9954 4.88489V10H47.2374V1.55043H48.5871L52.3979 6.63152V1.55043ZM55.6356 10V1.55043H57.3935V10H55.6356ZM31.6614 21.1361C29.2343 21.1361 27.397 19.2761 27.397 16.7695C27.397 14.2517 29.2116 12.4143 31.6614 12.4143C33.4875 12.4143 34.8371 13.4237 35.2794 14.6713L33.7256 15.4199C33.4307 14.6033 32.6822 14.0022 31.6614 14.0022C30.1643 14.0022 29.1549 15.125 29.1549 16.7695C29.1549 18.4254 30.1643 19.5483 31.6614 19.5483C32.6822 19.5483 33.4307 18.9472 33.7256 18.1306L35.2794 18.8791C34.8371 20.1267 33.4875 21.1361 31.6614 21.1361ZM40.542 12.5504L43.4228 21H41.5627L40.9957 19.2761H37.7633L37.1962 21H35.3361L38.2169 12.5504H40.542ZM38.2623 17.7449H40.4966L39.3851 14.3197L38.2623 17.7449ZM49.0897 12.5504H50.8477V21H49.4867L45.6872 15.8849V21H43.9293V12.5504H45.2789L49.0897 17.6315V12.5504ZM56.5692 12.5504L59.45 21H57.59L57.0229 19.2761H53.7905L53.2234 21H51.3634L54.2442 12.5504H56.5692ZM54.2895 17.7449H56.5239L55.4124 14.3197L54.2895 17.7449ZM59.9565 21V12.5504H62.7125C65.4572 12.5504 67.2152 14.3197 67.2152 16.7695C67.2152 19.2194 65.4459 21 62.7125 21H59.9565ZM61.7145 19.4689H62.7579C64.4024 19.4689 65.4572 18.4141 65.4572 16.7695C65.4572 15.125 64.4024 14.0816 62.7579 14.0816H61.7145V19.4689ZM72.3085 12.5504L75.1893 21H73.3292L72.7622 19.2761H69.5298L68.9627 21H67.1027L69.9834 12.5504H72.3085ZM70.0288 17.7449H72.2631L71.1516 14.3197L70.0288 17.7449ZM27.7372 32V30.2987H29.4385V32H27.7372ZM34.6134 32.1361C32.1863 32.1361 30.3489 30.2761 30.3489 27.7695C30.3489 25.2517 32.1636 23.4143 34.6134 23.4143C36.4394 23.4143 37.7891 24.4237 38.2314 25.6713L36.6776 26.4199C36.3827 25.6033 35.6341 25.0022 34.6134 25.0022C33.1163 25.0022 32.1069 26.125 32.1069 27.7695C32.1069 29.4254 33.1163 30.5483 34.6134 30.5483C35.6341 30.5483 36.3827 29.9472 36.6776 29.1306L38.2314 29.8791C37.7891 31.1267 36.4394 32.1361 34.6134 32.1361ZM43.2191 32.1361C40.6672 32.1361 38.7391 30.2534 38.7391 27.7695C38.7391 25.2857 40.6558 23.4143 43.2191 23.4143C45.7823 23.4143 47.699 25.2857 47.699 27.7695C47.699 30.2534 45.771 32.1361 43.2191 32.1361ZM43.2191 30.5483C44.7615 30.5483 45.9411 29.4028 45.9411 27.7695C45.9411 26.1363 44.7615 25.0022 43.2191 25.0022C41.6766 25.0022 40.4971 26.1363 40.4971 27.7695C40.4971 29.4028 41.6766 30.5483 43.2191 30.5483ZM55.6989 23.5504H57.4002V32H55.6422V26.556L53.0903 29.8451H52.8635L50.3116 26.4312V32H48.5537V23.5504H50.2549L52.9656 27.1231L55.6989 23.5504Z"
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
              Canada
              <br />
              (GMT+4)
            </h5>
          </div>
        </div>
        <div
          className="dark:hidden w-7/12 h-48 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('/images/maps/ca-map.png')` }}
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
          className="flex font-bold justify-center items-center w-full h-full bg-red/10 text-red rounded-2xl"
        >
          Coming Soon!
        </Link>
      </div>
    </div>
  );
};

export default CanadaMap;

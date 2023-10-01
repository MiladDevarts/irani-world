import React, { useState } from "react";

import IraniWorldBox from "./IraniWorldBox";
import Terms from "./Terms";

const Platforms = () => {
  const [canadaBox, setCanadaBox] = useState(true);
  const [usaBox, setUSABox] = useState(false);
  const [uaeBox, setUAEBox] = useState(false);

  const handleCanadaEnter = () => {
    setCanadaBox(true);
  };

  const handleCanadaOut = () => {
    setCanadaBox(false);
  };

  const handleUsaEnter = () => {
    setCanadaBox(false);
    setUSABox(true);
  };

  const handleUsaOut = () => {
    setUSABox(false);
    setCanadaBox(true);
  };

  const handleUaeEnter = () => {
    setCanadaBox(false);
    setUAEBox(true);
  };

  const handleUaeOut = () => {
    setUAEBox(false);
    setCanadaBox(true);
  };

  return (
    <>
      {/* Right => Services in Countries */}
      <section className="w-full lg:w-1/3 lg:h-full pt-10 pl-0 lg:pl-20 text-black">
        <IraniWorldBox />

        {/* 2. Countries Platform List */}
        <div className="-z[200] w-full h-36 rounded-3xl bg-white-shade-2 grid grid-cols-3 gap-x-3 p-4">
          <div
            onMouseOver={handleCanadaEnter}
            className="relative flex items-center justify-center w-full h-full bg-white rounded-2xl hover:cursor-pointer hover:shadow-soft-shadow transition-all duration-300"
          >
            <svg
              className="hover:fill-primary absolute top-0 left-0 m-2"
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#43D100"
                stroke="white"
                stroke-width="2"
              />
            </svg>
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
                fill="#BA131A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.84607 6.91081L6.23176 9.53578L4.43614 9.46371L5.92246 11.8082L9.96662 10.7265L10.1627 7.98978L8.62633 8.91917L6.84607 6.91081ZM4.59826 7.35852L5.27628 4.46133L7.06711 4L9.03129 6.21583L10.8125 5.13833L12.3875 6.12015L11.9927 11.6303L11.2192 12.574L5.72128 14.0445L4.57717 13.5942L1.60055 8.89891L2.51952 7.27509L4.59826 7.35852Z"
                fill="#BA131A"
              />
              <path
                d="M27.6805 10V1.55043H29.4385V10H27.6805ZM30.9173 10V1.55043H34.3879C36.1345 1.55043 37.3821 2.48045 37.3821 4.24976C37.3821 5.40661 36.815 6.22321 35.919 6.63152L37.8471 10H35.8736L34.161 6.93774H32.6753V10H30.9173ZM32.6753 5.40661H34.3992C35.1364 5.40661 35.6241 4.9416 35.6241 4.24976C35.6241 3.54657 35.1364 3.08156 34.3992 3.08156H32.6753V5.40661ZM43.5099 1.55043L46.3907 10H44.5306L43.9635 8.27606H40.7312L40.1641 10H38.304L41.1848 1.55043H43.5099ZM41.2302 6.74493H43.4645L42.353 3.31974L41.2302 6.74493ZM52.3979 1.55043H54.1558V10H52.7948L48.9954 4.88489V10H47.2374V1.55043H48.5871L52.3979 6.63152V1.55043ZM55.6356 10V1.55043H57.3935V10H55.6356ZM31.6614 21.1361C29.2343 21.1361 27.397 19.2761 27.397 16.7695C27.397 14.2517 29.2116 12.4143 31.6614 12.4143C33.4875 12.4143 34.8371 13.4237 35.2794 14.6713L33.7256 15.4199C33.4307 14.6033 32.6822 14.0022 31.6614 14.0022C30.1643 14.0022 29.1549 15.125 29.1549 16.7695C29.1549 18.4254 30.1643 19.5483 31.6614 19.5483C32.6822 19.5483 33.4307 18.9472 33.7256 18.1306L35.2794 18.8791C34.8371 20.1267 33.4875 21.1361 31.6614 21.1361ZM40.542 12.5504L43.4228 21H41.5627L40.9957 19.2761H37.7633L37.1962 21H35.3361L38.2169 12.5504H40.542ZM38.2623 17.7449H40.4966L39.3851 14.3197L38.2623 17.7449ZM49.0897 12.5504H50.8477V21H49.4867L45.6872 15.8849V21H43.9293V12.5504H45.2789L49.0897 17.6315V12.5504ZM56.5692 12.5504L59.45 21H57.59L57.0229 19.2761H53.7905L53.2234 21H51.3634L54.2442 12.5504H56.5692ZM54.2895 17.7449H56.5239L55.4124 14.3197L54.2895 17.7449ZM59.9565 21V12.5504H62.7125C65.4572 12.5504 67.2152 14.3197 67.2152 16.7695C67.2152 19.2194 65.4459 21 62.7125 21H59.9565ZM61.7145 19.4689H62.7579C64.4024 19.4689 65.4572 18.4141 65.4572 16.7695C65.4572 15.125 64.4024 14.0816 62.7579 14.0816H61.7145V19.4689ZM72.3085 12.5504L75.1893 21H73.3292L72.7622 19.2761H69.5298L68.9627 21H67.1027L69.9834 12.5504H72.3085ZM70.0288 17.7449H72.2631L71.1516 14.3197L70.0288 17.7449ZM27.7372 32V30.2987H29.4385V32H27.7372ZM34.6134 32.1361C32.1863 32.1361 30.3489 30.2761 30.3489 27.7695C30.3489 25.2517 32.1636 23.4143 34.6134 23.4143C36.4394 23.4143 37.7891 24.4237 38.2314 25.6713L36.6776 26.4199C36.3827 25.6033 35.6341 25.0022 34.6134 25.0022C33.1163 25.0022 32.1069 26.125 32.1069 27.7695C32.1069 29.4254 33.1163 30.5483 34.6134 30.5483C35.6341 30.5483 36.3827 29.9472 36.6776 29.1306L38.2314 29.8791C37.7891 31.1267 36.4394 32.1361 34.6134 32.1361ZM43.2191 32.1361C40.6672 32.1361 38.7391 30.2534 38.7391 27.7695C38.7391 25.2857 40.6558 23.4143 43.2191 23.4143C45.7823 23.4143 47.699 25.2857 47.699 27.7695C47.699 30.2534 45.771 32.1361 43.2191 32.1361ZM43.2191 30.5483C44.7615 30.5483 45.9411 29.4028 45.9411 27.7695C45.9411 26.1363 44.7615 25.0022 43.2191 25.0022C41.6766 25.0022 40.4971 26.1363 40.4971 27.7695C40.4971 29.4028 41.6766 30.5483 43.2191 30.5483ZM55.6989 23.5504H57.4002V32H55.6422V26.556L53.0903 29.8451H52.8635L50.3116 26.4312V32H48.5537V23.5504H50.2549L52.9656 27.1231L55.6989 23.5504Z"
                fill="#BA131A"
              />
            </svg>
          </div>

          <div
            onMouseOver={handleUsaEnter}
            onMouseOut={handleUsaOut}
            className="relative flex items-center justify-center w-full h-full bg-white rounded-2xl hover:cursor-pointer hover:shadow-soft-shadow transition-all duration-300"
          >
            <svg
              className="hover:fill-primary absolute top-0 left-0 m-2"
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#43D100"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <svg
              className="w-full"
              width="73"
              height="25"
              viewBox="0 0 73 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1463 9.79147C13.0063 8.70704 13.6063 7.44384 13.9014 6.09691L15.9082 6.527C15.5474 8.17408 14.8136 9.71878 13.7621 11.0449C12.7105 12.3709 11.3686 13.4439 9.83725 14.183C8.87718 14.6463 7.85833 14.9709 6.81188 15.1495L8.31413 20.6947C8.49378 21.3579 9.18296 21.7514 9.85344 21.5737C10.5239 21.3961 10.9218 20.7144 10.7422 20.0512L10.2579 18.2637C10.257 18.2639 10.2562 18.2642 10.2553 18.2644L10.1966 18.0373L9.84419 16.7366L9.85911 16.7326L9.74638 16.2968C11.1176 15.9498 12.3895 15.2951 13.4636 14.3834L14.8009 15.9246C14.012 16.5942 13.1358 17.1505 12.1985 17.5799L12.7256 19.5256C13.1988 21.2722 12.1508 23.0675 10.3849 23.5355C8.619 24.0035 6.80388 22.967 6.33071 21.2204L4.72969 15.3106C3.09135 15.2867 1.47716 14.9096 0 14.2048L0.892178 12.3756C2.14718 12.9744 3.52315 13.2839 4.91655 13.2808C6.30995 13.2777 7.6845 12.9621 8.93676 12.3577C10.189 11.7533 11.2864 10.8759 12.1463 9.79147Z"
                fill="#011223"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.08175 3.57836L4.81962 5.35705L3.12909 5.99391L4.74805 6.81405L4.83345 8.62154L6.08887 7.33698L7.81838 7.82173L6.98859 6.2137L7.98058 4.69396L6.1981 4.98769L5.08175 3.57836ZM3.24213 4.08551L3.64875 1.32635L5.19676 0.91156L6.92848 3.09775L9.65396 2.64863L10.527 3.98722L9.00648 6.31661L10.2897 8.80325L9.27824 10.0442L6.6142 9.29753L4.6804 11.2762L3.18401 10.7072L3.05195 7.91212L0.570485 6.65505L0.657237 5.0593L3.24213 4.08551Z"
                fill="#011223"
              />
              <path
                d="M22.3634 11.5074V3.61771H24.0049V11.5074H22.3634ZM25.3858 11.5074V3.61771H28.6264C30.2573 3.61771 31.4222 4.48611 31.4222 6.13819C31.4222 7.2184 30.8927 7.98089 30.0561 8.36214L31.8564 11.5074H30.0137L28.4146 8.64808H27.0273V11.5074H25.3858ZM27.0273 7.2184H28.637C29.3254 7.2184 29.7808 6.7842 29.7808 6.13819C29.7808 5.4816 29.3254 5.0474 28.637 5.0474H27.0273V7.2184ZM37.144 3.61771L39.834 11.5074H38.0972L37.5676 9.89773H34.5494L34.0199 11.5074H32.2831L34.973 3.61771H37.144ZM35.0154 8.46805H37.1017L36.0638 5.26979L35.0154 8.46805ZM45.4431 3.61771H47.0846V11.5074H45.8138L42.2661 6.73125V11.5074H40.6246V3.61771H41.8848L45.4431 8.36214V3.61771ZM48.4663 11.5074V3.61771H50.1078V11.5074H48.4663ZM27.182 13.6177H28.8235V18.5104C28.8235 20.279 27.5315 21.6345 25.5935 21.6345C23.6555 21.6345 22.3634 20.279 22.3634 18.5104V13.6177H24.0049V18.5104C24.0049 19.4953 24.6403 20.1519 25.5935 20.1519C26.5466 20.1519 27.182 19.4953 27.182 18.5104V13.6177ZM32.8527 21.6345C31.2854 21.6345 29.951 20.7555 29.5168 19.4212L30.8936 18.7752C31.2748 19.6965 32.0691 20.2048 32.8527 20.2048C33.6576 20.2048 34.1342 19.8342 34.1342 19.3682C34.1342 18.9552 33.8482 18.7328 33.3823 18.5845L31.7725 18.0762C30.4276 17.6526 29.7922 16.8901 29.7922 15.8417C29.7922 14.4332 30.9253 13.4906 32.6304 13.4906C34.1448 13.4906 35.3309 14.3273 35.7545 15.4922L34.3777 16.1382C34.113 15.3863 33.4776 14.9203 32.6304 14.9203C31.9102 14.9203 31.4337 15.291 31.4337 15.7781C31.4337 16.1488 31.709 16.4241 32.2173 16.583L33.7847 17.0701C35.1085 17.4832 35.7757 18.1927 35.7757 19.2729C35.7757 20.692 34.6107 21.6345 32.8527 21.6345ZM40.8006 13.6177L43.4905 21.5074H41.7537L41.2242 19.8977H38.206L37.6764 21.5074H35.9396L38.6296 13.6177H40.8006ZM38.6719 18.468H40.7582L39.7204 15.2698L38.6719 18.468ZM44.0164 21.5074V19.9189H45.6049V21.5074H44.0164ZM50.4369 21.6345C48.1706 21.6345 46.455 19.8977 46.455 17.5573C46.455 15.2063 48.1494 13.4906 50.4369 13.4906C52.142 13.4906 53.4022 14.4332 53.8152 15.5981L52.3644 16.297C52.089 15.5345 51.3901 14.9733 50.4369 14.9733C49.039 14.9733 48.0965 16.0217 48.0965 17.5573C48.0965 19.1035 49.039 20.1519 50.4369 20.1519C51.3901 20.1519 52.089 19.5906 52.3644 18.8281L53.8152 19.5271C53.4022 20.692 52.142 21.6345 50.4369 21.6345ZM58.4725 21.6345C56.0896 21.6345 54.2893 19.8765 54.2893 17.5573C54.2893 15.238 56.0791 13.4906 58.4725 13.4906C60.8658 13.4906 62.6556 15.238 62.6556 17.5573C62.6556 19.8765 60.8553 21.6345 58.4725 21.6345ZM58.4725 20.1519C59.9127 20.1519 61.0141 19.0823 61.0141 17.5573C61.0141 16.0323 59.9127 14.9733 58.4725 14.9733C57.0322 14.9733 55.9308 16.0323 55.9308 17.5573C55.9308 19.0823 57.0322 20.1519 58.4725 20.1519ZM70.1254 13.6177H71.714V21.5074H70.0725V16.4241L67.6897 19.4953H67.4779L65.0951 16.3076V21.5074H63.4536V13.6177H65.0421L67.5732 16.9536L70.1254 13.6177Z"
                fill="#011223"
              />
            </svg>
          </div>

          <div
            onMouseOver={handleUaeEnter}
            onMouseOut={handleUaeOut}
            className="hover:fill-primary relative flex items-center justify-center w-full h-full bg-white rounded-2xl"
          >
            <svg
              className="absolute top-0 left-0 m-2"
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.5"
                cy="7.5"
                r="6.5"
                fill="#43D100"
                stroke="white"
                stroke-width="2"
              />
            </svg>
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
                d="M15.2705 11.2642C16.3516 9.95438 17.106 8.42869 17.477 6.80186L20 7.32132C19.5464 9.31067 18.6238 11.1764 17.3018 12.778C15.9798 14.3797 14.2927 15.6756 12.3675 16.5682C11.1605 17.1279 9.87957 17.5199 8.56396 17.7356L10.4526 24.4332C10.6785 25.2341 11.5449 25.7095 12.3878 25.4949C13.2308 25.2802 13.731 24.4569 13.5052 23.656L12.8963 21.497C12.8953 21.4972 12.8942 21.4975 12.8931 21.4978L12.8192 21.2235L12.3762 19.6525L12.395 19.6477L12.2532 19.1213C13.9771 18.7022 15.5762 17.9115 16.9266 16.8103L18.6078 18.6718C17.616 19.4806 16.5145 20.1524 15.3361 20.6711L15.9987 23.0211C16.5936 25.1306 15.2761 27.299 13.056 27.8643C10.8359 28.4295 8.5539 27.1776 7.95903 25.0681L5.94622 17.9302C3.88648 17.9013 1.8571 17.4459 0 16.5946L1.12166 14.3853C2.69946 15.1085 4.42934 15.4823 6.18114 15.4786C7.93293 15.4749 9.66103 15.0936 11.2354 14.3637C12.8098 13.6337 14.1894 12.5739 15.2705 11.2642Z"
                fill="#023113"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.29268 6.59781L2.68293 4.50968C2.68293 4.50968 5.54276 3.26925 6.45031 3.09576C9.10747 2.58778 11.719 4.1478 12.4202 6.66191L12.7019 7.6718C13.2244 9.54507 12.0672 11.4706 10.1173 11.9725L5.18344 13.2426L4.4115 10.4749L2.57706 9.97976L1.89024 8.24423L3.29268 6.59781ZM7.62195 4.97831C7.21065 5.05694 4.81707 5.857 4.81707 5.857L5.18344 7.20772L4.26275 8.24423L6.20837 8.76935L6.73563 10.6598L9.54918 9.9355C10.3281 9.735 10.7903 8.96588 10.5816 8.21761L10.2999 7.20772C9.89807 5.76696 8.96342 4.62684 7.62195 4.97831Z"
                fill="#023113"
              />
              <path
                d="M7.8953 5.94293L5.73358 6.59781L5.73311 6.66176C5.73229 6.77466 5.74946 6.88928 5.78651 7.00218C5.98285 7.60035 6.65948 7.92409 7.29414 7.73183C7.92879 7.53956 8.28972 6.9015 8.09338 6.30333C8.05633 6.19043 8.00195 6.08708 7.93386 5.99505L7.8953 5.94293Z"
                fill="#023113"
              />
              <path
                d="M27.6874 10V1.46513H29.4631V10H27.6874ZM30.9569 10V1.46513H34.4625C36.2267 1.46513 37.4869 2.40454 37.4869 4.19171C37.4869 5.36024 36.9141 6.18509 36.009 6.59751L37.9566 10H35.9632L34.2333 6.90683H32.7326V10H30.9569ZM32.7326 5.36024H34.4739C35.2186 5.36024 35.7112 4.89053 35.7112 4.19171C35.7112 3.48142 35.2186 3.01172 34.4739 3.01172H32.7326V5.36024ZM43.6766 1.46513L46.5864 10H44.7076L44.1348 8.25866H40.8698L40.297 10H38.4182L41.328 1.46513H43.6766ZM41.3739 6.71207H43.6307L42.508 3.2523L41.3739 6.71207ZM52.6543 1.46513H54.43V10H53.0552L49.2174 4.83325V10H47.4417V1.46513H48.805L52.6543 6.59751V1.46513ZM55.9247 10V1.46513H57.7004V10H55.9247ZM27.6874 21V12.4651H33.4269V14.0117H29.4631V15.9478H33.1978V17.4944H29.4631V19.4534H33.4269L33.4155 21H27.6874ZM41.5561 12.4651H43.2745V21H41.4988V15.501L38.9212 18.8233H38.692L36.1144 15.375V21H34.3387V12.4651H36.0571L38.7951 16.0738L41.5561 12.4651ZM44.4246 21V12.4651H46.2003V21H44.4246ZM47.3504 21V12.4651H50.856C52.6203 12.4651 53.8805 13.4045 53.8805 15.1917C53.8805 16.3602 53.3076 17.1851 52.4026 17.5975L54.3502 21H52.3568L50.6269 17.9068H49.1261V21H47.3504ZM49.1261 16.3602H50.8675C51.6121 16.3602 52.1047 15.8905 52.1047 15.1917C52.1047 14.4814 51.6121 14.0117 50.8675 14.0117H49.1261V16.3602ZM59.7264 12.4651L62.6363 21H60.7575L60.1847 19.2587H56.9197L56.3468 21H54.468L57.3779 12.4651H59.7264ZM57.4237 17.7121H59.6806L58.5579 14.2523L57.4237 17.7121ZM64.227 21V14.0117H62.0618V12.4651H68.145V14.0117H66.0027V21H64.227ZM68.7699 21V12.4651H74.5095V14.0117H70.5456V15.9478H74.2804V17.4944H70.5456V19.4534H74.5095L74.498 21H68.7699ZM27.7447 32V30.2816H29.4631V32H27.7447ZM34.6902 32.1375C32.2386 32.1375 30.3827 30.2587 30.3827 27.7268C30.3827 25.1836 32.2157 23.3277 34.6902 23.3277C36.5347 23.3277 37.898 24.3473 38.3448 25.6074L36.7753 26.3635C36.4774 25.5387 35.7213 24.9315 34.6902 24.9315C33.178 24.9315 32.1584 26.0657 32.1584 27.7268C32.1584 29.3994 33.178 30.5336 34.6902 30.5336C35.7213 30.5336 36.4774 29.9264 36.7753 29.1016L38.3448 29.8577C37.898 31.1179 36.5347 32.1375 34.6902 32.1375ZM43.3828 32.1375C40.8052 32.1375 38.8576 30.2357 38.8576 27.7268C38.8576 25.2179 40.7937 23.3277 43.3828 23.3277C45.9719 23.3277 47.908 25.2179 47.908 27.7268C47.908 30.2357 45.9605 32.1375 43.3828 32.1375ZM43.3828 30.5336C44.9409 30.5336 46.1323 29.3765 46.1323 27.7268C46.1323 26.0771 44.9409 24.9315 43.3828 24.9315C41.8248 24.9315 40.6333 26.0771 40.6333 27.7268C40.6333 29.3765 41.8248 30.5336 43.3828 30.5336ZM55.9887 23.4651H57.7071V32H55.9314V26.501L53.3537 29.8233H53.1246L50.547 26.375V32H48.7713V23.4651H50.4897L53.2277 27.0738L55.9887 23.4651Z"
                fill="#023113"
              />
            </svg>
          </div>
        </div>

        {canadaBox && (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="my-5 w-full h-auto rounded-3xl bg-white shadow-badge p-4"
          >
            <div className="lablel-flashing-animation flex justify-center items-center w-full h-16 bg-[#BA131A] text-hwite text-center rounded-2xl">
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
            <div className="flex w-full mt-3">
              <div className="w-5/12 h-48 bg-white-shade-2 rounded-2xl p-2">
                <div className="flex flex-col h-1/2 justify-center items-center">
                  <span className="font-opensans text-white-shade-10 text-sm">
                    Active Users
                  </span>
                  <h5 className="font-outfit text-lg font-bold text-black">
                    300k users
                  </h5>
                </div>
                <div className="flex flex-col h-1/2 justify-center items-center rounded-3xl bg-white p-1">
                  <h5 className="font-outfit text-lg font-bold text-black">
                    Canada
                    <br />
                    (GMT-4)
                  </h5>
                </div>
              </div>
              <div
                className="w-7/12 h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/maps/ca-map.png')` }}
              ></div>
            </div>
          </div>
        )}

        {usaBox && (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="z-[1000] my-5 w-full h-auto rounded-3xl bg-white shadow-badge p-4"
          >
            <div className=" flex justify-center items-center w-full h-16 bg-[#062F58] text-hwite text-center rounded-2xl">
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
              <div className="w-5/12 h-48 bg-white-shade-2 rounded-2xl p-2">
                <div className="flex flex-col h-1/2 justify-center items-center">
                  <span className="font-opensans text-white-shade-10 text-sm">
                    Active Users
                  </span>
                  <h5 className="font-outfit text-lg font-bold text-black">
                    200K users
                  </h5>
                </div>
                <div className="flex flex-col h-1/2 justify-center items-center rounded-3xl bg-white p-1">
                  <h5 className="font-outfit text-lg font-bold text-black">
                    USA
                    <br />
                    (GMT-4)
                  </h5>
                </div>
              </div>
              <div
                className="w-7/12 h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/maps/ca-map.png')` }}
              ></div>
            </div>
          </div>
        )}

        {uaeBox && (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="z-[1001] my-5 w-full h-auto rounded-3xl bg-white shadow-badge p-4"
          >
            <div className=" flex justify-center items-center w-full h-16 bg-[#AA8041] text-hwite text-center rounded-2xl">
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
                  d="M15.2705 11.2642C16.3516 9.95438 17.106 8.42869 17.477 6.80186L20 7.32132C19.5464 9.31067 18.6238 11.1764 17.3018 12.778C15.9798 14.3797 14.2927 15.6756 12.3675 16.5682C11.1605 17.1279 9.87957 17.5199 8.56396 17.7356L10.4526 24.4332C10.6785 25.2341 11.5449 25.7095 12.3878 25.4949C13.2308 25.2802 13.731 24.4569 13.5052 23.656L12.8963 21.497C12.8953 21.4972 12.8942 21.4975 12.8931 21.4978L12.8192 21.2235L12.3762 19.6525L12.395 19.6477L12.2532 19.1213C13.9771 18.7022 15.5762 17.9115 16.9266 16.8103L18.6078 18.6718C17.616 19.4806 16.5145 20.1524 15.3361 20.6711L15.9987 23.0211C16.5936 25.1306 15.2761 27.299 13.056 27.8643C10.8359 28.4295 8.5539 27.1776 7.95903 25.0681L5.94622 17.9302C3.88648 17.9013 1.8571 17.4459 0 16.5946L1.12166 14.3853C2.69946 15.1085 4.42934 15.4823 6.18114 15.4786C7.93293 15.4749 9.66103 15.0936 11.2354 14.3637C12.8098 13.6337 14.1894 12.5739 15.2705 11.2642Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.29268 6.59781L2.68293 4.50968C2.68293 4.50968 5.54276 3.26925 6.45031 3.09576C9.10747 2.58778 11.719 4.1478 12.4202 6.66191L12.7019 7.6718C13.2244 9.54507 12.0672 11.4706 10.1173 11.9725L5.18344 13.2426L4.4115 10.4749L2.57706 9.97977L1.89024 8.24423L3.29268 6.59781ZM7.62195 4.97831C7.21065 5.05694 4.81707 5.857 4.81707 5.857L5.18344 7.20772L4.26275 8.24423L6.20837 8.76935L6.73563 10.6598L9.54918 9.9355C10.3281 9.735 10.7903 8.96588 10.5816 8.21761L10.2999 7.20772C9.89807 5.76696 8.96341 4.62684 7.62195 4.97831Z"
                  fill="white"
                />
                <path
                  d="M7.8953 5.94293L5.73358 6.59781L5.73311 6.66176C5.73229 6.77466 5.74946 6.88928 5.78651 7.00218C5.98285 7.60035 6.65948 7.92409 7.29414 7.73183C7.92879 7.53956 8.28972 6.9015 8.09338 6.30333C8.05633 6.19043 8.00195 6.08708 7.93386 5.99505L7.8953 5.94293Z"
                  fill="white"
                />
                <path
                  d="M27.6874 10V1.46513H29.4631V10H27.6874ZM30.9569 10V1.46513H34.4625C36.2267 1.46513 37.4869 2.40454 37.4869 4.19171C37.4869 5.36024 36.9141 6.18509 36.009 6.59751L37.9566 10H35.9632L34.2333 6.90683H32.7326V10H30.9569ZM32.7326 5.36024H34.4739C35.2186 5.36024 35.7112 4.89053 35.7112 4.19171C35.7112 3.48142 35.2186 3.01172 34.4739 3.01172H32.7326V5.36024ZM43.6766 1.46513L46.5864 10H44.7076L44.1348 8.25866H40.8698L40.297 10H38.4182L41.328 1.46513H43.6766ZM41.3739 6.71207H43.6307L42.508 3.2523L41.3739 6.71207ZM52.6543 1.46513H54.43V10H53.0552L49.2174 4.83325V10H47.4417V1.46513H48.805L52.6543 6.59751V1.46513ZM55.9247 10V1.46513H57.7004V10H55.9247ZM27.6874 21V12.4651H33.4269V14.0117H29.4631V15.9478H33.1978V17.4944H29.4631V19.4534H33.4269L33.4155 21H27.6874ZM41.5561 12.4651H43.2745V21H41.4988V15.501L38.9212 18.8233H38.692L36.1144 15.375V21H34.3387V12.4651H36.0571L38.7951 16.0738L41.5561 12.4651ZM44.4246 21V12.4651H46.2003V21H44.4246ZM47.3504 21V12.4651H50.856C52.6203 12.4651 53.8805 13.4045 53.8805 15.1917C53.8805 16.3602 53.3076 17.1851 52.4026 17.5975L54.3502 21H52.3568L50.6269 17.9068H49.1261V21H47.3504ZM49.1261 16.3602H50.8675C51.6121 16.3602 52.1047 15.8905 52.1047 15.1917C52.1047 14.4814 51.6121 14.0117 50.8675 14.0117H49.1261V16.3602ZM59.7264 12.4651L62.6363 21H60.7575L60.1847 19.2587H56.9197L56.3468 21H54.468L57.3779 12.4651H59.7264ZM57.4237 17.7121H59.6806L58.5579 14.2523L57.4237 17.7121ZM64.227 21V14.0117H62.0618V12.4651H68.145V14.0117H66.0027V21H64.227ZM68.7699 21V12.4651H74.5095V14.0117H70.5456V15.9478H74.2804V17.4944H70.5456V19.4534H74.5095L74.498 21H68.7699ZM27.7447 32V30.2816H29.4631V32H27.7447ZM34.6902 32.1375C32.2386 32.1375 30.3827 30.2587 30.3827 27.7268C30.3827 25.1836 32.2157 23.3277 34.6902 23.3277C36.5347 23.3277 37.898 24.3473 38.3448 25.6074L36.7753 26.3635C36.4774 25.5387 35.7213 24.9315 34.6902 24.9315C33.178 24.9315 32.1584 26.0657 32.1584 27.7268C32.1584 29.3994 33.178 30.5336 34.6902 30.5336C35.7213 30.5336 36.4774 29.9264 36.7753 29.1016L38.3448 29.8577C37.898 31.1179 36.5347 32.1375 34.6902 32.1375ZM43.3828 32.1375C40.8052 32.1375 38.8576 30.2357 38.8576 27.7268C38.8576 25.2179 40.7937 23.3277 43.3828 23.3277C45.9719 23.3277 47.908 25.2179 47.908 27.7268C47.908 30.2357 45.9605 32.1375 43.3828 32.1375ZM43.3828 30.5336C44.9409 30.5336 46.1323 29.3765 46.1323 27.7268C46.1323 26.0771 44.9409 24.9315 43.3828 24.9315C41.8248 24.9315 40.6333 26.0771 40.6333 27.7268C40.6333 29.3765 41.8248 30.5336 43.3828 30.5336ZM55.9887 23.4651H57.7071V32H55.9314V26.501L53.3537 29.8233H53.1246L50.547 26.375V32H48.7713V23.4651H50.4897L53.2277 27.0738L55.9887 23.4651Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex w-full mt-3">
              <div className="w-5/12 h-48 bg-white-shade-2 rounded-2xl p-2">
                <div className="flex flex-col h-1/2 justify-center items-center">
                  <span className="font-opensans text-white-shade-10 text-sm">
                    Active Users
                  </span>
                  <h5 className="font-outfit text-lg font-bold text-black">
                    200K users
                  </h5>
                </div>
                <div className="flex flex-col h-1/2 justify-center items-center rounded-3xl bg-white p-1">
                  <h5 className="font-outfit text-lg font-bold text-black">
                    USA
                    <br />
                    (GMT-4)
                  </h5>
                </div>
              </div>
              <div
                className="w-7/12 h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/maps/ca-map.png')` }}
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
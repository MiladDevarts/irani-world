import Link from "next/link";
import React from "react";

const UAEMap = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="hidden lg:block  z-[1000] my-5 w-full h-auto rounded-3xl bg-white dark:bg-[#212936] shadow-badge p-4"
    >
      <div className="flex justify-center items-center w-full h-16 bg-center bg-cover text-white text-center rounded-2xl"
              style={{ backgroundImage: `url('/images/banner/uae.png')` }}
      >
        <svg
          width="82"
          height="35"
          viewBox="0 0 82 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.1721 12.9053C17.317 11.4614 18.116 9.77954 18.5089 7.98619L21.1808 8.55882C20.7004 10.7518 19.7234 12.8085 18.3233 14.5741C16.9232 16.3397 15.1365 17.7682 13.0977 18.7522C11.8194 19.3692 10.4629 19.8013 9.06958 20.0391L11.0697 27.4223C11.3089 28.3052 12.2265 28.8292 13.1192 28.5926C14.0119 28.356 14.5417 27.4485 14.3025 26.5655L13.6578 24.1855C13.6566 24.1858 13.6554 24.1861 13.6543 24.1864L13.5761 23.8841L13.1069 22.1522L13.1268 22.1469L12.9767 21.5667C14.8023 21.1047 16.4959 20.233 17.9259 19.0191L19.7064 21.0712C18.6561 21.9627 17.4895 22.7033 16.2415 23.2751L16.9433 25.8656C17.5733 28.1911 16.178 30.5815 13.8268 31.2046C11.4757 31.8277 9.05893 30.4476 8.42893 28.1221L6.29729 20.2536C4.11594 20.2218 1.96674 19.7198 0 18.7814L1.18788 16.3459C2.85884 17.1431 4.69085 17.5552 6.54607 17.5511C8.4013 17.547 10.2314 17.1267 11.8987 16.322C13.5661 15.5173 15.0271 14.3491 16.1721 12.9053Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.48708 7.76125L2.84133 5.45938C2.84133 5.45938 5.87001 4.09198 6.83114 3.90072C9.64518 3.34075 12.4109 5.06046 13.1535 7.83191L13.4518 8.94517C14.0052 11.0102 12.7797 13.1328 10.7147 13.6861L5.48947 15.0862L4.67196 12.0352L2.72921 11.4894L2.00184 9.5762L3.48708 7.76125ZM8.07196 5.97598C7.63637 6.06266 5.10148 6.94462 5.10148 6.94462L5.48947 8.4336L4.51443 9.5762L6.57492 10.1551L7.1333 12.239L10.113 11.4406C10.9378 11.2196 11.4273 10.3717 11.2063 9.54686L10.908 8.4336C10.4825 6.84536 9.49262 5.58853 8.07196 5.97598Z"
            fill="white"
          />
          <path
            d="M8.36144 7.03934L6.07209 7.76125L6.0716 7.83174C6.07072 7.9562 6.08891 8.08256 6.12815 8.20701C6.33609 8.86641 7.05266 9.2233 7.72479 9.01135C8.39691 8.7994 8.77915 8.09603 8.57122 7.43662C8.53198 7.31218 8.47439 7.19824 8.40228 7.0968L8.36144 7.03934Z"
            fill="white"
          />
          <path
            d="M30.32 11V1.75829H32.2428V11H30.32ZM33.8602 11V1.75829H37.6562C39.5665 1.75829 40.9311 2.7755 40.9311 4.71067C40.9311 5.97598 40.3108 6.86914 39.3308 7.31572L41.4397 11H39.2812L37.4081 7.65066H35.783V11H33.8602ZM35.783 5.97598H37.6686C38.4749 5.97598 39.0083 5.46738 39.0083 4.71067C39.0083 3.94157 38.4749 3.43296 37.6686 3.43296H35.783V5.97598ZM47.6334 1.75829L50.7842 11H48.7498L48.1296 9.11444H44.5941L43.9739 11H41.9395L45.0903 1.75829H47.6334ZM45.14 7.43977H47.5837L46.3681 3.69347L45.14 7.43977ZM57.3546 1.75829H59.2774V11H57.7888L53.6331 5.40535V11H51.7103V1.75829H53.1865L57.3546 7.31572V1.75829ZM60.8958 11V1.75829H62.8186V11H60.8958ZM30.32 23V13.7583H36.5349V15.433H32.2428V17.5294H36.2868V19.2041H32.2428V21.3253H36.5349L36.5225 23H30.32ZM45.3373 13.7583H47.198V23H45.2753V17.0456L42.4841 20.6431H42.236L39.4449 16.9092V23H37.5221V13.7583H39.3829L42.3477 17.6659L45.3373 13.7583ZM48.4434 23V13.7583H50.3661V23H48.4434ZM51.6115 23V13.7583H55.4074C57.3178 13.7583 58.6823 14.7755 58.6823 16.7107C58.6823 17.976 58.0621 18.8691 57.0821 19.3157L59.1909 23H57.0325L55.1593 19.6507H53.5343V23H51.6115ZM53.5343 17.976H55.4198C56.2261 17.976 56.7596 17.4674 56.7596 16.7107C56.7596 15.9416 56.2261 15.433 55.4198 15.433H53.5343V17.976ZM65.0125 13.7583L68.1633 23H66.1289L65.5087 21.1144H61.9732L61.353 23H59.3186L62.4694 13.7583H65.0125ZM62.5191 19.4398H64.9628L63.7471 15.6935L62.5191 19.4398ZM69.8858 23V15.433H67.5412V13.7583H74.1283V15.433H71.8085V23H69.8858ZM74.8049 23V13.7583H81.0198V15.433H76.7277V17.5294H80.7717V19.2041H76.7277V21.3253H81.0198L81.0074 23H74.8049ZM30.382 34V32.1393H32.2428V34H30.382ZM37.9028 34.1489C35.2482 34.1489 33.2385 32.1144 33.2385 29.3729C33.2385 26.619 35.2233 24.6094 37.9028 24.6094C39.9 24.6094 41.3762 25.7135 41.86 27.078L40.1605 27.8967C39.838 27.0036 39.0193 26.3461 37.9028 26.3461C36.2654 26.3461 35.1613 27.5742 35.1613 29.3729C35.1613 31.1841 36.2654 32.4122 37.9028 32.4122C39.0193 32.4122 39.838 31.7547 40.1605 30.8615L41.86 31.6803C41.3762 33.0448 39.9 34.1489 37.9028 34.1489ZM47.3153 34.1489C44.5242 34.1489 42.4153 32.0896 42.4153 29.3729C42.4153 26.6563 44.5118 24.6094 47.3153 24.6094C50.1188 24.6094 52.2153 26.6563 52.2153 29.3729C52.2153 32.0896 50.1064 34.1489 47.3153 34.1489ZM47.3153 32.4122C49.0024 32.4122 50.2925 31.1593 50.2925 29.3729C50.2925 27.5866 49.0024 26.3461 47.3153 26.3461C45.6282 26.3461 44.3381 27.5866 44.3381 29.3729C44.3381 31.1593 45.6282 32.4122 47.3153 32.4122ZM60.9651 24.7583H62.8259V34H60.9031V28.0456L58.112 31.6431H57.8639L55.0728 27.9092V34H53.15V24.7583H55.0107L57.9755 28.6659L60.9651 24.7583Z"
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
              UAE
              <br />
              (GMT+4)
            </h5>
          </div>
        </div>
        <div
          className="dark:hidden w-7/12 h-48 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('/images/maps/uae-map.png')` }}
        ></div>
        <div
          className="hidden dark:block w-7/12 h-48 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('/images/maps/ca-map-dark.png')`,
          }}
        ></div>
      </div>
      <div className="flex w-full mt-3 h-16 gap-x-2">
        <Link
          href={""}
          className="flex font-bold justify-center items-center w-full h-full bg-[#AA8041]/10 text-[#3e2f1a] rounded-2xl"
        >
          Coming Soon!
        </Link>
      </div>
    </div>
  );
};

export default UAEMap;
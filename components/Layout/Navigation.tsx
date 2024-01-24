"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";

import HamburgerNav from "../Hamburger";

import { usePathname } from "next/navigation";

interface NavigationProps {
  LogoType: ReactNode;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "/" },
    { value: "About", slug: "/about" },
    { value: "Blog", slug: "/blog" },
    { value: "FAQ", slug: "/faq" },
    { value: "Origin", slug: "/origin" },
    { value: "Privacy Policy ", slug: "/privacy-policy" },
    { value: "Contact", slug: "/contact" },
  ]);

  const currentRoute = usePathname();

  const linkStyle =
    "h-full flex items-center hover:cursor-pointer transitaion-all";
  const activeStyle =
    linkStyle +
    "text-black border-t-4 border-black dark:text-white dark:border-white";
  const nonActiveStyle = linkStyle + " border-t-none";

  return (
    <nav className="z-[1013] bg-white py-4 lg:py-0.5 lg:h-[8vh] shadow-deep absolute top-0 lg:top-[92%] w-full lg:border-t border-white-shade-4 soft-shadow">
      <div className="container flex gap-x-6 lg:gap-x-0 justify-between items-center h-full">
        <div className="navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 dark:text-white font-opensans font-medium">
          {menuItems.map((link) => {
            return (
              <Link
                className={
                  currentRoute === link.slug ? activeStyle : nonActiveStyle
                }
                href={link.slug}
              >
                {link.value}
              </Link>
            );
          })}
        </div>
        <HamburgerNav />
        <div className="flex gap-x-6 items-center">
          <div className="hidden lg:flex w-[60px] overflow-hidden gap-x-2 lg:hover:w-32 transition-all duration-300">
            <Link
              href={"https://irani.bio"}
              className="flex gap-x-2 items-center font-outfit font-medium text-black bg-white-shade-3 px-3 py-1 rounded-2xl"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="animate-pulse"
                  cx="15.5"
                  cy="15.5"
                  r="15.5"
                  fill="#FB8800"
                  fillOpacity="0.3"
                />
                <circle
                  className="animate-pulse"
                  cx="15.5"
                  cy="15.5"
                  r="9.5"
                  fill="#FB8800"
                />
              </svg>

              <svg
                className="lg:w-auto w-4"
                width="18"
                height="28"
                viewBox="0 0 18 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.736 11.6029C14.7085 10.3765 15.3871 8.94801 15.7208 7.4248L17.9902 7.91118C17.5822 9.77383 16.7523 11.5207 15.5632 13.0203C14.374 14.52 12.8564 15.7333 11.1247 16.5691C10.039 17.0931 8.88679 17.4602 7.70338 17.6621L9.40224 23.9331C9.60541 24.6831 10.3848 25.1281 11.143 24.9272C11.9012 24.7262 12.3512 23.9554 12.1481 23.2054L11.6004 21.1839C11.5994 21.1842 11.5985 21.1844 11.5975 21.1847L11.5311 20.9279L11.1326 19.4569L11.1494 19.4524L11.0219 18.9596C12.5726 18.5672 14.011 17.8268 15.2256 16.7958L16.7379 18.5387C15.8458 19.296 14.855 19.925 13.795 20.4107L14.3911 22.611C14.9262 24.5862 13.741 26.6164 11.744 27.1457C9.74702 27.6749 7.69434 26.5028 7.15924 24.5276L5.34869 17.8443C3.49594 17.8173 1.67048 17.3909 0 16.5939L1.00894 14.5252C2.4282 15.2024 3.98424 15.5524 5.56001 15.5489C7.13577 15.5454 8.69021 15.1885 10.1064 14.505C11.5225 13.8215 12.7635 12.8292 13.736 11.6029Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.89697 7.09473L10.2407 5.12697L10.8859 7.53476C11.4025 9.46295 10.2583 11.4449 8.33009 11.9615L4.47763 12.9938L2.89697 7.09473ZM5.49198 8.59296L5.97586 10.3988L8.14286 9.81815C8.74127 9.65781 9.09639 9.04272 8.93605 8.44432L8.7425 7.72198L5.49198 8.59296Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.54217 5.77085C2.16804 4.37458 2.99665 2.93938 4.39292 2.56525L11.2551 0.726533L11.8788 3.05423C12.4133 5.04891 11.2296 7.09919 9.23489 7.63366L3.4562 9.18206L2.54217 5.77085ZM4.45976 4.74091L4.95443 6.58705L8.92728 5.52253C9.65866 5.32655 10.0927 4.57478 9.89672 3.8434L9.75689 3.32154L4.45976 4.74091Z"
                  fill="black"
                />
              </svg>
              <span className="transition-all w-36 duration-300">
                Irani.Bio
              </span>
            </Link>
          </div>
          <svg
            className="hidden lg:flex"
            width="2"
            height="17"
            viewBox="0 0 2 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L0.999999 16"
              stroke="#E6E6E6"
              stroke-width="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="hidden lg:flex w-[60px] overflow-hidden gap-x-2 lg:hover:w-40 transition-all duration-300">
            <Link
              href={"https://irani.photos"}
              className="flex gap-x-2 items-center font-outfit font-medium text-black bg-white-shade-3 px-3 py-1 rounded-2xl"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="animate-pulse"
                  cx="15.5"
                  cy="15.5"
                  r="15.5"
                  fill="#FB8800"
                  fillOpacity="0.3"
                />
                <circle
                  className="animate-pulse"
                  cx="15.5"
                  cy="15.5"
                  r="9.5"
                  fill="#FB8800"
                />
              </svg>

              <svg
                className="lg:w-auto w-4"
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2573 11.5949C16.3375 10.2327 17.0912 8.64601 17.4619 6.9541L19.9827 7.49435C19.5295 9.56328 18.6077 11.5036 17.2868 13.1693C15.966 14.8351 14.2803 16.1828 12.3568 17.1112C11.1508 17.6932 9.87103 18.1009 8.55656 18.3252L10.4436 25.2908C10.6692 26.1238 11.5349 26.6181 12.3771 26.3949C13.2194 26.1717 13.7192 25.3155 13.4935 24.4825L12.8852 22.2371C12.8841 22.2374 12.883 22.2377 12.8819 22.2379L12.8082 21.9527L12.3655 20.3188L12.3843 20.3138L12.2427 19.7664C13.965 19.3306 15.5628 18.5082 16.9119 17.363L18.5917 19.2989C17.6008 20.14 16.5002 20.8388 15.3228 21.3782L15.9849 23.8222C16.5793 26.0161 15.2629 28.2713 13.0447 28.8591C10.8265 29.447 8.54651 28.145 7.95215 25.951L5.94108 18.5276C3.88312 18.4976 1.85549 18.024 0 17.1387L1.12069 14.8409C2.69713 15.5931 4.42551 15.9818 6.17579 15.978C7.92608 15.9741 9.65267 15.5776 11.2257 14.8184C12.7987 14.0592 14.1771 12.9571 15.2573 11.5949Z"
                  fill="black"
                />
                <circle cx="12.0628" cy="2.43729" r="1.70584" fill="black" />
                <path
                  d="M9.43674 11.288C8.90767 11.6544 8.27435 11.84 7.6312 11.8172C6.98805 11.7943 6.3695 11.5643 5.86776 11.1613C5.36601 10.7583 5.00794 10.2039 4.84691 9.5808C4.68588 8.95772 4.73053 8.29928 4.97418 7.70363"
                  stroke="black"
                  stroke-width="2.55876"
                />
                <path
                  d="M5.36861 7.01686C5.82438 6.42274 6.48679 6.0216 7.22447 5.89299C7.96215 5.76438 8.72122 5.91771 9.35115 6.32255C9.98107 6.72739 10.4359 7.35419 10.6253 8.07864C10.8147 8.80308 10.725 9.57227 10.3739 10.2336"
                  stroke="black"
                  stroke-width="2.55876"
                />
              </svg>

              <span className="transition-all w-[150px] duration-300">
                Irani.Photos
              </span>
            </Link>
          </div>
          <svg
            className="hidden lg:flex"
            width="2"
            height="17"
            viewBox="0 0 2 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L0.999999 16"
              stroke="#E6E6E6"
              stroke-width="2"
              strokeLinecap="round"
            />
          </svg>

          <Link href={"/"}>{props.LogoType}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

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
    { value: "About us", slug: "/about" },
    { value: "Blog", slug: "/blog" },
    { value: "FAQ", slug: "/faq" },
    { value: "Origin", slug: "/origin" },
    { value: "Privacy Policy ", slug: "/privacy-policy " },
    { value: "Contact us", slug: "/contact" },
  ]);

  const currentRoute = usePathname();

  const linkStyle =
    "h-full flex items-center hover:cursor-pointer transitaion-all";
  const activeStyle =
    linkStyle +
    "text-black border-t-4 border-black dark:text-white dark:border-white";
  const nonActiveStyle = linkStyle + " border-t-none";

  return (
    <nav className="z-[1013] bg-white lg:h-[8vh] shadow-deep absolute top-0 lg:top-[92%] w-full lg:border-t border-white-shade-4 soft-shadow">
      <div className="container flex gap-x-6 lg:gap-x-0 lg:justify-between items-center h-full">
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
          <div className="flex w-9 overflow-hidden gap-x-2 hover:w-28 transition-all duration-300">
            <Link href={"https://irani.bio"} className="flex gap-x-2 items-center font-outfit font-medium text-black bg-white-shade-3 p-3 rounded-2xl">
              <svg
                width="18"
                height="28"
                viewBox="0 0 18 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.736 11.6029C14.7085 10.3765 15.3871 8.94801 15.7208 7.4248L17.9902 7.91118C17.5822 9.77383 16.7523 11.5207 15.5632 13.0203C14.374 14.52 12.8564 15.7333 11.1247 16.5691C10.039 17.0931 8.88679 17.4602 7.70338 17.6621L9.40224 23.9331C9.60541 24.6831 10.3848 25.1281 11.143 24.9272C11.9012 24.7262 12.3512 23.9554 12.1481 23.2054L11.6004 21.1839C11.5994 21.1842 11.5985 21.1844 11.5975 21.1847L11.5311 20.9279L11.1326 19.4569L11.1494 19.4524L11.0219 18.9596C12.5726 18.5672 14.011 17.8268 15.2256 16.7958L16.7379 18.5387C15.8458 19.296 14.855 19.925 13.795 20.4107L14.3911 22.611C14.9262 24.5862 13.741 26.6164 11.744 27.1457C9.74702 27.6749 7.69434 26.5028 7.15924 24.5276L5.34869 17.8443C3.49594 17.8173 1.67048 17.3909 0 16.5939L1.00894 14.5252C2.4282 15.2024 3.98424 15.5524 5.56001 15.5489C7.13577 15.5454 8.69021 15.1885 10.1064 14.505C11.5225 13.8215 12.7635 12.8292 13.736 11.6029Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.89697 7.09473L10.2407 5.12697L10.8859 7.53476C11.4025 9.46295 10.2583 11.4449 8.33009 11.9615L4.47763 12.9938L2.89697 7.09473ZM5.49198 8.59296L5.97586 10.3988L8.14286 9.81815C8.74127 9.65781 9.09639 9.04272 8.93605 8.44432L8.7425 7.72198L5.49198 8.59296Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.54217 5.77085C2.16804 4.37458 2.99665 2.93938 4.39292 2.56525L11.2551 0.726533L11.8788 3.05423C12.4133 5.04891 11.2296 7.09919 9.23489 7.63366L3.4562 9.18206L2.54217 5.77085ZM4.45976 4.74091L4.95443 6.58705L8.92728 5.52253C9.65866 5.32655 10.0927 4.57478 9.89672 3.8434L9.75689 3.32154L4.45976 4.74091Z"
                  fill="black"
                />
              </svg>
              <span className="transition-all w-36 duration-300">
                Irani Bio
              </span>
            </Link>
          </div>
          <Link href={"/"}>{props.LogoType}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

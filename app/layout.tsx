"use client";

import Navigation from "@/components/Layout/Navigation";
import "./globals.css";

import { Open_Sans } from "next/font/google";
import { Outfit } from "next/font/google";

import MenuProvider from "@/context/MenuProvider";
import ThemeColorProvider from "@/context/ThemeColorProvider";
import HamburgerProvider from "@/context/HamburgerProvider";

import IraniWorldLogo from "@/components/Logo/IraniWorldLogo";

import { usePathname } from "next/navigation";
import IraniBio from "@/components/Logo/IraniBio";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname == "/bio") {
    return (
      <html lang="en" className="light">
        <body
          className={`w-full h-[92vh] lg:overflow-scroll dark:bg-[#10141c] ${openSans.variable} ${outfit.variable}`}
        >
          <MenuProvider>
            <ThemeColorProvider>
              {children}
              <Navigation LogoType={<IraniBio classes="lg:w-auto" />} />
            </ThemeColorProvider>
          </MenuProvider>
        </body>
      </html>
    );
  }
  if (pathname == "/news") {
    return (
      <html lang="en" className="light">
        <body
          className={`w-full h-full ${openSans.variable} ${outfit.variable}`}
        >
          <HamburgerProvider>
            <MenuProvider>
              <ThemeColorProvider>
                <main className="w-full h-[92vh] lg:overflow-scroll">
                  {children}
                  <Navigation
                    LogoType={<IraniWorldLogo classes="w-10 lg:w-auto" />}
                  />
                </main>
              </ThemeColorProvider>
            </MenuProvider>
          </HamburgerProvider>
        </body>
      </html>
    );
  }
  return (
    <html lang="en" className="light">
      <body
        className={`w-full h-[92vh] lg:overflow-scroll dark:bg-[#10141c] ${openSans.variable} ${outfit.variable}`}
      >
        <MenuProvider>
          <ThemeColorProvider>
            {children}
            <Navigation
              LogoType={<IraniWorldLogo classes="w-[95px] lg:w-auto" />}
            />
          </ThemeColorProvider>
        </MenuProvider>
      </body>
    </html>
  );
}

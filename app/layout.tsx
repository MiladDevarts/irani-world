import Navigation from "@/components/Layout/Navigation";
import "./globals.css";
import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import { Outfit } from "next/font/google";

import MenuProvider from "@/context/MenuProvider";
import ThemeColorProvider from "@/context/ThemeColorProvider";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Irani World",
  description: "For Persians",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`w-full h-[91vh] lg:overflow-scroll dark:bg-[#10141c] ${openSans.variable} ${outfit.variable}`}
      >
        <MenuProvider>
          <ThemeColorProvider>
            {children}
            <Navigation />
          </ThemeColorProvider>
        </MenuProvider>
      </body>
    </html>
  );
}

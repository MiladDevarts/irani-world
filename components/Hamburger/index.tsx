"use client";

import React, { useContext, useEffect, useRef } from "react";

import { MenuContext } from "@/context/MenuProvider";

import classNames from "classnames";
import { HamburgerContext } from "@/context/HamburgerProvider";

const HamburgerNav = () => {

  let menuVisibilty = useContext(MenuContext);
  let hamVisibilty = useContext(HamburgerContext);

  const handleMenu = () => {
    menuVisibilty.setMenu(!menuVisibilty.menu);  
  };

  const HamburgerClasses = classNames("hamburger hamburger-inner", {
    "z-[1000] white-bar absolute": menuVisibilty.menu,
    "z-1": !menuVisibilty.menu,
  });
  

  return (
    <div className="block lg:hidden">
      <input
        onClick={handleMenu}
        onChange={() => {
          hamVisibilty.setThreeLineHam(!hamVisibilty.threeLineHam);
        }}
        type="checkbox"
        id="menu"
        className="menu visuallyHidden"
      />
      <label htmlFor="menu">
        <div className={HamburgerClasses}>
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </div>
  );
};

export default HamburgerNav;

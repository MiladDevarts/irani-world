"use client";

import React, { useEffect, useState } from "react";

export const HamburgerContext = React.createContext();

export function HamburgerProvider({ children }) {
  const [threeLineHam, setThreeLineHam] = useState(false);

  useEffect(() => {
    setMenu(menu);
  }, menu);

  return (
    <HamburgerContext.Provider value={{ threeLineHam, setThreeLineHam }}>
      {children}
    </HamburgerContext.Provider>
  );
}

export default HamburgerProvider;

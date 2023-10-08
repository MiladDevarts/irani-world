import React from "react";

const Switch = () => {
  return (
    <div className="switch-container" id="app">
      <label htmlFor="switch" className="switch">
        <input id="switch" type="checkbox" className="switch__CheckBox" />
        <span className="switch__Label switch__Label--Day font-out dark:text-white">DAY</span>
        <div className="switch__Slider">
          <div className="switch__SliderDot"></div>
        </div>
        <span className="switch__Label switch__Label--Night font-outfit">
          NIGHT
        </span>
      </label>
    </div>
  );
};

export default Switch;

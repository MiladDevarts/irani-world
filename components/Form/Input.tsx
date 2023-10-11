import React from "react";

interface InputProps {
  id: string;
  inputType: string;
  placeHolder: string;
  classes: string;
  label: string;
  iconComp: React.ReactNode;
  isRequired: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <div className="w-full ">
        <label
          className="block text-lg font-semibold py-4 lg:py-2 text-black"
          htmlFor={props.id}
        >
          {props.label}
          {props.isRequired && <span className="text-[#FF0000] ml-2 inline-block">*</span>}
        </label>
        <div
          className={`${props.classes} group text-black font-opensans flex items-center gap-x-4 bg-white-shade-3 font-medium rounded-xl w-full h-12 px-4`}
        >
          {props.iconComp}
          <input
            className={`${props.classes} py-2 lg:py-0 w-full h-full group-focus-within:outline group-focus:outline-blue rounded-xl bg-white-shade-3 focus:outline-none focus:shadow-none`}
            id={props.id}
            type={props.inputType}
            placeholder={props.placeHolder}
          />
        </div>
      </div>
    </>
  );
};

export default Input;

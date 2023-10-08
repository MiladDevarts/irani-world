import React from "react";
import { Button, Input, Textarea } from "../Form";
import User from "../Icons/Outline/User";
import { Email, Location } from "../Icons/Outline";
import Countries from "./Countries";

const ContactForm = () => {
  return (
    <>
      <section className="w-full">
        <div className="relative z-[100] flex flex-col gap-y-5 bg-white  py-5 px-6 soft-shadow rounded-3xl">
          <div className="lg:flex gap-x-12">
            <Input
              id={"lastname"}
              inputType={"text"}
              placeHolder={"Walker"}
              classes={"w-full"}
              label={"First name"}
              iconComp={<User />}
            />
            <Input
              id={"firstname"}
              inputType={"text"}
              placeHolder={"Jason"}
              classes={"w-full"}
              label={"Last name"}
              iconComp={<User />}
            />
          </div>
          <div className="lg:flex gap-x-14">
            <Input
              id={"email"}
              inputType={"text"}
              placeHolder={"unreal@outlook.com"}
              classes={"w-full"}
              label={"E-mail address"}
              iconComp={<Email />}
            />
            <Input
              id={"city"}
              inputType={"text"}
              placeHolder={"Newyourk"}
              classes={"w-full"}
              label={"City"}
              iconComp={<Location />}
            />
          </div>
          <Textarea
            id={"message"}
            placeHolder={
              "Hi, unfortunately i cant have access to my acc please check if there is any prob there"
            }
            classes={"w-full"}
            label={"Message"}
          />
          <Button content={"Send message"} classes={"py-5"} />
        </div>
      </section>
    </>
  );
};

export default ContactForm;

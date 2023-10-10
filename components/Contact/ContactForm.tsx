import React from "react";

import User from "../Icons/Outline/User";
import { Email, Location } from "../Icons/Outline";
import { Button, Input, Textarea } from "../Form";
import Modal from "../Modal";

const ContactForm = () => {
  return (
    <>
      {/* <Modal /> */}
      <section className="w-full lg:w-1/2">
        <div className="relative z-[100] flex flex-col gap-y-2 w-full px-10 py-5 border border-white-shade-4 rounded-3xl">
          <div className="lg:flex gap-x-12">
            <Input
              id={"firstname"}
              inputType={"text"}
              placeHolder={"Walker"}
              classes={"w-full"}
              label={"First name"}
              iconComp={<User />}
              isRequired={true}

            />
            <Input
              id={"lastname"}
              inputType={"text"}
              placeHolder={"Jason"}
              classes={"w-full"}
              label={"Last name"}
              iconComp={<User />}
              isRequired={false}
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
              isRequired={true}
            />
            <Input
              id={"city"}
              inputType={"text"}
              placeHolder={"Newyourk"}
              classes={"w-full"}
              label={"City"}
              iconComp={<Location />}
              isRequired={true}
            />
          </div>
          <div className="w-full lg:flex gap-x-14">
            <Input
              id={"from"}
              inputType={"text"}
              placeHolder={"Company, Group, Community, Brand"}
              classes={"w-full"}
              label={"From"}
              iconComp={<Email />}
              isRequired={false}
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
          <Button content={"Send message"} classes={"py-5 mt-3"} />
        </div>
      </section>
    </>
  );
};

export default ContactForm;

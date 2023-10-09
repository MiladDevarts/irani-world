import React from "react";

const HeroImage = () => {
  return (
    <>
      {/* Cernter => Image + Logo - LG */}
      <section
        className="relative flex justify-center py-10 w-full lg:w-1/3 h-full lg:h-[92vh]  my-20 lg:my-0 bg-center bg-cover bg-no-repeat rounded-3xl lg:rounded-none bg-animate"
        style={{ backgroundImage: `url('/images/home/background.png')` }}
      >
        <div className="flex items-center gap-x-3 w-[80%] bottom-10 absolute">
          <span className="text-2xl font-semibold w-1/12">01</span>
          <div className="relative w-11/12 h-1 bg-white-shade-10">
                <div className="w-1/3 h-full bg-white"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroImage;

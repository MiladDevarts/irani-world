import React from "react";

const page = () => {
  return (
    <main className="flex container">
      <div className="w-3/4 pt-28">
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          magni dolorum exercitationem architecto fugiat corporis, debitis
          harum, sed ipsam eum labore omnis nam excepturi iusto molestiae
          incidunt autem id molestias.
        </p>
      </div>
      <div className="relative w-1/4 h-screen">
        <div className="fixed w-full h-full">
          <p className="text-white"></p>
        </div>
      </div>
    </main>
  );
};

export default page;

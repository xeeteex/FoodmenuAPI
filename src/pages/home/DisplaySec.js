import React from "react";

export const DisplaySec = () => {
  return (
    <div className="grid grid-cols-2 place-items-center space-y-8 sm:grid-cols-1 sm:mb-12">
      <div className="dis-img sm:h-[400px]">
        <dotlottie-player
          src="https://lottie.host/27af2812-b66e-470e-aa2b-a691e6b34886/cozAQH3gRT.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>

      <div className="dis-info sm:text-center sm:px-4">
        <h1 className="text-3xl text-[#7f7d7d]  font-bold ">Im Zon</h1>
        <p className="text-pink-600 ita">Some Dev, Freelancer, Rounder</p>
        <p className="text-[#5c5a5a] ">
          In the heart of the night, when the world’s asleep, I’m diving deep
          into lines of code, promises to keep, With my laptop’s glow, I bring
          dreams to life, Building worlds from scratch, with a keyboard and a
          knife. I’m a developer, in the digital sea, Crafting magic from the
          ether, setting ideas free, Lines of logic, realms of wonder, in
          binary, I’m a coder, a creator, writing my own legacy.
        </p>
      </div>
    </div>
  );
};

export default DisplaySec;

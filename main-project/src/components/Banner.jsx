import React from "react";
import banner from "/latarbiru.svg";

const Banner = () => {
  const backgroundStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="h-[75vh] font-heading bg-left-1 lg:bg-[0px]" style={backgroundStyle}>
      <div className="section-container relative">
        <div className="flex flex-col justify-center items-center absolute inset-x-0 top-32">
          <div class="flex justify-center items-center">
            <h1 class="text-mint text-8xl">Blue</h1>
            <h1 class="text-white text-8xl mx-2">Echo</h1>
            <h1 class="text-yellowlight text-8xl">Arts</h1>
          </div>
          <a href="/signup" className="rounded-full mt-5 px-5 py-4 cursor-pointer text-xl bg-blueberry font-bold font-primary text-yellowlight hover:bg-orange-400 hover:duration-300">
            Get Started!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

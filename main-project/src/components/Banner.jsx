import React from "react";
import banner from "/children-leaf-resized2.svg";

const Banner = () => {
  const backgroundStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="h-[100vh] font-heading bg-left-1 lg:bg-[0px]" style={backgroundStyle}>
      <div className="section-container relative">
        <div className="flex flex-col justify-center items-center absolute inset-x-0 top-32">
          <h1 className="text-white text-2xl text-center text-4xl bg-lapis-lazuli">Selamat Datang di AFOCADO!</h1>
          <a href="/signup" className="rounded-lg mt-5 px-4 py-3 cursor-pointer text-xl bg-happy-yellow font-bold font-primary text-white border-2 border-lapis-lazuli hover:bg-orange-400 hover:duration-300">
            Get Started!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

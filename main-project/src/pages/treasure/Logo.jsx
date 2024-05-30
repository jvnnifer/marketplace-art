import React from "react";
import book1 from "/adhdbook1.jpg";

const Logo = () => {
  return (
    <div>
      <h1 className="mx-5 font-bold font-primary text-dark-blue text-2xl">Beberapa saran untuk kamu:</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-[350px] h-[450px] bg-transparent cursor-pointer group  rounded-3xl perspective-1000 m-5">
          <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500">
            <div className="w-full h-full absolute rounded-3xl overflow-hidden">
              <img src={book1} className="w-full h-full" />
            </div>
            <div className="absolute rotate-y-180 w-full h-full bg-blue-700 bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden">
              <div>
                <span className="font-bold text-2xl">A BEGINNER'S GUIDE ON PARENTING CHILDREN WITH ADHD</span>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="font-bold">BLURB</span>
                <span className="text-md">
                  The day your child is diagnosed with ADHD is not doomsday, but rather the beginning of a new journey to self-discovery and successful living. As a parent, raising a child with ADHD is not a burden, and it shouldn’t feel
                  like one.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;

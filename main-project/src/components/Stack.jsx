import React from "react";
import image from "/female.svg";
import image2 from "/female.svg";
import image3 from "/female.svg";
import image4 from "/female.svg";

const Stack = () => {
  return (
    <div className="section-container px-3">
      <div className="bg-white px-5 pt-14">
        <h1 className="text-dark-blue font-bold text-4xl text-center">We provides some games and reccommendation</h1>
        <ul id="cards" className="list-none grid grid-cols-1 gap-[4vw] grid-rows-4">
          <li class="card z-1 sticky top-[10vh] pt-[1.5rem]" id="card1">
            <div className="box-border rounded-lg h-[50vh] flex flex-col lg:flex-row justify-center items-center bg-celestial-blue text-white p-5">
              <h1 className="text-lg lg:text-2xl font-semibold font-primary">We are trusted for 10+ years to providing recommendations in accordance with World Health Organization and reliable sources</h1>
              <img src={image} alt="" />
            </div>
          </li>
          <li class="card z-2 sticky top-[10vh] pt-[3rem]" id="card2">
            <div className="box-border rounded-lg h-[50vh] flex flex-col lg:flex-row justify-center justify-center items-center bg-green-700 text-white p-5">
              <img src={image3} alt="" class="w-full h-64" />
              <h1 className="text-lg lg:text-2xl font-semibold font-primary">We believe that parents are the most impactful figure for children's growth, so we have reccommendation for parents as well</h1>
            </div>
          </li>
          <li class="card z-3 sticky top-[12vh] pt-[4rem]" id="card3">
            <div className="box-border rounded-lg h-[50vh] flex flex-col lg:flex-row justify-center justify-center items-center bg-burnt-cheese text-white p-5">
              <h1 className="text-lg lg:text-2xl mt-5 font-semibold font-primary">As a kid, you could access all the games, literature reccommendation, some tips with no cost at all.</h1>
              <img src={image4} alt="" class="lg:h-64" />
            </div>
          </li>
          <li class="card z-4 sticky top-[15vh]  pt-[6rem]" id="card4">
            <div className="box-border rounded-lg h-[50vh] flex flex-col lg:flex-row justify-center justify-center items-center bg-happy-yellow text-dark-blue">
              <img src={image2} alt="" className="h-64 lg:h-72" />
              <h1 className="text-sm lg:text-2xl font-semibold font-primary p-5">
                As a parent, you could access all the ADHD treatment reccommendation, tips to enhance children's concentration, literature that suits parenting with ADHD kids, and many more for free.
              </h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stack;

import React from "react";
import image1 from "/socialmedia.svg";
import image2 from "/desainlogo.svg";
import image3 from "/voiceover.svg";

const Cards = () => {
  return (
    <div className="bg-neutral-blue">
      <h1 className="text-white text-center p-10 text-4xl font-primary font-bold">Illustration</h1>
      <div className="bg-cream rounded-t-super-big pt-2 pb-5">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="card w-64 bg-happy-yellow shadow-xl mx-8">
            <figure className="px-10 pt-3">
              <img src={image1} className="w-56" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title font-bold">Social Media Marketing</h2>
              <p className="font-semibold">digital marketing strategies that utilize social media platforms</p>
            </div>
          </div>
          <div className="card w-64 bg-grayish shadow-xl mx-8">
            <figure className="px-10 pt-3">
              <img src={image2} className="w-56" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title font-bold">Design Logo</h2>
              <p className="font-semibold">a picture or sketch whose purpose is to introduce a brand, company, region or organization.</p>
            </div>
          </div>
          <div className="card w-64 bg-burnt-cheese shadow-xl mx-8">
            <figure className="px-10 pt-3">
              <img src={image3} className="w-56" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title font-bold">Voice Over</h2>
              <p className="font-semibold">a production technique in which the sound produced is not part of the narrative.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

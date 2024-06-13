import React, { useState } from "react";
import photo1 from "/logo1.svg";
import photo2 from "/socialmediamarketing2.svg";

const Portofolio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="flex flex-col pl-5 pr-10 py-10 mt-20">
        <h1 className="font-bold text-2xl">I will be your social media marketing manager</h1>
        <div className="flex flex-row items-center pt-3">
          <img src={photo1} alt="" />
          <h1 className="font-semibold pl-2">Lorem Ipsum</h1>
        </div>
        <h1 className="text-[#032A8E] font-semibold border-b-2 mx-40 text-center border-[#228FF6]">Portofolios</h1>
        <img src={photo2} className="w-72 mt-5 mb-20 mx-auto" alt="" />
        <h1 className="pb-2 text-lg font-semibold">About this portofolio</h1>
        <h2 className="text-sm">This is my portofolio about social media marketing and the first time I did the job alone (without team).</h2>
      </div>
      <div className="flex flex-col pl-5 pr-10 py-10 lg:pl-20 mt-20">
        <div className="flex flex-col border-2 border-[#C7C8CB]">
          <h1 className="border-b-2 border-[#032A8E] font-bold p-3 text-center">Terms & Condition</h1>
          <div className="flex flex-col px-5 py-3">
            <h1 className="font-semibold text-[#032A8E]">Price</h1>
            <h2 className="font-semibold pb-2">$295</h2>
            <h1 className="font-semibold text-[#032A8E]">Benefit</h1>
            <h2 className="pb-2">Social Media OPTIMIZER 1.0 30Days Management 10 SEO POSTS(9 Static, 1 Reel)+10 Story Highlights #Hashtag Design Caption</h2>
            <h1 className="font-semibold text-[#032A8E]">Revision</h1>
            <h2 className="pb-2">Max 2 days</h2>
            <h1 className="font-semibold text-[#032A8E]">Delivery</h1>
            <h2 className="pb-2">21 days</h2>
            <button className="rounded-lg text-white bg-[#032A8E] my-3 py-2 font-bold">Continue to buy</button>
          </div>
          <div className="py-3"></div>
          <h1 className="border-b-2 border-[#032A8E] font-bold p-3 text-center">Our Contact</h1>
        </div>
      </div>
    </div>
  );
};
export default Portofolio;

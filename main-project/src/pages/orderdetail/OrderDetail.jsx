import React, { useState, useEffect } from "react";
import gopay from "/GOPAY1.png";
import ovo from "/OVO1.png";
import money1 from "/logomoney1.png";
import money2 from "/logomoney2.png";
import money3 from "/logomoney3.png";
import social from "/socialmediamarketing2.png";

const OrderDetail = () => {
  return (
    <div className="pt-8">
      <h1 className="text-center text-[#032A8E] pt-20 py-5 text-xl font-bold">Detail order</h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col px-6 min-w-[100vh] bg-[#B2DAFF] ml-10 px-3 rounded-lg mb-3 mr-12 py-3 text-[#2E3B82] font-semibold">
          <h1>Username</h1>
          <input type="text" id="username" name="username" class="mb-4 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
          <h1>Email</h1>
          <input type="text" id="email" name="email" class="mb-4 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
          <h1>Payment Option</h1>
          <div className="flex flex-row justify-between mb-4 pt-2">
            <img src={gopay} className="border-[#909090] bg-white rounded-lg w-24 h-14" alt="" />
            <img src={ovo} className="border-[#909090] bg-white rounded-lg w-24 h-14" alt="" />
          </div>
          <div className="flex items-center my-3">
            <div className="flex-grow border-t border-[#2E3B82] border-2"></div>
            <span className="mx-4 text-[#2E3B82]">OR</span>
            <div className="flex-grow border-t border-[#2E3B82] border-2"></div>
          </div>
          <div className="flex flex-row">
            <input type="radio" name="option" />
            <h1 className="px-3">Credit card</h1>
          </div>
          <div className="flex flex-row justify-between pt-4">
            <img src={money1} className="border-[#909090] bg-white rounded-lg w-24 h-18" alt="" />
            <img src={money2} className="border-[#909090] bg-white rounded-lg w-24 h-18" alt="" />
            <img src={money3} className="border-[#909090] bg-white rounded-lg w-24 h-18" alt="" />
          </div>
          <div className="flex">
            <a href="#" className="rounded-lg w-full text-white text-center bg-[#032A8E] mt-10 mb-2 py-2 font-bold">
              Confirm and buy
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-12 mr-10">
          <img src={social} className="w-93" alt="" />
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">LoremIpsum123</h1>
            <h1 className="font-semibold text-[#032A8E]">$295</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="py-4">Social Media OPTIMIZER 1.0, 30Days Management, 10 SEO POSTS(9 Static, 1 Reel)+10 Story Highlights, #️Hashtag Design Caption</h1>
            <h1 className="font-semibold text-[#032A8E]">Revision</h1>
            <h2>Max 2 times</h2>
            <h1 className="pt-4 font-semibold text-[#032A8E]">Delivery</h1>
            <h2>In 31 days</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;

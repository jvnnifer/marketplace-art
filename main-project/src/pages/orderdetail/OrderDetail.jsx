import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderDetail = () => {
  return (
    <div className="pt-8">
      <h1 className="flex flex-col items-center justify-center text-[#032A8E] pt-20 py-5 text-xl font-bold">Detail order</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col px-6">
          <div className="bg-[#B2DAFF] px-3 rounded-lg mb-3 py-3 text-[#2E3B82] font-semibold">
            <h1>Username</h1>
            <h1>Password</h1>
            <h1>Payment Option</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;

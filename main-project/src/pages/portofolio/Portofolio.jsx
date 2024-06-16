import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import photo1 from "/logo1.svg";
import facebook from "/Facebook.png";
import instagram from "/Instagram.png";
import twitter from "/TwitterX.png";

const Portofolio = () => {
  const { NoJasa } = useParams();
  const [portfolio, setPortfolio] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/order-page/${NoJasa}`);
        if (response.data.length > 0) {
          setPortfolio(response.data[0]);
        } else {
          console.error("Data not found for NoJasa:", NoJasa);
        }
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };
    fetchPortfolio();
  }, [NoJasa]);

  const handleBuyClick = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(`http://localhost:8081/client/${user.username}`);

      if (response.data.error) {
        console.error("Error fetching NoKlien:", response.data.error);
        return;
      }

      const NoKlien = response.data.NoKlien;
      const orderResponse = await axios.post(`http://localhost:8081/order`, {
        NoJasa,
        NoKlien,
        TanggalPesan: new Date(),
        Keterangan: portfolio.Keterangan,
      });
      console.log("Order response:", orderResponse.data);
      navigate("/order-detail");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col pl-5 pr-10 py-10 mt-20">
          <h1 className="font-bold text-2xl">{portfolio.NamaJenisJasa}</h1>
          <div className="flex flex-row items-center pt-3">
            <img src={photo1} alt="" />
            <h1 className="font-semibold pl-2">{portfolio.username}</h1>
          </div>
          <h1 className="text-[#032A8E] font-semibold border-b-2 mx-40 text-center border-[#228FF6]">Portofolios</h1>
          <img src={`/${portfolio.Nama}`} className="w-72 mt-5 mb-20 mx-auto" alt="" />
          <h1 className="pb-2 text-lg font-semibold">About this portofolio</h1>
          <h2 className="text-sm pb-4">{portfolio.KeteranganPortofolio}</h2>
          <h1 className="pb-2 text-lg font-semibold">Rating</h1>
          <div class="flex items-center">
            <img width="25" height="25" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1" />
            <img width="25" height="25" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1" />
            <img width="25" height="25" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1" />
            <img width="25" height="25" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1" />
            <img width="25" height="25" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1" />
          </div>
        </div>
        <div className="flex flex-col pl-5 pr-10 py-10 lg:pl-20 mt-20">
          <div className="flex flex-col border-2 border-[#C7C8CB]">
            <h1 className="border-b-2 border-[#032A8E] font-bold p-3 text-center">Terms & Condition</h1>
            <div className="flex flex-col px-5 py-3">
              <h1 className="font-semibold text-[#032A8E]">Price</h1>
              <h2 className="font-semibold pb-2">${portfolio.Harga}</h2>
              <h1 className="font-semibold text-[#032A8E]">Benefit</h1>
              <h2 className="pb-2">{portfolio.Keterangan}</h2>
              <h1 className="font-semibold text-[#032A8E]">Revision</h1>
              <h2 className="pb-2">{portfolio.revision}</h2>
              <h1 className="font-semibold text-[#032A8E]">Delivery</h1>
              <h2 className="pb-2">{portfolio.delivery}</h2>
              <button onClick={handleBuyClick} className="rounded-lg text-white text-center bg-[#032A8E] my-3 py-2 font-bold">
                Continue to buy
              </button>
            </div>
            <div className="py-3"></div>
            <h1 className="border-b-2 border-[#032A8E] font-bold p-3 text-center">Our Contact</h1>
            <div className="flex flex-row items-top justify-between pb-10 px-3">
              <img src={facebook} className="h-10" alt="" />
              <img src={twitter} className="h-10" alt="" />
              <img src={instagram} className="h-10" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portofolio;

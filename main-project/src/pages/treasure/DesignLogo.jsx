import React, { useState, useEffect } from "react";
import axios from "axios";
import photo1 from "/logo0.jpg";
import photo2 from "/logo1.svg";
import photo3 from "/logo3.svg";
import photo4 from "/logo2.svg";

const DesignLogo = ({ category }) => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        console.log("Fetching portfolios for category:", category);
        const response = await axios.get(`http://localhost:8081/illustration/${category}`, {
          params: { category },
        });
        setPortfolios(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };
    fetchPortfolios();
  }, [category]);
  return (
    <div class="flex flex-col lg:flex-row m-5">
      {portfolios.map((portfolio) => (
        <div key={portfolio.NoJasa} className="flex flex-col w-64 mx-20">
          <img src={photo1} className="w-64" />
          <div className="flex flex-row items-center pt-3">
            <img src={photo2} />
            <h1 className="font-semibold pl-2">{portfolio.username}</h1>
          </div>
          <p className="font-semibold">{portfolio.NamaJenisJasa}</p>
        </div>
      ))}
      <div className="flex flex-col w-64 mx-20">
        <img src={photo3} className="w-64" />
        <div className="flex flex-row items-center pt-3">
          <img src={photo4} />
          <h1 className="font-semibold pl-2">Mangrove</h1>
        </div>
        <p className="font-semibold">I will design, edit, redo, resize your logo</p>
      </div>
    </div>
  );
};

export default DesignLogo;

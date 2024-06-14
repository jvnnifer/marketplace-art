import React, { useState, useEffect } from "react";
import axios from "axios";
import photo2 from "/logo2.svg";
import photo4 from "/logo1.svg";
import photo1 from "/male.svg";
import photo3 from "/female.svg";

const VoiceOver = ({ category }) => {
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
    <div>
      <div class="flex flex-col lg:flex-row m-5">
        {portfolios.map((portfolio) => (
          <div key={portfolio.NoJasa} className="flex flex-col w-64 mx-20">
            <img src={photo1} className="w-64" alt="" />
            <div className="flex flex-row items-center pt-3">
              <img src={photo2} alt="" />
              <a href="#" className="font-semibold pl-2">
                {portfolio.username}
              </a>
            </div>
            <p className="font-semibold">{portfolio.NamaJenisJasa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceOver;

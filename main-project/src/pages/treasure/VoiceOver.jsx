import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import photo2 from "/logo2.svg";

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
            <img src={`/${portfolio.Nama}`} className="w-64" alt="" />
            <div className="flex flex-row items-center pt-3">
              <img src={photo2} alt="" />
              <Link to={`/order-page/${portfolio.NoJasa}`} className="font-semibold pl-2">
                {portfolio.username}
              </Link>
            </div>
            <p className="font-semibold">{portfolio.NamaJenisJasa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceOver;

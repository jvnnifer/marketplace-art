import React, { useState } from "react";
import LogoPage from "./LogoPage";
import Painting from "./Painting";
import PsyRec from "./PsyRec";

const Reccomend = () => {
  const [activeTab, setActiveTab] = useState("LogoPage");

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-full bg-lapis-lazuli">
      <div className="pt-24">
        <div className="bg-white">
          <div className="section-container">
            <h1 className="text-center text-4xl font-primary font-bold text-dark-blue py-5">Jelajahi layanan</h1>
            <h2 className="font-semibold text-center">Dapatkan rekomendasi dan tips seputar pendidikan untuk anak ADHD disini!</h2>
            <div className="flex flex-row gap-4 m-5 justify-evenly items-center text-xl">
              <a className={"flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer " + (activeTab === "LogoPage" ? "border-lapis-lazuli font-semibold" : "border-blue-300 text-dark-blue")} onClick={() => handleTab("LogoPage")}>
                Logo
              </a>
              <a className={"flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer " + (activeTab === "Painting" ? "border-lapis-lazuli font-semibold" : "border-blue-300 text-dark-blue")} onClick={() => handleTab("Painting")}>
                Painting
              </a>
              <a
                className={"flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer " + (activeTab === "Psikolog Anak" ? "border-lapis-lazuli font-semibold" : "border-blue-300 text-dark-blue")}
                onClick={() => handleTab("Psikolog Anak")}
              >
                Psikolog Anak
              </a>
            </div>
            {activeTab === "LogoPage" && <LogoPage />}
            {activeTab === "Painting" && <Painting />}
            {activeTab === "Psikolog Anak" && <PsyRec />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reccomend;

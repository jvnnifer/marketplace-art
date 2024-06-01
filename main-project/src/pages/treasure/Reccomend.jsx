import React, { useState } from "react";
import SocialMediaMarketing from "./SocialMediaMarketing";
import DesignLogo from "./DesignLogo";
import PsyRec from "./PsyRec";

const Reccomend = () => {
  const [activeTab, setActiveTab] = useState("SocialMediaMarketing");

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="pt-20">
      <div className="bg-white">
        <div className="section-container">
          <h1 className="text-center text-4xl font-primary font-bold text-dark-blue py-5">Jelajahi layanan</h1>
          <h2 className="font-semibold text-center">Dapatkan rekomendasi dan tips seputar pendidikan untuk anak ADHD disini!</h2>
          <div className="flex flex-row gap-4 m-5 justify-evenly items-center text-xl">
            <a
              className={"flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer " + (activeTab === "SocialMediaMarketing" ? "border-lapis-lazuli font-semibold" : "border-blue-300 text-dark-blue")}
              onClick={() => handleTab("SocialMediaMarketing")}
            >
              Social Media Marketing
            </a>
            <a
              className={"flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer " + (activeTab === "DesignLogo" ? "border-lapis-lazuli font-semibold" : "border-blue-300 text-dark-blue")}
              onClick={() => handleTab("DesignLogo")}
            >
              Design Logo
            </a>
            <a
              className={"flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer " + (activeTab === "Psikolog Anak" ? "border-lapis-lazuli font-semibold" : "border-blue-300 text-dark-blue")}
              onClick={() => handleTab("Psikolog Anak")}
            >
              Psikolog Anak
            </a>
          </div>
          {activeTab === "SocialMediaMarketing" && <SocialMediaMarketing />}
          {activeTab === "DesignLogo" && <DesignLogo />}
          {activeTab === "Psikolog Anak" && <PsyRec />}
        </div>
      </div>
    </div>
  );
};

export default Reccomend;

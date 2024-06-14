import React, { useState } from "react";
import SocialMediaMarketing from "./SocialMediaMarketing";
import DesignLogo from "./DesignLogo";
import VoiceOver from "./VoiceOver";

const Reccomend = () => {
  const [activeTab, setActiveTab] = useState("SocialMediaMarketing");
  const [category, setCategory] = useState("Social Media Marketing");

  const handleTab = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "SocialMediaMarketing") {
      setCategory("Social Media Marketing");
    } else if (tabName === "DesignLogo") {
      setCategory("Design Logo");
    } else if (tabName === "VoiceOver") {
      setCategory("Voice Over");
    }
  };
  return (
    <div className="pt-20">
      <div className="bg-white">
        <div className="section-container">
          <h1 className="text-center text-4xl font-primary font-bold text-dark-blue py-5">EXPLORE OUR SERVICES</h1>
          <h2 className="font-semibold text-center">Get the reccomendation of your favorite artist!</h2>
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
            <a className={"flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer " + (activeTab === "VoiceOver" ? "border-lapis-lazuli font-semibold" : "border-blue-300 text-dark-blue")} onClick={() => handleTab("VoiceOver")}>
              Voice Over
            </a>
          </div>
          {activeTab === "SocialMediaMarketing" && <SocialMediaMarketing category={category} />}
          {activeTab === "DesignLogo" && <DesignLogo category={category} />}
          {activeTab === "VoiceOver" && <VoiceOver category={category} />}
        </div>
      </div>
    </div>
  );
};

export default Reccomend;

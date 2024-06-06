import React from "react";
import photo1 from "/socialmediamarketing.svg";
import photo3 from "/socialmediamarketing2.svg";
import photo2 from "/logo2.svg";
import photo4 from "/logo1.svg";

const SocialMediaMarketing = () => {
  return (
    <div>
      <div class="flex flex-col lg:flex-row m-5">
        <div className="flex flex-col w-64 mx-20">
          <img src={photo1} className="w-64" />
          <div className="flex flex-row items-center pt-3">
            <img src={photo2} />
            <h1 className="font-semibold pl-2">Van Houtten</h1>
          </div>
          <p className="font-semibold">I will do a modern minimalist logo design for your business</p>
        </div>
        <div className="flex flex-col w-64 mx-20">
          <img src={photo3} className="w-64" />
          <div className="flex flex-row items-center pt-3">
            <img src={photo4} />
            <h1 className="font-semibold pl-2">Mangrove</h1>
          </div>
          <p className="font-semibold">I will design, edit, redo, resize your logo</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;

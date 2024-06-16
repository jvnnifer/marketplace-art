import React from "react";
import image from "/female.svg";

const Info = () => {
  const backgroundInfo = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="bg-light-cyan">
      <h1 className="text-center text-dark-blue text-4xl font-primary font-extrabold pt-5">About AFOCADO</h1>
      <div className="h-[100vh] bg-no-repeat bg-cover pt-10 bg-[-120px] lg:bg-[0px]" style={backgroundInfo}>
        <div className="section-container">
          <div className="flex flex-col lg:flex-row text-dark-blue text-center justify-between">
            <div className="flex flex-col">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item bg-happy-yellow">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">What is AFOCADO?</div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item bg-white ">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">Apa yang bisa saya lakukan di AFOCADO?</div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

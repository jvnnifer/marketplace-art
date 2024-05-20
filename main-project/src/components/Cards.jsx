import React from "react";
import image1 from "/child1removebg.svg";
import image2 from "/child2removebg.svg";
import image3 from "/child3removebg.svg";

const Cards = () => {
  return (
    <div className="bg-neutral-blue mb-5">
      <h1 className="text-white text-center p-10 text-4xl font-primary font-bold">What should we know</h1>
      <div className="bg-white section-container rounded-t-super-big pt-2">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="card w-64 bg-green-600 shadow-xl mx-8">
            <figure className="px-10 pt-3">
              <img src={image1} className="w-96" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title">Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet angsa busa rasa kala</p>
            </div>
          </div>
          <div className="card w-64 bg-dark-blue shadow-xl mx-8">
            <figure className="px-10 pt-3">
              <img src={image3} className="w-96" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title">Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet angsa busa rasa kala</p>
            </div>
          </div>
          <div className="card w-64 bg-burnt-cheese shadow-xl mx-8">
            <figure className="px-10 pt-3">
              <img src={image2} className="w-96" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title">Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet angsa busa rasa kala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";

const Promote = () => {
  return (
    <div className="w-full bg-light-cyan py-10">
      <div className="section-container">
        <h1 className="text-dark-blue text-center font-bold text-4xl font-primary">Let's walk with us</h1>
        <div class="border-l-2 border-blue-300 mt-10">
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-xl font-bold">Sign in with your email</h1>
              <h3>You will be directed to choose a role.</h3>
            </div>
          </div>
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-celestial-blue text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-xl font-bold">Choose your role</h1>
              <h3>We need to know you are a parent or a child, since the reccommendation will be different</h3>
            </div>
          </div>

          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-lapis-lazuli text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-blue-900 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-blue-700 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-xl font-bold">Enjoy your time</h1>
              <h3>Make sure you choose a recommendation that suits your needs, if you are a child play the available games as you please</h3>
            </div>
          </div>

          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-dark-blue text-white rounded mb-10 flex-col md:flex-row">
            <div class="w-5 h-5 bg-blue-950 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-blue-800 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-xl font-bold">Gives us review or critics</h1>
              <h3>We will accept all criticism and suggestions you gave to us for our progress to develop this site, make sure to use polite words, Thank You!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promote;

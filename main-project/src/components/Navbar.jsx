import React, { useEffect, useState } from "react";
import logo from "/BLUEECHOARTS.svg";
// import { useLocation } from "react-router-dom";

const Navbar = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.querySelector(".navbar");
  //     const scrolled = window.scrollY;
  //     const scrollThreshold = 30;

  //     scrolled > scrollThreshold ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled");
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // buat ngatur checkbox pas dropdown saat tampilannya jadi responsive
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  const navItems = (
    <>
      <li className="lg:bg-transparent text-white text-lg mr-0 lg:mr-5">
        <a href="/">Home</a>
      </li>
      <li className="lg:bg-transparent text-yellowlight text-lg lg:mr-5 border-1 border-transparent lg:border-2 lg:border-yellowlight rounded-lg hover:bg-yellowlight hover:text-burnt-cheese hover:duration-300">
        <a href="/illustration">Illustration</a>
      </li>
      <li className="text-white text-lg lg:mr-5 lg:bg-burnt-cheese text-white hover:bg-happy-yellow rounded-lg hover:duration-300">
        <a href="/signup">Sign in</a>
      </li>
    </>
  );

  return (
    <header className="relative z-[2]">
      <div className="fixed navbar font-primary bg-lapis-lazuli">
        <div className="section-container">
          <div className="navbar-start">
            <details className="dropdown text-white lg:hidden pt-10" open={isChecked ? "open" : ""}>
              <summary className="list-none">
                <label className="swap swap-rotate">
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </summary>
              <ul className="menu menu-xl dropdown-content mt-5 p-2 shadow rounded-box w-screen bg-lapis-lazuli h-screen">{navItems}</ul>
            </details>
            <div className="text-white font-semibold text-lg invisible lg:visible">Hello, Guest!</div>
          </div>
          <div className="navbar-center">
            <img src={logo} className="w-20" alt="" />
          </div>
          <div className="navbar-end hidden lg:flex items-center">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

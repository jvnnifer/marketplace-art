import React from "react";
import logo from "/BLUEECHOARTS.svg";
import twitter from "/twitterlogo.svg";
import ig from "/logoig.svg";
import youtube from "/youtubelogo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-lapis-lazuli text-primary">
      <div className="section-container grid grid-cols-1 lg:grid-cols-4 gap-5 text-white">
        <div>
          <img src={logo} alt="" className="w-24" />
          <p className="font-bold">BlueEchoArts</p>
          <p className="font-medium">Providing reliable art services since 2090</p>
        </div>
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Connect with us</h6>
          <a className="link link-hover flex flex-row">
            <img src={twitter} alt="" className="w-8" />
            <p className="flex flex-col justify-center">Twitter/X</p>
          </a>
          <a className="link link-hover flex flex-row">
            <img src={ig} alt="" className="w-6 mx-1 my-2" />
            <p className="flex flex-col justify-center">Instagram</p>
          </a>
          <a className="link link-hover flex flex-row">
            <img src={youtube} alt="" className="w-8" />
            <p className="flex flex-col justify-center">Youtube</p>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

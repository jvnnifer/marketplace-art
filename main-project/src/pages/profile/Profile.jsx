import React, { useEffect, useState } from "react";
import profile from "/profile-kosong.jpeg";
import Logout from "./logout/LogOut";

const Profile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const handleStorageChange = () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    };

    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="pt-10">
      <div className="bg-[#B2DAFF] pt-20 items-center justify-center flex flex-col pb-10">
        <h1 className="text-white text-center font-bold text-xl">ACCOUNT</h1>
        <div className="w-[100vh] bg-white rounded-lg px-10 py-8 mt-5">
          <div className="flex flex-row justify-end">
            <div className="text-[#37F3DC] font-semibold border-solid border-2 border-[#37F3DC] rounded-full px-2 py-1">Online</div>
          </div>
          <div className="justify-center items-center flex flex-col">
            <img src={profile} className="mx-auto rounded-full w-24" alt="" />
            <h1 className="font-bold">Your display name</h1>
            <h2>@{user.username}</h2>
          </div>
          <div className="flex flex-row items-start justify-between">
            <h1>From</h1>
            <h1>Indonesia</h1>
          </div>
          <div className="flex flex-row items-start justify-between">
            <h1>Member since</h1>
            <h1>June 2024</h1>
          </div>
          <div className="justify-center px-10 pt-5 flex flex-col ">
            <button className="font-bold rounded-full text-center px-3 py-2 text-white bg-[#A6A6A6]">Order History</button>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Profile;

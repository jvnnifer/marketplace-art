import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.setItem("isLoggedIn", false);
    navigate("/signup");
  };

  return (
    <div className="justify-center px-10 pt-5 flex flex-col ">
      <button className="font-bold rounded-full text-center px-3 py-2 text-white bg-red-700" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;

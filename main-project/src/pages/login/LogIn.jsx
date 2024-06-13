import React, { useState } from "react";
import image from "/sign-up-bg.svg";
import Validation from "./LoginValidation.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setError(validationErrors);

    if (!validationErrors.username && !validationErrors.password) {
      try {
        const res = await axios.post("http://localhost:8081/login", values);
        if (res.data === "Success") {
          navigate("/illustration");
        } else {
          alert("No account existed");
        }
      } catch (err) {
        console.log("Error:", err);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#0046E1]">
      <div>
        <img src={image} alt="" className="object-cover h-full" />
      </div>
      <div className="w-full pt-14 lg:pt-28 pb-14">
        <h1 className="text-center text-3xl font-bold font-primary text-white">LOG IN</h1>
        <h1 class="text-sm font-semibold mb-6 mt-3 text-white text-center">Join to Our Community with all time access and free</h1>

        <form action="#" method="POST" class="space-y-7 px-7" onSubmit={handleSubmit}>
          <div>
            <label for="username" class="block text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleInput}
              class="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
            {error.username && <span className="text-red-500 font-bold">{error.username}</span>}
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInput}
              class="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
            {error.password && <span className="text-red-500 font-bold">{error.password}</span>}
          </div>
          <div className="pt-6">
            <button
              type="submit"
              class="w-full bg-yellowlight text-[#0046E1] font-bold p-2 rounded-lg focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

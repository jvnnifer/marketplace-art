import React, { useState } from "react";
import image from "/sign-up-bg.svg";
import Validation from "./SignUpValidation.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
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

    if (!validationErrors.username && !validationErrors.email && !validationErrors.password) {
      try {
        const res = await axios.post("http://localhost:8081/signup", values);
        console.log(res);
        navigate("/", { state: { username: values.username } });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="flex flex-col lg:flex-row bg-blue-sign">
      <div>
        <img src={image} alt="" className="object-cover h-full" />
      </div>
      <div className="w-full pt-14 lg:pt-28">
        <h1 className="text-center text-3xl font-bold font-primary text-white">SIGN UP</h1>
        <h1 class="text-sm font-semibold mb-6 mt-3 text-white text-center">Join to Our Community with all time access and free</h1>

        <form action="#" method="POST" class="space-y-2 px-7" onSubmit={handleSubmit}>
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
            <label for="email" class="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleInput}
              class="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
            {error.email && <span className="text-red-500 font-bold">{error.email}</span>}
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
          <div>
            <label for="role" class="block text-sm font-medium text-white">
              Select your role:
            </label>
            <select id="role" name="role" class="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
              <option value="" disabled selected>
                Select your role
              </option>
              <option value="artist">Artist</option>
              <option value="client">Client</option>
            </select>
          </div>
          <div className="pt-6">
            <button
              type="submit"
              class="w-full bg-yellowlight text-blue-sign font-bold p-2 rounded-lg focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div class="mt-4 mb-5 text-sm text-white font-semibold text-center">
          <p>
            Already have an account?{" "}
            <a href="#" class="text-yellowlight font-bold hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

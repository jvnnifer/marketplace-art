import React from "react";
import image from "/sign-up-bg.svg";

const SignIn = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-blue-sign">
      <div>
        <img src={image} alt="" className="object-cover h-full" />
      </div>
      <div className="w-full pt-14 lg:pt-28">
        <h1 className="text-center text-3xl font-bold font-primary text-white">SIGN UP</h1>
        <h1 class="text-sm font-semibold mb-6 mt-3 text-white text-center">Join to Our Community with all time access and free</h1>

        <form action="#" method="POST" class="space-y-2 px-7">
          <div>
            <label for="username" class="block text-sm font-medium text-white">
              Username
            </label>
            <input type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-white">
              Email
            </label>
            <input type="text" id="email" name="email" class="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-white">
              Password
            </label>
            <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
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

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";
import Button1 from "../Components/Button/index1";

function Register () {
    return (
        <div class="min-h-screen border-2 bg-gray-300 py-6 flex flex-col justify-center sm:py-12 ">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto ">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto ">
            <div>
              <h1 class="text-2xl font-semibold text-center">Register</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="text"
                    name="text"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter First Name"
                  />
                  <label
                    for="text"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="text"
                    name="text"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter Last Name"
                  />
                  <label
                    for="text"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Last Name
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="text"
                    name="text"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div class="relative flex justify-center space-x-4 ">
                  <Link to={'/register-email'}>
                  <button class="hover:bg-sky-600 bg-blue-500 text-white rounded-md px-2 py-1">
                    Next
                  </button>
                  </Link>
                  <Link to={'/'}>
                  <Button1 
                  //type="submit"
                  size="large"
                  //className="w-full text-black"
                  varient="denger"
                  >
                  Back
                  </Button1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Register;
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Image Section */}
      <div className="relative w-1/2 h-full">
        <Image
          src="/school image.jpeg"
          alt="Login Background"
          fill 
          className="object-cover" // Ensures the image covers the area properly
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Right Form Section */}
      <div className="w-1/2 flex justify-center items-center bg-gray-50">
        <div className="w-3/4 max-w-md">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">
              Login Your Account
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Enter your credential for Login
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input with Eye Toggle */}
          <div className="mb-8 relative ">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 pt-9"
            >
              {/* Eye Icon */}
              {showPassword ? (
                <Image
                  src="/Eye onn.png"
                  alt="Show Password"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/Eye off.png"
                  alt="Hide Password"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

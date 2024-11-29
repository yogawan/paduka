import React from "react";
import { Link } from "react-router-dom";

const HomePages = () => {
  return (
    <div className="h-screen flex items-center justify-center p-4 bg-whiite">
      <div className="w-[610px] text-start">
        {/* Nama dan NIM */}
        <h1 className="text-3xl font-thin mb-12 text-[#171717]">Under Developing!</h1>

        {/* Tombol dengan Efek Gradient dan Blur */}
        <div className="relative inline-flex group">
          {/* Background Gradient dan Blur Effect */}
          <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
          ></div>

          {/* Tombol dengan Efek Hover dan Fokus */}
          <Link
            to="/"
            className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white bg-[#171717] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200"
            role="button"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePages;

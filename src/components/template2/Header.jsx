import React from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b px-12 lg:px-20">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Who We Are
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              What We Offer
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Our Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              How To Apply
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <a
          href="#"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Apply
        </a>
      </div>
    </header>
  );
};

export default Header;

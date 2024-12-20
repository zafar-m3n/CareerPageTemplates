import React, { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Logo" />
        </a>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 md:px-8 lg:px-4 py-2 text-center"
          >
            Apply
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 lg:p-0 text-white bg-blue-500 rounded lg:bg-transparent lg:text-blue-500"
              >
                Our Values
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 lg:p-0 text-black hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-500"
              >
                Interview Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 lg:p-0 text-black hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-500"
              >
                Available Positions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 lg:p-0 text-black hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-500"
              >
                Employee Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import logoWhite from "@/assets/logo-white.png";
import DynamicValues from "@/data/data";

const Footer = () => {
  return (
    <section className="py-12 px-6 lg:px-20 bg-blue-500">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <a href="/">
            <img src={logoWhite} alt="Logo" className="h-10 w-auto mb-4" />
          </a>
          <p className="text-white">
            Cleveri collects and processes personal data in accordance with
            applicable data protection laws. If you are a European Job
            Applicant, see the privacy notice for further details.
          </p>
        </div>
        <div className="flex justify-end text-white space-x-6">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  More Info
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="py-4 flex justify-between items-center">
        <p className="text-white">
          &copy; FinTech Hive (PVT) Ltd. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import logo from './QLOGO.png';

const SideBar = () => {
    return (
        <div className="bg-customBlack text-white h-screen w-64 flex flex-col border-r-2 border-yellow-500">
        {/* Sidebar content */}
        <div className="p-5 flex items-center">
          <img src={logo} alt="logo" className="h-14 w-15 flex-auto bg-transparent mt-[-15px] ml-[-5px]"/>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">Dashboard</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">About</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">Services</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          {/* Social media icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
};

export default SideBar;
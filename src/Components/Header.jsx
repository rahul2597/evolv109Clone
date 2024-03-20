import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Registrationlist from "./Registrationlist";
import { TfiMenu } from "react-icons/tfi";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex text-white sm:w-screen md:w-screen lg:w-screen space-x-8 items-center p-4 py-4 justify-center fixed bg-[#0007] z-10 backdrop-blur-sm w-full">
      <div className="flex justify-center items-center">
        <div className="flex main-header">
          <div className="flex main-header-icon mt-2 relative">
      
            {" "}
            <img
              className="evolve-img w-[9rem] h-[2.5rem] "
              src="https://evolv109.com/wp-content/uploads/2023/05/evolv109_white-1-1.png"
              alt=""
            />
            <TfiMenu className="text-slate-200 text-[3rem] md:hidden space-x-72" />
          </div>
          <div className="link-section ml-6 items-center space-x-8 hidden md:flex md:w-full">
          
            <Link to="/">
              <div className="flex items-center text-sm">
                <h1>Home</h1>
              </div>
            </Link>
            <Link to="/About">
              <div className="flex  items-center text-sm">
                <h1>About Us</h1>
              </div>
            </Link>
            <Link to="/CaseStudy">
              <div className="flex  items-center text-sm">
                <h1>Case Study</h1>
              </div>
            </Link>
            <Link to="/Ourservice">
              <div className="flex  items-center text-sm">
                <h1>Our Services</h1>
              </div>
            </Link>
            <Link to="/Recruitment">
              <div className="flex recruit items-center text-sm space-x-2 relative">
                <h1>Recruitment Services</h1>
                <IoMdArrowDropdown />
                <div className="dropdown duration-300 absolute top-10 right-0 ">
                  <Registrationlist />
                </div>
              </div>
            </Link>
            <Link to="/Blog">
              <div className="flex  items-center text-sm">
                <h1>Blog</h1>
              </div>
            </Link>
            <Link to="/Contact">
              <div className="flex  items-center text-sm">
                <h1>Contect</h1>
              </div>
            </Link>
            <Link to="/Contact">
              <div className="px-6 py-2 bg-red-400 rounded-full flex justify-center items-center mt-2 ml-2">
                <h1>Schedule A Call</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

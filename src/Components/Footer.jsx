import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center text-slate-300 flex-col mt-24 space-y-6">
        <div>
          <img
            className="w-[9.5rem] h-[3rem]"
            src="https://evolv109.com/wp-content/uploads/2023/05/evolv109_white-1-1.png"
            alt=""
          />
        </div>
        <div className=" space-y-3">
          <p>
            Registered Office: Stesalit Tower, E2/3, Block EP & GP block, 3rd
            Floor, Room No. 308, Sector V, Salt Lake, Kolkata,
            <div className="flex justify-center items-center">
              <p>West Bengal, Pin Code - 700091, India. </p>
            </div>
          </p>
        </div>
        <div className="flex space-x-6 text-white px-4 py-2">
          <div className="hover:text-blue-600"> Home</div>
          <div className="hover:text-blue-600">ABOUT US</div>
          <div className="hover:text-blue-600">Contect </div>
          <div className="hover:text-blue-600">CASE STUDY</div>
          <div className="hover:text-blue-600">BLOG</div>
          <div className="hover:text-blue-600">AFFILIATE</div>
          <div className="hover:text-blue-600">REGISTRATION</div>
          <div className="hover:text-blue-600"> PRIVACY POLICY</div>
          <div className="hover:text-blue-600">TERMS AND CONDITIONS</div>
        </div>
        <div className="flex justify-center items-center space-x-6 text-slate-400 text-[2.2rem] border-b border-gray-800 pb-8 w-3/5 ">
          <TiSocialFacebook />
          <TiSocialLinkedin />
        </div>
        <p className="text-slate-400 pb-20">
          © 2024 Evolv109 a unit of Eppeok Solutions Pvt. Ltd. All Rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;

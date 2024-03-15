import React from "react";
import Header from "../Components/Header";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import Drop from "../Components/Contectcomponents/Drop";
import FandQ from "../Components/Servicescomponents/FandQ";
import Footer from "../Components/Footer";
const Contact = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center pt-36 py-6">
        <div className="flex  space-x-72">
          <div className="flex flex-col space-y-8 pr-80 justify-start ">
            <h6 className="text-slate-500 px-2 py-1 rounded-lg  flex justify-center items-center border-slate-800 border-[1px] w-24 text-sm">
              CONTACT
            </h6>
            <h1 className="text-[2.3rem] text-white font-semibold">
              Get in touch with us
            </h1>
            <p className="text-slate-600">
              Tell us more about you and we’ll contact you soon:
            </p>
          </div>

          <div className=" flex flex-col justify-end items-center">
            <div className="flex space-x-4 text-slate-400 text-[2.2rem]">
              <TiSocialFacebook />
              <TiSocialLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Drop />
      </div>
      <div className="pl-80 mt-20">
        <FandQ />
      </div>
      <Footer />
    </>
  );
};

export default Contact;

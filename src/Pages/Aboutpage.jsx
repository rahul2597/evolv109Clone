import React from "react";
import Header from "../Components/Header";
import Aboutus from "../Components/AboutComponents/Aboutus";
import Story from "../Components/AboutComponents/Story";
import Ourvalue from "../Components/AboutComponents/Ourvalue";
import Bottomsection from "../Components/AboutComponents/Bottomsection";
import Footer from "../Components/Footer";

const Aboutpage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-24">
        <div className="flex justify-center items-center space-x-12 mt-10">
          <div>
            <img
              className="w-[19rem] h-[34rem] rounded-s-full rounded-b-full object-cover mr-12"
              src="https://evolv109.com/wp-content/uploads/2023/03/about-image-01.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[19rem] h-[34rem] rounded-s-full rounded-e-full object-cover"
              src="https://evolv109.com/wp-content/uploads/2023/03/ban1-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[22.7rem] h-[40rem]  rounded-t-full rounded-r-full object-cover"
              src="https://evolv109.com/wp-content/uploads/2023/03/about-image-02.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Aboutus />
      <Story />
      <Ourvalue />
      <Bottomsection />
      <Footer />
    </>
  );
};

export default Aboutpage;

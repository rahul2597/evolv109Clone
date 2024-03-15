import React from "react";
import Homecontent from "../Components/Homecontent";
import Header from "../Components/Header";
import HireExperts from "../Components/HireExperts";
import Portfolio from "../Components/Portfolio";
import Scrollimg from "../Components/Scrollimg";
import Testimonia from "../Components/Testimonia";
import Containtblog from "../Components/Containtblog";
import Footer from "../Components/Footer";
import Projectdeliver from "../Components/Projectdeliver";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex  justify-center items-center space-x-20 pt-40 pb-20">
        <div className="flex justify-center items-center ">
          <div>
            <h1 className="text-white text-[3rem] font-semibold">
              Unlock Your <br /> Online Potential
            </h1>
            <h4 className="text-slate-400 mt-3">
              Simplify, Amplify, Succeed : Evolv109 Empowers Your Digital
              Journey
            </h4>
            <div className="flex space-x-4 mt-3 ">
              <div className="flex justify-center items-center px-5 py-2 rounded-full bg-red-500">
                <h2>Our Services</h2>
              </div>
              <div className="flex justify-center items-center px-6 py-2 rounded-full text-white bg-slate-500 ">
                <h2> Contuct Us</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex  flex-col space-x-8 space-y-10 items-start ">
            <div>
              {" "}
              <img
                className="w-[16rem] h-[24rem] rounded-full"
                src="https://evolv109.com/wp-content/uploads/2023/03/ban1.jpg"
                alt=""
              />
            </div>
            <div>
              {" "}
              <img
                className="w-[15rem] h-[15rem] rounded-s-full rounded-t-full "
                src="https://evolv109.com/wp-content/uploads/2023/03/ban2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-10 space-x-8 items-start">
            <div>
              <img
                className="w-[15rem] h-[15rem] rounded-b-full rounded-s-full ml-8 "
                src="https://evolv109.com/wp-content/uploads/2023/03/ban3.jpg"
                alt=""
              />
            </div>
            <div>
              {" "}
              <img
                className="w-[16rem] h-[24rem] rounded-full"
                src="https://evolv109.com/wp-content/uploads/2023/03/ban4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Homecontent />
      <HireExperts />
      <Portfolio />
      <Scrollimg color={"text-blue-500"} />
      <Projectdeliver />
      <Testimonia />
      <Containtblog />
      <Footer />
    </>
  );
};

export default Home;

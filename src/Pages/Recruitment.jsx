import React from "react";
import Header from "../Components/Header";
import Choosus from "../Components/Recruitmentcomponents/Choosus";
import Jobs from "../Components/Recruitmentcomponents/Jobs";
import Linked from "../Components/Recruitmentcomponents/Linked";
import Nichesector from "../Components/Recruitmentcomponents/Nichesector";
import { IoMailOutline } from "react-icons/io5";
import Register from "../Components/Recruitmentcomponents/Register";
import Footer from "../Components/Footer";
const Recruitment = () => {
  return (
    <>
      <Header />
      <div className="flex radial flex-col justify-center items-center pt-16">
        <div className="flex  justify-center items-center pt-36 space-x-16 ">
          <div className="flex flex-col  space-y-6 bg-opacity-10 py-44 backdrop-blur-md">
            <h1 className="text-[3.5rem] text-white">
              Extend your Job <br />
              Search with <span className="text-blue-600"> Evolv109</span>{" "}
            </h1>
            <p className="text-slate-600">
              One Single, Consistent purpose underpins all that we do; to match
              the right person with the right <br /> job in the right
              organization. Every day we make sure to take a more considered,
              innovative, caring <br /> and consultative approach to recruitment
              so that we can deliver on that promise. Whether you <br />
              need assistance on Career Development or looking for a Right Match
              to your organization,
              <br />
              Evolv109 has you covered.
            </p>
            <div className="flex space-x-6">
              <h2 className="bg-red-500 text-white px-6 py-2 flex justify-center items-center rounded-3xl text-sm">
                Looking For Job
              </h2>
              <h2 className=" text-white px-6 py-2 flex justify-center items-center rounded-3xl bg-zinc-900 text-sm">
                Looking For Recruit
              </h2>
            </div>
          </div>
          <div className="w-[35rem] h-[41rem] mt-4">
            <img
              className="w-[27rem] h-[35rem] object-cover"
              src="https://evolv109.com/wp-content/uploads/2023/05/banner1-1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-zinc-800">
        <Choosus />
      </div>
      <div className="flex justify-center items-center ">
        <Jobs />
      </div>
      <div className="w-full bg-zinc-800 mt-12 py-12">
        <Linked />
      </div>
      <Nichesector />
      <div className="flex justify-around items-center mt-16">
        <div className="flex flex-col space-y-4">
          {" "}
          <h1 className="text-white text-[2.3rem] font-semibold ">
            Subscribe to Newsletter
          </h1>
          <p className="text-slate-500 ">
            Subscribe to Newsletter to get the latest Notification{" "}
          </p>
        </div>
        <div>
          <div className="flex text-red-600 text-3xl rounded-full border-slate-700 border-[0.2px] pl-3 justify-center items-center ">
            <IoMailOutline className="mr-4" />
            <input
              className="text-sm pr-28 py-2 text-slate-600 bg-transparent outline-none"
              type="text"
              placeholder="Enter your email adress"
            />
            <div className="bg bg-red-500 w-[20%] rounded-r-full px-16 py-7"></div>
          </div>
        </div>
      </div>
      <Register />
      <Footer />
    </>
  );
};

export default Recruitment;

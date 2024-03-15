import React from "react";
import REview from "./REview";

const Testimonia = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-28 ">
        <div className="flex flex-col justify-start items-start space-y-4 ">
          <div className="flex rounded-lg px-4 py-2 border-slate-600 border-[0.1px] items-center justify-center ">
            <h1 className="text-slate-400 text-sm">TESTIMONIALS</h1>
          </div>
          <h2 className="text-[2.2rem] text-white font-bold">
            What Our Clients Say About Us
          </h2>
          <p className="text-slate-500">
            We are very fortunate to have formed excellent partnerships with
            many of our clients. And we’ve formed <br /> more than just working
            relationships with them; we have formed true friendships. Here’s
            what they’re saying <br /> about us.
          </p>
        </div>
        <div className=" flex flex-col justify-end items-end self-end ml-44">
          <h1 className="flex justify-center items-center  px-4 py-1 rounded-full border-slate-400 border-[0.1px] bg-red-500 text-white">
            Get In Touch
          </h1>
        </div>
      </div>
      <div className="flex space-x-6 justify-center items-center mt-20">
        <REview  content1={"Kristan"}content2={"RNF"}  content3={"Awesome"} content={""}/>
        <REview content1={"Ange"}content2={"Founder CEO"}  content3={"VeryGood"} content={""} />
        <REview  content1={"Jorgec"}content2={"CEO"}  content3={"Great"} content={""}/>
      </div>
    </>
  );
};

export default Testimonia;

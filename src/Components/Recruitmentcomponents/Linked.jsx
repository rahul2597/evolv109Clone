import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";

const Linked = () => {
  return (
    <div className="flex flex-col justify-center items-center  space-y-4 py-4 ">
      <h1 className="text-[2rem] text-white font-semibold">
        Connect to us on LinkedIn
      </h1>
      <div className="flex justify-center items-center px-56 py-3 rounded-xl text-white space-x-8 text-2xl bg-blue-700 hover:bg-white">
        <TiSocialLinkedin className="font-bold text-3xl" />
        <h1> Lets'Connect</h1>
      </div>
    </div>
  );
};

export default Linked;

import React from "react";
import { IoMailOutline } from "react-icons/io5";

const Aboutus = () => {
  return (
    
    <div className="flex justify-center items-center flex-col space-y-4 pb-6">
      <h1 className="px-5 py-1 border-[0.2px] border-slate-600 text-slate-200 rounded-xl mt-3">About us</h1>
      <h1 className="text-white text-[2rem]">
        Great companies use <span className='text-red-500'>Evolv109 </span>
      </h1>
      <p className="text-slate-600">
        Evolv109 empowers businesses to leverage technology effectively, make
        data-driven decisions, <br /> streamline operations, and deliver outstanding
        customer experiences. By harnessing these <br /> capabilities, businesses can
        power their growth and success in today's dynamic business <br /> landscape.
      </p>
      <div className="flex text-red-600 text-3xl rounded-full border-slate-700 border-[0.2px] pl-3 justify-center items-center ">
      <IoMailOutline className="mr-4" />
      <input className="text-sm pr-28 py-2 text-slate-600 bg-transparent outline-none" type="text" placeholder="Enter your email adress" />
      <div className="bg bg-red-500 w-[20%] rounded-r-full px-16 py-7"></div>
        </div>
    </div>
  );
};

export default Aboutus;

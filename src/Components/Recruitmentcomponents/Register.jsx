import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Register = () => {
    
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h1 className="text-white text-[2.6rem] font-semibold">
        Companaines register here
      </h1>
      <div className="border-slate-700 border-[0.2px] bg-zinc-800 px-16 py-12 pb-4 rounded-3xl mt-10">
        <form action="">
          <div className=" space-y-4">
            <h2 className="text-slate-600 mx-4">Name*</h2>
            <input
              className="py-4 pr-72 pl-4 bg-transparent rounded-3xl border-slate-600 border-[1px]"
              type="text"
              placeholder="Enter Your Name"
            />
            <h2 className="text-slate-600 mx-4">Phone Number*</h2>
            <input
              className="py-4 pr-72 pl-4 bg-transparent rounded-3xl border-slate-600 border-[1px]"
              type="text"
              placeholder="Enter Your phone Number"
            />
            <h2 className="text-slate-600 mb-3">Email Address*</h2>
            <input
              className="py-4 pr-72 pl-4 bg-transparent rounded-3xl border-slate-600 border-[1px]"
              type="email"
              placeholder="Enter Your email address"
            />
            <h2 className="text-slate-600 mb-3">Company Name*</h2>
            <input
              className="py-4 pr-72 pl-4 bg-transparent rounded-3xl border-slate-600 border-[1px]"
              type="text"
              placeholder="Enter Your company name"
            />
            <h2 className="text-slate-600 mb-3">primary IT Hiring Need*</h2>

            <div className="flex justify-around items-center rounded-3xl border-slate-600 border-[1px]">
              <input
                className="py-4 pr-64 pl-4 bg-transparent "
                type="text"
                placeholder="Plese select a response"
              />
              <IoIosArrowDown className="text-slate-600" />
            </div>
            <h2 className="text-slate-600 mb-3">
              Hoe Soon are you Looking to Hire*
            </h2>
            <div className="flex justify-around items-center rounded-3xl border-slate-600 border-[1px]">
              <input
                className="py-4 pr-64 pl-4 bg-transparent "
                type="text"
                placeholder="Plese select a response"
              />
              <IoIosArrowDown  className="text-slate-600"/>
            </div>
            <button className="bg-red-500 rounded-3xl px-12 py-2 flex justify-center items-center mt-6">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

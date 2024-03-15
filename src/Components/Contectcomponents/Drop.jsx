import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Contactdetail from "./Contactdetail";

const Drop = () => {
  return (
    <div className=" pt-16 pb-28 px-32 rounded-3xl border-slate-800 border-[1px] space-y-4 bg-zinc-900 mt-16">
      <h1 className="text-white text-[2rem]">Drop us a message</h1>
      <p className="text-slate-600 text-sm">
        We will get back to you as soon as possible.
      </p>
      <div className="flex  space-x-24">
        <div className="flex flex-col space-y-6 text-sm">
          <input
            className="pl-4 pr-56 rounded-3xl py-4 bg-transparent text-slate-500 border-slate-600 border-[1px]"
            type="text"
            placeholder=" Full Name"
          />
          <input
            className="pl-4 pr-56 rounded-3xl py-4 bg-transparent text-slate-500 border-slate-600 border-[1px]"
            type="text"
            placeholder=" Email Address"
          />
          <input
            className="pl-4 pr-56 rounded-3xl py-4 bg-transparent text-slate-500 border-slate-600 border-[1px]"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="pl-4 pr-56 rounded-[3.3rem] pb-24 pt-5 bg-transparent text-slate-500 border-slate-600 border-[1px]"
            type="text"
            placeholder="Message"
          />

          <button className="flex justify-center items-center bg-red-500 rounded-2xl px-4 py-2 text-white w-32 mt-6">
            Send
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className=" bg-zinc-800 py-10 px-9 pr-12 space-y-7">
            <Contactdetail
              icon={<FaPhone className="text-blue-500 " />}
              content1={"+91 983173 6959"}
              content2={"Help phone support"}
            />
            <Contactdetail
              icon={<MdEmail className="text-green-500" />}
              content1={"info@evolv109.com"}
              content2={"Help email support"}
            />
            <Contactdetail
              icon={<IoLocationSharp className="text-orange-800" />}
              content1={"Globsyn Crystal, Regus "}
              content3={"Business Center, EP"}
              content4={"Block, Salt Lake,"}
              content5={"Sector V, Kolkata"}
              content2={"Kolkata"}
            />
            <Contactdetail
              icon={<IoLocationSharp className="text-orange-800" />}
              content1={"Fairway Business Park, "}
              content3={"Bangalore, 560001"}
              content2={"Bangalore"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drop;

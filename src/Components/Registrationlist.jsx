import React from "react";

const Registrationlist = () => {
  return (
    <div>
      <div className="bg-zinc-900  space-x-10 justify-between border-x-2 border-red-400 flex px-3 ">
        <div className="flex flex-col space-x-10 space-y-5">
          <h1 className="text-white">About</h1>
          <div className="bg-red-600 w-16 h-[2px]"></div>
          <p className="text-slate-500">About Us</p>
          <p className="text-slate-500"> Our Journey</p>
        </div>
        <div className="flex flex-col space-y-5 pr-10">
          <h1 className="text-white">Service</h1>
          <div className="bg-red-600 w-16 h-[2px]"></div>
          <p className="text-slate-500">Recruitment and staffing</p>
          <p className="text-slate-500">Employer Branding</p>
          <p className="text-slate-500">HR consulting</p>
          <p className="text-slate-500">Recruitment Process Outsourcing</p>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-white"> Registration</h1>
          <div className="bg-red-600 w-16 h-[2px] "></div>
          <p className="text-slate-500">Candidate Registration</p>
          <p className="text-slate-500">Client Registration</p>
        </div>
      </div>
    </div>
  );
};

export default Registrationlist;

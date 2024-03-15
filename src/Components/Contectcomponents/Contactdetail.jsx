import React from "react";

const Contactdetail = ({ icon, content1, content2,content3,content4,content5}) => {
  return (
    <div className="flex space-x-2">
      <div className="w-[3.25rem] h-[3.25rem] bg-zinc-700 rounded-full p-3 flex justify-center items-center">
        {icon } 
      </div>
      <div className="flex flex-col pl-2">
        <h1 className="text-white">{content1} </h1>
        <h1 className="text-white">{content3} </h1>
        <h1 className="text-white">{content4} </h1>
        <h1 className="text-white">{content5} </h1>
        <p className="text-slate-500">{content2}</p>
      </div>
    </div>
  
  );
};

export default Contactdetail;

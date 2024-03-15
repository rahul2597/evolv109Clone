import React from "react";

const Choosecomponents = ({img1,content1,content2,content3 }) => {
  return (
    <div className="flex space-x-4">
      <img className="w-[3,5rem] h-[3.5rem]" src={img1} alt="" />
      <div className="flex flex-col space-y-2">
        <h1 className="text-[1.3rem] text-white">{content1}</h1>
        <p className="text-slate-400">{content2}</p>
        <p className="text-slate-400 mb-1">{content3}</p>
      </div>
    </div>
  );
};

export default Choosecomponents;

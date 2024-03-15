import React from "react";

const Casestudycontent = ({
  content1,
  heading,
  para1content,
  para2content,
}) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 pb-4">
      <h3 className="text-sm px-4 py-1 rounded-2xl border-slate-700 border-[0.2px] text-slate-300 flex justify-center items-center w-32">
        {content1}
      </h3>

      <h1 className="text-white text-[2.3rem] font-semibold"> {heading}</h1>
      <div className="flex justify-center items-center flex-col">
        <p className="text-slate-500 ">{para1content}</p>
        <p className="text-slate-500">{para2content}</p>
      </div>
    </div>
  );
};

export default Casestudycontent;

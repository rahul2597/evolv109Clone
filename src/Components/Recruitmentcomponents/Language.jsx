import React from "react";

const Language = ({style,content1,content2}) => {
  return (
    <div className="flex  bg-zinc-800 rounded-3xl pl-8 pt-8 pb-12 pr-36">
      <div className="flex flex-col space-y-4 ">
        <div className={style}>
          {" "}
          <img
            className="w-[2rem] h-[2rem]"
            src="https://evolv109.com/wp-content/uploads/2023/05/bag-icon.png"
            alt=""
          />
        </div>
        <h1 className="text-white text-[1.5rem]">{content1}</h1>
        <div className="flex">
          <img
            src="https://evolv109.com/wp-content/uploads/2023/05/location.png"
            alt=""
          />{" "}
          <p className="text-slate-500 text-sm">{content2}</p>
        </div>
        <div className="flex text-sm" >
          <img
            src="https://evolv109.com/wp-content/uploads/2023/05/clock.png"
            alt=""
          />{" "}
          <p className="text-slate-500">Full Time</p>
        </div>
      </div>
    </div>
  );
};

export default Language;

import React from "react";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center mt-44 ">
      <div className="flex flex-col justify-start items-start space-y-10">
        <div className="flex rounded-lg px-3 py-2 border-slate-300 border-[0.1px] items-center justify-center">
          <h1 className="text-slate-400 text-sm">OUR PORTFOLIO</h1>
        </div>
        <h2 className="text-[2.2rem] text-white font-bold">
          Our Impressive Work Showcase
        </h2>
        <p className="text-slate-500">
          For more than 7 years, we have collaborated with organizations across
          the globe. Our clients range from large global companies to non
          <br />
          profits and local businesses. We take pride in the work we have
          accomplished, which has provided us with extensive expertise and
          <br /> knowledge to serve future clients even better
        </p>
      </div>
      <div className=" flex flex-col justify-end items-end self-end">
        <h1 className="flex justify-center items-center  px-4 py-1 rounded-full border-slate-400 border-[0.1px] bg-red-500 text-white">
          All Case Study
        </h1>
      </div>
    </div>
  );
};

export default Portfolio;

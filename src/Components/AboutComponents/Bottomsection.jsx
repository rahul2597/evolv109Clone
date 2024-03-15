import React from "react";

const Bottomsection = () => {
  return (
    <div className="flex justify-center items-center mt-12 pt-4 space-x-16 ">
      <div>
        <div>
          <img
            className=" w-[32rem] h-[40rem] rounded-b-full rounded-s-full object-cover"
            src="https://evolv109.com/wp-content/uploads/2023/03/our-story-image02.webp"
            alt=""
          />
        </div>
      </div>

      <div className=" flex items-start justify-center">
        <div className="flex flex-col space-y-5">
          <h2 className="px-3 py-1 rounded-xl border-slate-700 border-[0.1rem] text-slate-400 text-sm w-24 flex justify-center items-center">
            ABOUT
          </h2>
          <h1 className="text-[2.4rem] text-white font-bold">
            Embracing Our Uniqueness: <br /> Evolv109's Journey
          </h1>
          <p className="text-slate-600">
            Since 2016, Evolv109 has excelled in web development, design,
            e- <br />commerce, custom solutions, SEO, and more. With a flexible
            approach, <br /> we prioritize your needs, ensuring fair pricing and utmost
            attention. As a <br /> self-funded company, we prioritize customer
            satisfaction, fostering <br /> personal connections rather than mere
            transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottomsection;

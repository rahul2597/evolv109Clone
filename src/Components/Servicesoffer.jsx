import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Servicesoffer = ({
  img,
  heading,
  content,
  style,
  content2,
  content3,
  content4,
}) => {
  return (
    <>
      <div className="border-[0.3px] border-slate-800 text-slate-500 min-w-[350px] rounded-2xl p-5 bg-slate-900 flex  items-center justify-center py-10 px-6 hover:bg-red-500 hover:text-white">
        <div className="flex flex-col items-start">
          <div>
            <div className=" w-[3.5rem] h-[3.5rem] rounded-xl bg-slate-700 flex justify-center items-center p-1 mb-6 mt-8">
              <div className={style}>
                <img
                  className="rounded-full w-[2rem] h-[2rem]"
                  src={img}
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-white mb-3">{heading} </h4>
            <p className=" text-sm">
              {content} <br /> {content2} <br /> {content3} <br />
              {content4}
            </p>
            <FaArrowRightLong className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicesoffer;

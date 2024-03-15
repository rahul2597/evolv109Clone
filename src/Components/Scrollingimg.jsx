import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Scrollingimg = ({ img1, img2, content1, content2, img2Style ,style1}) => {
  return (
    <div className="border-[0.2px] border-slate-600 bg-slate-950 py-3 px-2 rounded-3xl pb-4 ">
      <div className="w-[33.5rem] h-[27rem] overflow-auto rounded-2xl ">
        <img className=" " src={img1} alt="" />
      </div>

      <div className="bg-slate-950 pb-12 space-y-3 mt-2 ">
        <div className="flex justify-around items-center ">
          <div className="w-[10rem] h-[2rem] object-cover" >
            <img src={img2} alt="" className={img2Style} />
          </div>

          <div className="w-[4rem] h-[0.2rem] bg-slate-700"></div>
          <h1 className="text-slate-200">{content1}</h1>
        </div>
        <p className="text-slate-500 pt-8 pb-2">{content2}</p>
        <div className={style1}>
          <p>Learn more</p>
          <FaLongArrowAltRight className="item-center" />
        </div>
      </div>
    </div>
  );
};

export default Scrollingimg;

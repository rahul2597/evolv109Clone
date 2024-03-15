import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Post = ({
  img1,
  content2,
  content3,
  content5,
  content4,
  date,
  style,
}) => {
  return (
    <div
      className={`border-[0.2px] w-[21.3rem] border-slate-600 bg-slate-950 rounded-3xl  pb-8 relative  space-y-4`}
    >
      <div className={`rounded-2xl flex justify-center items-center`}>
        <img className={`w-full  rounded-3xl ${style}`} src={img1} alt="" />
        <h1 className="text-white absolute top-44 right-44 p-3">
          Digital Marketing
        </h1>
      </div>

      <div className="bg-slate-950   ">
        <div className="flex flex-col pl-3 space-y-3">
          <div className="text-slate-600">
            <h4>{date}</h4>
          </div>
          <h1 className="text-slate-300 text-xl">{content2}</h1>
        </div>
        <div className="text-sm pl-3 mt-3">
          <p className="text-slate-600 text-sm ">{content3}</p>
          <p className="text-slate-600  text-sm">{content4}</p>
          <p className="text-slate-600  text-sm">{content5}</p>
        </div>

        <div className="flex text-blue-600 justify-start mt-3 pl-3 ">
          <p>Learn more</p>
          <FaLongArrowAltRight className="item-center mt-2 ml-3" />
        </div>
      </div>
    </div>
  );
};

export default Post;

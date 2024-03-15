import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Question = ({content1}) => {
  return (
    <div className="flex justify-between text-slate-300  rounded-2xl px-6 py-3 items-center border-[1px] border-slate-800 w-[80%] bg-zinc-900">
      <h1>{content1}</h1>{" "}
      <IoIosArrowDown />
    </div>
  );
};

export default Question;

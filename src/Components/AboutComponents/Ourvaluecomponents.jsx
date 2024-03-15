import React from "react";

const Ourvaluecomponents = ({
  leaf1,
  leaf2,
  leaf3,
  leaf4,
  Heading,
  content1,
  content2,
  content3,
  content4,
  style1,
}) => {
  return (
    <div className={style1} >
      <div className="flex flex-col space-y-3">
        <div className=" flex">
          <div className="flex flex-col">
            {leaf1}
            {leaf2}
          </div>
          <div className="flex flex-col">
            {leaf3}
            {leaf4}
          </div>
        </div>
        <h1 className="text-[2rem] text-white">{Heading}</h1>
        <p className="text-slate-600">{content1} <br /> {content2} <br /> {content3} <br />{content4}
        </p>
      </div>
    </div>
  );
};

export default Ourvaluecomponents;

import React from "react";
import { FaStar } from "react-icons/fa";

const REview = ({content1, content2 ,content3}) => {
  return (
    <div className="flex justify-center items-center w-[22rem] h-[31.3rem] space-x-6 border-2 border-slate-900 rounded-3xl">
      <div className="flex flex-col px-8 py-5 space-x-6 text-slate-300 space-y-3">
        <div>
          <p>{content1}</p>
          <p>{content2}</p>
        </div>
        <h1 className="text-[1.5rem] text-slate-100">{content3}</h1>
        <div className="overflow-auto h-[16.8rem] w-[]10.5rem scrollbar-width:none;">
          <p>
            I was lucky and delighted to find this freelancer for my website to
            complete. she has a professional approach, keeps you in the loop
            what she is doing. and work she produces is top notch. This
            freelancer goes that extra mile and makes sure she gives the best of
            the best. I am very pleased with the way she liaised with me. The
            best thing I liked about her is that first she fully understood what
            I required her to do and then she quoted me. She kept everything as
            she promised to do and I just love her work. Very hardworking and
            easy to talk to and discuss your needs. She has a genuine interest
            in serving her customers and she definitely should be proud of her
            wonderful work. I will hire her again without any doubt and I wish
            other people who need a web developer should hire her with no
            reservation.
          </p>

        </div>

        <div className="flex text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default REview;

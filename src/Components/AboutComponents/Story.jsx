import React from "react";

const Story = () => {
  return (
    <div className="flex justify-center items-center mt-12 pt-4 space-x-6 ">
      <div className=" flex items-start justify-center">
        <div className="flex flex-col space-y-5">
          <h2 className="px-3 py-1 rounded-xl border-slate-700 border-[0.1rem] text-slate-400 text-sm w-24">
            Our Story
          </h2>
          <h1 className="text-[2.4rem] text-white font-bold">Driving Growth since 2016</h1>
          <p className="text-slate-600">
            At Evolv109, we are dedicated to driving business growth through our
            expert <br /> digital solutions. With a focus on simplicity and
            effectiveness, we empower <br /> businesses to succeed in the
            digital realm. From comprehensive digital <br />
            transformation to data-driven insights and streamlined operations,
            we are your <br />
            trusted partner in achieving digital success. Let us help you unlock
            your <br /> business’s full potential and thrive in the
            ever-evolving digital landscape
          </p>
        </div>
      </div>
      <div>
        <div >
          <img
            className=" w-[32rem] h-[40rem] rounded-bl-[9rem] rounded-tr-[9rem] object-cover"
            src="https://evolv109.com/wp-content/uploads/2023/03/our-story-image.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Story;

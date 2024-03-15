import React from "react";
import Post from "./Post";

const Containtblog = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-28 ">
        <div className="flex flex-col justify-start items-start space-y-4 ">
          <div className="flex rounded-lg px-4 py-2 border-slate-600 border-[0.1px] items-center justify-center ">
            <h1 className="text-slate-400 text-sm">Blog</h1>
          </div>
          <h2 className="text-[2.2rem] text-white font-bold">
            Read our articles & news
          </h2>
          <p className="text-slate-500">
            What sets us apart is a persistent focus on goals, innovative
            strategy and customer success. Read our <br /> articles and news to
            more about how we can help you boost your business.
          </p>
        </div>
        <div className=" flex flex-col justify-end items-end self-end ml-44">
          <h1 className="flex justify-center items-center  px-4 py-1 rounded-full border-slate-400 border-[0.1px] bg-red-500 text-white">
            All Posts
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 space-x-6">
        <Post
          img1={
            "https://evolv109.com/wp-content/uploads/2021/06/mumbai-skyline-skyscrapers-construction-1568x1045.jpg"
          }
          content2={
            "Why You Should Get A Website For Your Real Estate Business"
          }
          content3={"The real estate business is definitely one of"}
          content4={"the glorious ones in today s world. Making"}
          content5={"your real..."}
          date={"June 21, 2021"}
          style={""}
        />
        <Post
          img1={
            "https://evolv109.com/wp-content/uploads/2021/06/corporate-management-strategy-solution-branding-concept-1568x1045.jpg"
          }
          content2={
            "5 Benefits Of A Digital Marketing Strategy You Shouldnt Ignor"
          }
          content3={"The new year has already started. People have"}
          content4={"experienced horrible things in 2020 and 2021"}
          content5={"can be al..."}
          date={"February 12, 2021"}
          style={""}
        />
        <Post
          img1={"https://evolv109.com/wp-content/uploads/2021/06/gdpr112.webp"}
          content2={
            "Top 10 Digital Advertising Tips To Hone Your Marketing Strategy"
          }
          content3={"Do you think the world is digitally"}
          content4={"superseded? It doesnt matter what industry"}
          content5={"you are in now...."}
          date={"February 10, 2021"}
          style={"h-56"}
        />
      </div>
    </>
  );
};

export default Containtblog;

import React from "react";
import Language from "./Language";

const Jobs = () => {
  return (
    <div className="flex justify-start items-center pt-8">
      <div className="flex flex-col space-y-8">
        <h1 className="text-white text-[2.3rem] font-semibold space-y-8">
          Featured Jobs
        </h1>
        <p className="text-slate-600">
          A quick snapshot of just some of the roles Evolv109 is currently
          hiring for
        </p>
        <div className="flex flex-col space-y-6">
          <div className="flex space-x-10">
            <Language
              style={
                "bg-yellow-500 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
              content1={"ReactJS Developer"}
              content2={"Gurugram, Haryana"}
            />
            <Language
              style={
                "bg-red-500 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
              content1={"React Developer"}
              content2={" Hyderabad"}
            />
            <Language
              style={
                "bg-green-500 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
              content1={"ROR Developer"}
              content2={" Pune, Maharashtra"}
            />
          </div>
          <div className="flex space-x-10">
            <Language
              style={
                "bg-purple-500 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
              content1={"NodeJS Developer"}
              content2={"Kolkata"}
            />
            <Language
              style={
                "bg-blue-500 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
              content1={"AEM Developer"}
              content2={"Noida"}
            />
            <Language
              style={
                "bg-yellow-500 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
              content1={"IOS Developer"}
              content2={" Tirunelveli, Tamil Nadu"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

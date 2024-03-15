import React from "react";
import Ourvaluecomponents from "./Ourvaluecomponents";
import Leaf from "./Leaf";

const Ourvalue = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-16">
        <div className="flex flex-col justify-start items-start space-y-6">
          <div className="flex rounded-lg px-3 py-2 border-slate-300 border-[0.1px] items-center justify-center">
            <h1 className="text-slate-400 text-sm">OUR VALUES</h1>
          </div>
          <h2 className="text-[2.2rem] text-white font-semibold">
            Guiding Principles of Evolv109
          </h2>
          <p className="text-slate-500">
            At Evolv109, our values drive our success: excellence, innovation,
            customer- <br />
            centricity, integrity, collaboration, and continuous learning. We
            prioritize our <br /> customers, deliver exceptional solutions, and
            foster trust to propel businesses <br />
            forward.
          </p>
        </div>

        <h1 className="px-5 py-1 rounded-full border-slate-400 border-[0.1px] bg-red-500 text-white self-end mr-8">
          Get In Touch
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-8 mt-12 py-12">
        <Ourvaluecomponents
          leaf1={
            <Leaf
              style={
                "bg-orange-600 w-7 h-7 rounded-tr-full rounded-bl-full rounded-br-full"
              }
            />
          }
          leaf4={
            <Leaf
              style={
                "bg-blue-600 w-7 h-7 rounded-tl-full rounded-bl-full rounded-br-full"
              }
            />
          }
          Heading={"How We Work"}
          content1={"We work closely with you to deliver "}
          content2={"tailored, impactful solutions that drive"}
          content3={"your business forward."}
          style1={
            "bg-slate-900 rounded-3xl flex justify-center items-center border-slate-600 border-[0.2rem] px-10 py-12"
          }
        />
        <Ourvaluecomponents
          leaf1={
            <Leaf
              style={
                "bg-orange-600 w-7 h-7 rounded-tr-full rounded-bl-full rounded-br-full"
              }
            />
          }
          leaf2={
            <Leaf
              style={
                "bg-green-600 w-7 h-7 rounded-tr-full rounded-tl-full rounded-br-full"
              }
            />
          }
          leaf4={
            <Leaf
              style={
                "bg-blue-600 w-7 h-7 rounded-tl-full rounded-bl-full rounded-br-full"
              }
            />
          }
          Heading={"What We Do"}
          content1={"We provide comprehensive digital "}
          content2={"solutions to boost your online"}
          content3={"presence and drive business success."}
          style1={
            "bg-slate-900 rounded-3xl flex justify-center items-center border-slate-600 border-[0.2rem] px-10 py-12 mt-3"
          }
        />
        <Ourvaluecomponents
          leaf1={
            <Leaf
              style={
                "bg-orange-600 w-7 h-7 rounded-tr-full rounded-bl-full rounded-br-full"
              }
            />
          }
          leaf2={
            <Leaf
              style={
                "bg-green-600 w-7 h-7 rounded-tr-full rounded-tl-full rounded-br-full"
              }
            />
          }
          leaf3={
            <Leaf
              style={
                "bg-blue-600 w-7 h-7 rounded-tl-full rounded-bl-full rounded-br-full"
              }
            />
          }
          leaf4={
            <Leaf
              style={
                "bg-yellow-600 w-7 h-7 rounded-tl-full rounded-bl-full rounded-tr-full"
              }
            />
          }
          Heading={"Why We Succeed"}
          content1={"We succeed by combining "}
          content2={"expertise, innovation, and a"}
          content3={"customer-centric approach to"}
          content4={"deliver exceptional results."}
          style1={
            "bg-slate-900 rounded-3xl flex justify-center items-center border-slate-600 border-[0.2rem] px-12 py-10 pb-24 mt-16"
          }
        />
      </div>
    </>
  );
};

export default Ourvalue;

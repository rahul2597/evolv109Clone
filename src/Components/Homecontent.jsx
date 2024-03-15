import React from "react";
import Servicesoffer from "./Servicesoffer";

const Homecontent = () => {
  const Technologies = [
    "https://evolv109.com/wp-content/uploads/2023/03/my-sql.png",
    "https://evolv109.com/wp-content/uploads/2023/03/postgre-1.png",
    "https://evolv109.com/wp-content/uploads/2023/03/angular-1.png",
    "https://evolv109.com/wp-content/uploads/2023/03/java-script.png",
    "https://evolv109.com/wp-content/uploads/2023/03/react.png",
    "https://evolv109.com/wp-content/uploads/2023/03/python.png",
    "https://evolv109.com/wp-content/uploads/2023/03/php.png",
  ];
  return (
    <>
      <div className="item-center flex justify-center">
        <div className="border-slate-800 border-[0.02px] rounded-2xl px-8 py-3 flex justify-center items-center text-slate-500">
          <h1>TECHNOLOGIES WE USE</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <marquee scrollamount="5" behavior="" direction="" className="w-[60%]">
          {Technologies.map((url) => {
            return <img className="inline" src={url} alt="" />;
          })}
        </marquee>
      </div>
      <div className=" flex justify-evenly items-center space-x-16">
        <div className="flex flex-col space-y-6 justify-start mt-64 ">
          <div className="rounded-2xl border-[0.1px] border-slate-700 text-white w-24 flex items-center justify-center px-3 py-1 ">
            <h6 className="text-sm text-slate-600">Service</h6>
          </div>
          <h2 className="text-[2.2rem] text-whitemt-2 text-white  mt-2">
            {" "}
            Services we offer
          </h2>
          <p className="text-slate-400 mt-2">
            We offer revenue generating marketing solutions.
          </p>
          <div className=" bg-red-400 rounded-full flex justify-center items-center px-6 py-2 text-white w-36 mt-4">
            <h1>All Service</h1>
          </div>
        </div>
        <div className="flex mt-10 space-x-8 mr-80 ">
          <div className="flex-flex-col space-y-7 mt-10">
            <Servicesoffer
              img={"https://evolv109.com/wp-content/uploads/2023/03/UIUX.png"}
              content={"UX designers employ various"}
              content2={"techniques such as user research,"}
              content3={"information architecture, "}
              content4={"interaction ..."}
              heading={"UI/UX Design"}
              style={
                "bg-blue-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
            />
            <Servicesoffer
              img={"https://evolv109.com/wp-content/uploads/2023/05/exp5.png"}
              content={"Evolv109 understands that the"}
              content2={"design of a website should be in,"}
              content3={"tune with the requirements of "}
              content4={"the use..."}
              heading={"Web Design $ Developement"}
              style={
                "bg-orange-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
            />
          </div>
          <div className="flex-flex-col space-y-7">
            <Servicesoffer
              img={
                "https://evolv109.com/wp-content/uploads/2023/03/mobile-development.png"
              }
              content={"We are honestly passionate"}
              content2={"about Mobile App. We are full"}
              content3={"service iOS and Android app "}
              content4={"development age..."}
              heading={"Mobile App Development"}
              style={
                "bg-yellow-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
            />

            <Servicesoffer
              img={
                "https://evolv109.com/wp-content/uploads/2023/03/digital-marketing.png"
              }
              content={"Evolv109 is an industry leader in"}
              content2={"tech-empowered digital,"}
              content3={"marketing solutions. We provide "}
              content4={"ipremier ful..."}
              heading={"Digital Marketing"}
              style={
                "bg-green-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecontent;

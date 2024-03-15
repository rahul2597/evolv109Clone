import React from "react";

const HireExperts = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-10 ">
      <div className="flex justify-center items-center rounded-lg border-[0.2px] border-slate-400 px-3 py-1 text-slate-600 text-sm mt-10">
        <h1>HIRE EXPERTS</h1>
      </div>
      <div>
        <h1 className="text-[2rem] text-white font-bold">
          Recruit specialists in cutting-edge technologies
        </h1>
        <p className="text-white mt-4">
          Empower your organization's digital evolution with a mastery of
          cutting-edge tools and frameworks.
        </p>
      </div>
      <div className="flex space-x-10"> 
        <div>
          <img
            className="w-[34.1rem] h-[22.1rem]"
            src="https://evolv109.com/wp-content/uploads/2023/05/technologies.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-start space-y-6">
          <p className="text-slate-500">
            Pool of 750 experts in over 40 technologies covering various aspects
            of digital <br /> transformation services, including programming
            languages, web and mobile <br />
            frameworks, databases, cloud platforms, containerization,
            orchestration, CI/CD, <br /> big data, and machine learning tools.
          </p>
          <div className="px-6 py-2 bg-red-400 rounded-full flex justify-center items-center mt-2 ml-2">
            <h1>Schedule A Call</h1>
          </div>
        </div>
      </div>
      <div className="flex space-x-12 mt-24 pt-32">
        <div className="flex space-x-10 ">
          <div>
            <img
              className="w-[19.25rem] h-[32rem] rounded-s-full rounded-b-full object-cover"
              src="https://evolv109.com/wp-content/uploads/2023/04/why-us-image.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-end">
            <img
              className="w-[13.3rem] h-[14rem] rounded-e-full rounded-t-full"
              src="https://evolv109.com/wp-content/uploads/2023/03/why-us-image.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start space-y-7">
          <div className="flex justify-center items-center rounded-lg border-[0.2px] border-slate-400 px-3 py-1 text-slate-600 text-sm mt-10">
            <h1>WHY CHOOSE US</h1>
          </div>
          <h1 className="text-white text-[2rem] mt-4">
            Unleash Your Digital <br /> Potential with Evolv109
          </h1>
          <p className="text-slate-600">
            At Evolv109, we prioritize our clients and go above and beyond to{" "}
            <br /> deliver exceptional services. Our dedication, commitment, and{" "}
            <br />
            attention to detail set us apart. Our stunning designs and <br />
            profitable campaigns have made us the preferred choice for our{" "}
            <br /> clients. We genuinely care about you and treat you as our top{" "}
            <br /> priority. We strive to provide flawless services, ensuring
            you <br /> always feel valued and special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireExperts;

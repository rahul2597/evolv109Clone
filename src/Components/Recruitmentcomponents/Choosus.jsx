import React from "react";
import Choosecomponents from "./Choosecomponents";

const Choosus = () => {
  return (
    <div className=" flex justify-center items-center flex-col py-12">
      <h1 className="text-white text-[2.5rem] font-bold">Why Choose us</h1>
      <div className="flex  space-x-16 mt-16">
        <div className="flex flex-col space-y-4">
          <Choosecomponents
            img1={"https://evolv109.com/wp-content/uploads/2023/05/q1.png"}
            content1={"Get the best-screened candidates"}
            content2={
              " Evolv109 has a set of experienced technical recruiters who help you screen the best"
            }
            content3={"profiles as per your requirements."}
          />
          <Choosecomponents
            img1={"https://evolv109.com/wp-content/uploads/2023/05/q2.png"}
            content1={"Get the right fit for your business"}
            content2={
              "Evolv109 makes sure the candidate is culturally fit and has a proper background"
            }
            content3={
              "verification before providing the resumes to our clients."
            }
          />
          <Choosecomponents
            img1={"https://evolv109.com/wp-content/uploads/2023/05/q3.png"}
            content1={"Get your job done both effectively & efficiently"}
            content2={
              "Evolv109 believes in the concept of “Time Is Money” so we emphasize on keeping it"
            }
            content3={
              "crisp and simple for both our clients as well as the candidates."
            }
          />
        </div>
        <div>
          <div className="rounded-2xl w-[26rem] h[15rem] bg-white items-center justify-center flex pb-12 px-2">

            <video  controls={true} className='w-[26rem] h-[15rem] object-cover rounded'src="https://evolv109.com/wp-content/uploads/2023/05/hr-video-eppeok.mp4"></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choosus;

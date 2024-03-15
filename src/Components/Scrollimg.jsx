import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Scrollingimg from "./Scrollingimg";

const Scrollimg = ({ color }) => {
  return (
    <>
      <div className="flex justify-center items-center space-x-12 mt-24">
        <div className="flex flex-col space-y-8">
          <Scrollingimg
            img1={
              "https://evolv109.com/wp-content/uploads/2023/03/pd1-1568x8489.webp"
            }
            img2={
              "https://evolv109.com/wp-content/uploads/2023/03/new-rev-hero-logo.png"
            }
            content1={"Rev Hero"}
            content2={"Corporate informative...."}
            style1={`flex ${color} justify-start pt-4 `}
          />
          <Scrollingimg
            img1={
              "https://evolv109.com/wp-content/uploads/2023/03/Home-%E2%80%93-Outloud-scaled.webp"
            }
            img2={
              "https://evolv109.com/wp-content/uploads/2023/03/outloudlogo2.png"
            }
            content1={"OutLoud"}
            content2={"Action, Blog,Booking,CL... "}
            style1={`flex ${color} justify-start pt-4 `}
          />
        </div>
        <div className="flex flex-col space-y-8">
          <Scrollingimg
            img1={
              "https://evolv109.com/wp-content/uploads/2023/03/idle-1568x8251.webp"
            }
            img2={"https://evolv109.com/wp-content/uploads/2023/03/logo.webp"}
            content1={"Idle Heart"}
            content2={"Action, Blog,Booking,CL... "}
            style1={`flex ${color} justify-start pt-4 `}
          />
          <Scrollingimg
            img1={
              "https://evolv109.com/wp-content/uploads/2023/03/Home-Dating-Unsettled-Dare-to-Date-Differently.png"
            }
            img2={
              "https://evolv109.com/wp-content/uploads/2023/03/JoyOfoduSocialButtons2-300x300-min.png"
            }
            content1={"Dating Unsetteled"}
            content2={"Description: Wordpress.... "}
            img2Style={"w-16 h-16"}
            style1={`flex ${color} justify-start pt-4 `}
          />
        </div>
      </div>
    </>
  );
};

export default Scrollimg;

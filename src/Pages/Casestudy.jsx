import React from "react";
import Header from "../Components/Header";
import Scrollimg from "../Components/Scrollimg";
import Footer from "../Components/Footer";
import Casestudycontent from "../Components/Casestudycomponents/Casestudycontent";

const Casestudy = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center pt-40 flex-col">
        <Casestudycontent
          content1={"  CASE STUDIES"}
          heading={" The results speak for themselves"}
          para1content={
            " Discover how we’ve helped our clients achieve their goals through our"
          }
          para2content={"studies."}
        />
        <Scrollimg color={"text-red-500"} />
        <Footer />
      </div>
    </>
  );
};

export default Casestudy;

import React from "react";
import Header from "../Components/Header";
import Servicesoffer from "../Components/Servicesoffer";
import FandQ from "../Components/Servicescomponents/FandQ";
import Footer from "../Components/Footer";


const OurService = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-8 ">
        <div className="flex flex-col justify-center items-center mt-28 space-y-6">
          <h2 className="px-4 py-1 rounded-lg border-slate-600 border-[0.2px] text-sm text-slate-300">
            SERVICES
          </h2>
          <h1 className="text-slate-200 text-[2rem]">Our Services</h1>
          <div className="flex flex-col justify-center items-center">
            <p className="text-slate-600">
              Evolv109 is a tech-enabled digital marketing solutions provider,
              creating customized strategies for our clients based on their
              needs and goals We provide premier
            </p>
            <p className="text-slate-600">
              full service digital marketing solutions providing the most
              effective marketing solutions in the industry.
            </p>
          </div>
          <div className=" flex justify-center items-center space-x-10 pt-16">
            <div className="flex-flex-col space-y-7 ">
              <Servicesoffer
                img={"https://evolv109.com/wp-content/uploads/2023/03/UIUX.png"}
                content={
                  "UX designers employ various techniques such as user research, information"
                }
                content2={
                  "architecture, interaction design, visual design, and usability testing to craft"
                }
                content3={"seamless and engaging experiences. They collab... "}
                content4={""}
                heading={"UI/UX Design"}
                style={
                  "bg-blue-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
                }
              />
              <Servicesoffer
                img={
                  "https://evolv109.com/wp-content/uploads/2023/03/mobile-development.png"
                }
                content={
                  "We are honestly passionate about Mobile App. We are full service iOS and"
                }
                content2={
                  "Android app development agency we have been at the forefront of mobile app"
                }
                content3={
                  "development for both iOS and Android platforms. As a... "
                }
                content4={""}
                heading={"Mobile App Development"}
                style={
                  "bg-yellow-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
                }
              />
            </div>
            <div className="flex-flex-col space-y-7">
              <Servicesoffer
                img={"https://evolv109.com/wp-content/uploads/2023/05/exp5.png"}
                content={
                  " Evolv109 understands that the design of a website should be in tune with the"
                }
                content2={
                  "requirements of the user. When you take your business online by means of a"
                }
                content3={
                  " website, it helps you to communicate with your e... "
                }
                content4={""}
                heading={"Web Design $ Developement"}
                style={
                  "bg-orange-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
                }
              />
              <Servicesoffer
                img={
                  "https://evolv109.com/wp-content/uploads/2023/03/digital-marketing.png"
                }
                content={
                  "Evolv109 is an industry leader in tech-empowered digital marketing solutions. We"
                }
                content2={
                  "provide premier full service digital marketing solutions providing the most"
                }
                content3={"effective marketing solutions in the indust..."}
                content4={""}
                heading={"Digital Marketing"}
                style={
                  "bg-green-600 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-80 mt-32">
        <FandQ />
      </div>
      <Footer />
    </>
  );
};

export default OurService;

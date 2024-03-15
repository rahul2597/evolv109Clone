import React from "react";
import Header from "../Components/Header";
import Post from "../Components/Post";
import Footer from "../Components/Footer";
const Blog = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center pt-44">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="rounded-xl border-slate-600 border-[1px] px-5 py-2 text-slate-300 text-sm">
            OUR BLOG
          </h1>
          <h1 className="text-[2.2rem] text-white font-semibold">
            Articles & News
          </h1>

          <div className="flex justify-around space-x-48 pt-16">
            <div className="flex flex-col ">
              <h1 className="text-white text-[2.5rem] pb-4">Post Category</h1>
              <div className="flex flex-col space-y-4">
                <button className="px-3 py-2 rounded-3xl bg-red-500 text-white flex items-center justify-center">
                  All
                </button>
                <button className="px-3 py-2 rounded-3xl bg-slate-800 text-white flex items-center justify-center">
                  App Development
                </button>
                <button className="px-3 py-2 rounded-3xl bg-slate-800 text-white flex items-center justify-center">
                  Digital Marekting
                </button>
                <button className="px-3 py-2 rounded-3xl bg-slate-800 text-white flex items-center justify-center">
                  Gdpr
                </button>
                <button className="px-3 py-2 rounded-3xl bg-slate-800 text-white flex items-center justify-center">
                  Website-Developement
                </button>
              </div>
            </div>
            <div className="flex space-x-5 ">
              <div className="flex flex-col space-y-8 px-2">
                <Post
                  img1={
                    "https://evolv109.com/wp-content/uploads/2021/06/mumbai-skyline-skyscrapers-construction-1568x1045.jpg"
                  }
                  content2={
                    "Why You Should Get A Website For Your Real Estate Business"
                  }
                  content3={"The real estate business is definitely one of the"}
                  content4={
                    "glorious ones in today’s world. Making your real..."
                  }
                  content5={""}
                  date={"February 12, 2021"}
                  style={""}
                />
                <Post
                  img1={
                    "https://evolv109.com/wp-content/uploads/2021/06/gdpr112.webp"
                  }
                  content2={
                    "Top 10 Digital Advertising Tips To Hone Your Marketing Strategy"
                  }
                  content3={"Do you think the world is digitally"}
                  content4={"superseded? It doesnt matter what industry"}
                  content5={"you are in now...."}
                  date={"February 10, 2021"}
                  style={"h-56"}
                />
                <Post
                  img1={
                    "https://evolv109.com/wp-content/uploads/2021/02/technology-communication-icons-symbols-concept-1568x1197.jpg"
                  }
                  content2={
                    "Top 3 Ways To Optimize Your Content Strategy For Lead Generatio"
                  }
                  content3={"In today’s digitally superseded world, the"}
                  content4={"business model has reached beyond daily blog"}
                  content5={"posting an..."}
                  date={"February 12, 2021"}
                  style={""}
                />
              </div>
              <div className="flex flex-col space-y-8">
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
                  img1={
                    "https://evolv109.com/wp-content/uploads/2021/06/young-woman-sitting-yellow-sofa-holding-facebook-icon-showing-thumbup-sign-1568x1045.jpg"
                  }
                  content2={
                    "How To Generate Leads From Facebook To Grow Your Business"
                  }
                  content3={"Do you want to connect people with your"}
                  content4={"business? If it’s a big “Yes” then you need to"}
                  content5={"star..."}
                  date={"February 12, 2021"}
                  style={""}
                />
                <Post
                  img1={
                    "https://evolv109.com/wp-content/uploads/2021/02/people-holding-instagram-icon-1568x1311.jpg"
                  }
                  content2={
                    "Know What to Post on Instagram & What Your Customers Want to See"
                  }
                  content3={"Let’s start with a surprising fact  more than"}
                  content4={"3,000 people every month search on Google"}
                  content5={"about w..."}
                  date={"February 12, 2021"}
                  style={""}
                />
              </div>
            </div>
          </div>
          <div className="flex  space-x-4 ml-44 mt-16">
            <h1 className="border-[1px] border-slate-700 px-4 py-2 items-center flex justify-center text-white rounded">
              1
            </h1>
            <h1 className="border-[1px] border-slate-700 px-4 py-2 items-center flex justify-center text-white rounded">
              2
            </h1>
            <h1 className="border-[1px] border-slate-700 px-4 py-2 items-center flex justify-center text-white rounded">
              3
            </h1>
            <h1 className="border-[1px] border-slate-700 px-4 py-2 items-center flex justify-center text-white rounded">
              ...
            </h1>
            <h1 className="border-[1px] border-slate-700 px-4 py-2 items-center flex justify-center text-white rounde">
              7
            </h1>
            <h1 className="border-[1px] border-slate-700 px-4 py-2 items-center flex justify-center text-white rounded">
              Next
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

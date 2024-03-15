import React from "react";
import Question from "./Question";

const FandQ = () => {
  return (
    <>
      <div className="flex flex-col space-y-7">
        <h2 className="px-4 py-1 rounded-xl border-slate-600 border-[2px] text-slate-600 text-sm w-20">
          FAQ
        </h2>
        <h1 className="text-[2.3rem] text-white">Frequently asked question</h1>
        <Question
          content1={
            "How can Evolv109 help my business establish an online presence?"
          }
        />
        <Question
          content1={"What industries does Evolv109 specialize in serving?"}
        />
        <Question
          content1={
            "What types of digital marketing solutions does Evolv109 offer?"
          }
        />
        <Question
          content1={"Can Evolv109 assist with website development and design?"}
        />
        <Question
          content1={
            "How does Evolv109 approach search engine optimization (SEO)?"
          }
        />
        <Question
          content1={
            "What is the process for working with Evolv109 on a digital marketing campaign?"
          }
        />
        <Question
          content1={
            "How does Evolv109 ensure data security and confidentiality?"
          }
        />
        <Question
          content1={
            "Can Evolv109 provide examples of past successful projects or client testimonials?"
          }
        />
        <Question
          content1={
            "Does Evolv109 offer ongoing support and maintenance for websites and digital assets?"
          }
        />
        <Question
          content1={
            "What sets Evolv109 apart from other digital marketing agencies in the industry?"
          }
        />
      </div>
    </>
  );
};

export default FandQ;

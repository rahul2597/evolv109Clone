import React from "react";

const Nichesector = () => {
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
    <div className="flex flex-col space-y-6 justify-center items-center mt-12">
      <h1 className="text-[2.3rem] font-semibold text-white">Niche Sectors</h1>
      <p className="text-slate-400">Get started with best industries</p>
      <marquee scrollamount="5" behavior="" direction="" className="w-[60%]">
        {Technologies.map((url) => {
          return <img className="inline" src={url} alt="" />;
        })}
      </marquee>
    </div>
  );
};

export default Nichesector;

import React from 'react'

const Projectdeliver = () => {
  return (
   <>
    <div className="flex justify-center items-center mt-32 space-x-8">
        <div className="flex space-x-8">
          <div className="flex flex-col space-y-8">
            <div className="bg-slate-900 rounded-3xl w-[19.3rem] h-[13rem] items-center flex justify-center flex-col pr-6">
              <h1 className="text-[3rem] text-white">1200+</h1>
              <h2 className="text-lg text-white">Project Delivered</h2>
            </div>
            <div className="bg-slate-900 rounded-3xl w-[19.3rem] h-[13rem] items-center  flex justify-center flex-col">
              <h1 className="text-[3rem] text-white">5+</h1>
              <h2 className="text-lg text-white">Countries</h2>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="bg-slate-900 rounded-3xl w-[19.3rem] h-[13rem] items-center  flex justify-center flex-col">
              <h1 className="text-[3rem] text-white">900+</h1>
              <h2 className="text-lg text-white">Clients Served</h2>
            </div>
            <div className="bg-slate-900 rounded-3xl w-[19.3rem] h-[13rem] items-center  flex justify-center flex-col">
              <h1 className="text-[3rem] text-white">12+</h1>
              <h2 className="text-lg text-white">CMS $ Framework</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[28.1rem] h-[37.5rem] object-cover">
            <img
              className=" rounded-b-full rounded-r-full"
              src="https://evolv109.com/wp-content/uploads/2023/03/stats-image.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Projectdeliver
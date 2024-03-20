import { useState } from "react";
import "./App.css";
import "./Components/Animation.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutpage from "./Pages/Aboutpage";
import Casestudy from "./Pages/Casestudy";
import OurService from "./Pages/OurService";
import Recruitment from "./Pages/Recruitment";
import Contact from "./Pages/Contact";
import Schedulecall from "./Pages/Schedulecall";
import Blog from "./Pages/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black  h-full w-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<Aboutpage />} />
            <Route path="/CaseStudy" element={<Casestudy />} />
            <Route path="/Ourservice" element={<OurService />} />
            <Route path="/Recruitment" element={<Recruitment />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Contact" element={<Schedulecall />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

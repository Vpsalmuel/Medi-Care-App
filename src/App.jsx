import React from "react";
import Navbar from "./component/Navbar";


import Home from "./component/pages/Home";

// import { Route, Routes } from "react-router";
// import Caregivers from "./component/pages/Caregivers";
// import About from "./component/pages/About";
// import Contact from "./component/pages/Contact";
// import Services from "./component/pages/Services";

// import CreateAccount from "./component/pages/CreateAccount";
// import Hero from "./component/Hero";


const App = () => {
  return <div >
    {/* <Nav/> */}
    <Navbar />
    {/* <CreateAccount/> */}
    {/* <Bav/> */}
    {/* <Routes>
      <Route>
        <Route path="/" element={<Hero/>} />
        <Route path="caregivers" element={<Caregivers />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes> */}
    <Home/>
  </div>;
};

export default App;


// className=" lg:bg-slate-500 bg-white md:bg-slate-400 xl:bg-slate-600 2xl:bg-slate-700"
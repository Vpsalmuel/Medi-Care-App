import React from "react";
import Navbar from "./component/Navbar";



import Home from "./component/pages/Home";
import { Route, Routes } from "react-router";
import Caregivers from "./component/pages/Caregivers";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Services from "./component/pages/Services";


const App = () => {
  return <div>
    <Navbar />
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="caregivers" element={<Caregivers />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  </div>;
};

export default App;



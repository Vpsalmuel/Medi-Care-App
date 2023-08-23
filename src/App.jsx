import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from 'react-router-dom';



import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import CreateAccount from "./component/pages/CreateAccount";
import CaregiversReg from "./component/GiverForm/CaregiverReg";
import Services from "./component/pages/Services";
import Caregivers from "./component/pages/Caregivers";
import Contact from "./component/pages/Contact";
import Footer from "./component/Footer";
import Recovery from "./component/pages/Recovery";
import Carerecieverreg from "./component/ReciverForm/CarerecieverReg";
import About from "./component/pages/About";






const App = () => {
  return <div  className="transition">
    <Navbar />
    <Routes >

      <Route path="/home" element={<Home />} />
       <Route path="/services" element={<Services/>} />
      <Route path="/caregivers" element={<Caregivers />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/caregiversReg" element={<CaregiversReg />} />
      <Route path="/carerecieverreg" element={<Carerecieverreg/>} />
      <Route path="/recovery" element={<Recovery/>} />
      <Route path="/createaccounR" element={<Carerecieverreg/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
 
    </div>;
};

export default App;



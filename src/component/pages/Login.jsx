import React from "react";
// import SailLogo from '../../assets/sail.jpg'
const Login = () => {
  return (
    <div className=" bg-gradient-to-r from-[#B2C4FC] via-[#D6C4FA] to-[#A5B4E7] flex items-center justify-center h-screen flex-col ">
      {/* <img src={SailLogo} alt="Sail Logo" className=" w-[3rem] m-auto" /> */}
      <form className="bg-white shadow-lg shadow-[grey] rounded-xl px-1 pt-6 pb-8 mb-6 border-radius: 5px w-[25%]">
        <div className="text-center  text-2xl font-bold">
          <h1>Sign In</h1>
        </div>
        <div className="block justify-center items-center flex-col  h-80 mt-10  '10px'">
          <div className=" text-gray-700 text-sm font-medium mb-2 flex justify-center items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="p-3 border rounded-xl shadow-[grey] shadow-sm w-[22vw] "
            />
          </div>
          <div className=" text-gray-700 text-sm font-medium mb-2 flex justify-center items-center">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-3 border rounded-xl shadow-[grey] shadow-sm w-[22vw] mt-[0.7rem]"
            />
          </div>
          <div className="text-sm font-normal mb-2 pl-[1rem] text-[#4693FC]">
            <h6>Forgot password?</h6>
          </div>
          <div className="  bg-[#04468C] text-sm font-bold mb-2 flex justify-center items-center border rounded-lg text-[#FCFEFC] font-[small] p-2 m-5" >
            <button>Sign In</button>
          </div>
          <div className="flex justify-center text-center">
            <h6 className="text-sm font-normal">Create an account</h6>
            <a href="" className="text-sm font-normal text-[#2C82FC] px-1">Signup now</a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
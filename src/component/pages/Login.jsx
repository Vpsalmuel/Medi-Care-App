import React from 'react'

import { useState } from "react";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Login Success") {
                    navigate("/client/src/component/Home.jsx");
                } else if (result.data === "Password didn't match") {
                    console.log("Password is incorrect");
                } else if (result.data === "User not registered") {
                    console.log("User is not registered");
                }
            })
            .catch(err => console.log(err));
    };


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 pt-20   mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold font-Paytone leading-tight tracking-tight text-emerald-900 md:text-2xl dark:text-white">
                            Welcome, Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6 font-Poppins" onSubmit={handleSubmit}>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-emerald-600 text-emerald-900 sm:text-sm rounded-lg focus:ring-emerald-800 focus:border-emerald-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-emerald-600 text-emerald-900 sm:text-sm rounded-lg focus:ring-emerald-800 focus:border-emerald-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-emerald-600 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-emerald-800 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-emerald-600">Remember me</label>
                                    </div>
                                </div>
                                <a href="/recovery" className="text-sm font-medium text-emerald-800 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button className="text-white text-lg font-semibold w-[100%] h-[47px] font-Poppins px-[78px] py-2.5 bg-gradient-to-r from-emerald-500 to-lime-300 rounded-xl justify-center items-center gap-2.5 inline-flex focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="/createaccount" className="font-bold text-emerald-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Login 
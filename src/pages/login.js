import React from "react";
import { Link } from "react-router-dom";

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import bg1 from '../assets/images/01.jpg'

import Switcher from "../components/switcher";
import BackToHome from "../components/backToHome";

export default function Login(){
    return(
        <>
         <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg1})`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="p-6">
                            <Link to="">
                                <img src={logoDark} className="mx-auto block dark:hidden" alt=""/>
                                <img src={logoLight} className="mx-auto dark:block hidden" alt=""/>
                            </Link>
                            <h5 className="my-6 text-xl font-semibold">Login</h5>
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com"/>
                                    </div>
    
                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-3" placeholder="Password:"/>
                                    </div>
    
                                    <div className="flex justify-between mb-4">
                                        <div className="flex items-center mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe"/>
                                            <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link to="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                    </div>
    
                                    <div className="mb-4">
                                        <Link to="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Login / Sign in</Link>
                                    </div>
    
                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Don't have an account ?</span> <Link to="/signup" className="text-black dark:text-white font-medium">Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                            <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Hously. Designed by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <BackToHome/>
        <Switcher/>
        </>
    )
}
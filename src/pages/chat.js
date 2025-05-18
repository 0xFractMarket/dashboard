import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import client7 from '../assets/images/client/07.jpg'
import client1 from '../assets/images/client/01.jpg'
import SimpleBar from "simplebar-react";
import { chatData } from "../data/data";

export default function Chat(){
    let [ show, setShow ] = useState(false);

    useEffect(() =>{
        let closeModal = () =>{
            setShow(false)
        }
        document.addEventListener('mousedown', closeModal);
        
        return()=>{
            document.removeEventListener('mousedown', closeModal);
        }
    })
    return(
        <div className="container-fluid relative px-3 h-screen">
            <div className="layout-specing h-full">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Chatbox</h5>

                    <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link to="/">Hously</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Chat</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-12 mt-6 gap-2 h-[calc(100vh-120px)]">
                    <div className="col-span-12 h-full">
                        <div className="rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 h-full flex flex-col">
                            <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 p-4">
                                <div className="flex">
                                    <img src={client1} className="size-11 rounded-full shadow dark:shadow-gray-700" alt=""/>
                                    <div className="overflow-hidden ms-3">
                                        <Link to="#" className="block font-semibold text-truncate">Cristino Murfy</Link>
                                        <span className="text-slate-400 flex items-center text-sm"><span className="bg-green-600 text-white text-[10px] font-bold rounded-full size-2 me-1"></span> Online</span>
                                    </div>
                                </div>

                                <div className="dropdown relative">
                                    <button onClick={()=>setShow(true)} className="dropdown-toggle items-center" type="button">
                                        <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-green-600/5 hover:bg-green-600 border-green-600/10 hover:border-green-600 text-green-600 hover:text-white rounded-md"><i className="mdi mdi-dots-vertical"></i></span>
                                    </button>
                                    <div className={`${show ? 'show' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700`}>
                                        <ul className="py-2 text-start">
                                            <li>
                                                <Link to="" className="block py-1.5 px-4 hover:text-green-600"><i className="mdi mdi-account-outline"></i> Profile</Link>
                                            </li>
                                            <li className="ms-0">
                                                <Link to="" className="block py-1.5 px-4 hover:text-green-600"><i className="mdi mdi-cog-outline"></i> Profile Settings</Link>
                                            </li>
                                            <li className="ms-0">
                                                <Link to="" className="block py-1.5 px-4 hover:text-green-600"><i className="mdi mdi-trash-can-outline"></i> Delete</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <SimpleBar className="flex-1">
                                <ul className="p-4 list-none mb-0">
                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <img src={client1} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hey Calvin</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>59 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <img src={client7} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hello Cristino</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>45 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <img src={client7} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">How can i help you?</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>44 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <img src={client1} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Nice to meet you</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>42 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <img src={client1} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hope you are doing fine?</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>40 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <img src={client7} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">I'm good thanks for asking</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>38 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <img src={client1} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>35 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <img src={client7} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Sure please check below link to find more useful information <Link to="https://shreethemes.in/hously/" target="_blank" className="text-green-600">https://shreethemes.in/hously/</Link></p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>29 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <img src={client1} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Thank you 😊</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>26 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <img src={client7} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-[16px] shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Welcome</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>15 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex items-center mb-3">
                                                <div className="relative">
                                                    <img src={client1} className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="text-slate-400 text-sm rounded mb-1">Cristino is typing
                                                        <span className="animate-typing ms-1">
                                                            <span className="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                            <span className="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                            <span className="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </SimpleBar>

                            <div className="p-2 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex ">
                                    <input type="text" className="form-input w-full py-2 px-3 h-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Enter Message..."/>

                                    <div className="min-w-[125px] text-end">
                                        <Link to="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md"><i className="mdi mdi-send"></i></Link>
                                        <Link to="#" className="size-9 mx-1 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md"><i className="mdi mdi-emoticon-happy-outline"></i></Link>
                                        <Link to="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md"><i className="mdi mdi-paperclip"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
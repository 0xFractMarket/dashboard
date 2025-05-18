import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logoLight from '../assets/images/logo.png'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Sidebar(){
    let [ manu, setmanu ] = useState('');
    let [ submanu, setSubManu ] = useState('');

    let location = useLocation();
    let current = location.pathname

    useEffect(()=>{
        setSubManu(current);
        setmanu(current)
    },[current])
    
    return(
        <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link to="/"><img src={logoLight} alt=""/></Link>
                </div>
                <SimpleBar style={{height: "calc(100% - 70px)"}}>
                    <ul className="sidebar-menu border-t border-white/10">
                        <li className={`${manu === "/" || ""? 'active' : ''} ms-0`}>
                            <Link to="/"><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i>Dashboard</Link>
                        </li>

                        <li className={`${manu === "/explore-property" ? 'active' : ''} ms-0`}>
                            <Link to="/explore-property"><i className="mdi mdi-home-city me-2"></i>Explore Properties</Link>
                        </li>

                        <li className={`${manu === "/favorite-property" ? 'active' : ''} ms-0`}>
                            <Link to="/favorite-property"><i className="mdi mdi-home-heart me-2"></i>Favorite Properties</Link>
                        </li>

                        <li className={`${manu === "/chat" ? 'active' : ''} ms-0`}>
                            <Link to="/chat"><i className="mdi mdi-chat-outline me-2"></i>Personal AI Advisor</Link>
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/starter", "/faqs", "/pricing", "/review","/privacy", "/terms"].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={() =>setSubManu(submanu === "/page-item" ? "" : "/page-item")}><i className="mdi mdi-file-document-outline me-2"></i>About</Link>
                            <div className={`sidebar-submenu ${["/starter", "/faqs", "/pricing", "/review","/privacy", "/terms", "/page-item"].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/faqs" ? 'active' : ''} ms-0`}><Link to="/faqs">FAQs</Link></li>
                                    <li className={`${manu === "/review" ? 'active' : ''} ms-0`}><Link to="/review">Review</Link></li>
                                    <li className={`${manu === "/privacy" ? 'active' : ''} ms-0`}><Link to="/privacy">Privacy Policy</Link></li>
                                    <li className={`${manu === "/terms" ? 'active' : ''} ms-0`}><Link to="/terms">Term & Condition</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="relative lg:m-8 m-6 px-8 py-10 rounded-lg bg-gradient-to-b to-transparent from-slate-800 text-center">
                            <span className="relative z-10">
                                <span className="text-xl font-medium h5 text-white">Upgrade to Pro</span>

                                <span className="text-slate-400 mt-3 mb-5 block">Get one month free and subscribe to pro</span>

                                <Link to="https://1.envato.market/hously-react" target="_blank" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-white rounded-md">Subscribe</Link>
                            </span>
                
                            <span className="mdi mdi-home-city-outline text-[160px] absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto text-center opacity-[0.02] text-white z-0"></span>
                        </li>
                    </ul>
                </SimpleBar>
            </div>
        </nav>
    )
}
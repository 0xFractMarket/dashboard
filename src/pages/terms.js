import React, { useState } from "react";
import { Link } from "react-router-dom";

import { accordianData } from "../data/data";
import { FiChevronDown } from "react-icons/fi";


export default function Terms(){
    let [ accordion1, setAccordion1 ] = useState(0)
    return(
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Terms & Conditions</h5>

                    <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link to="index">Hously</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Terms</li>
                    </ul>
                </div>

                <div className="container relative mt-6">
                    <div className="md:flex justify-center">
                        <div className="lg:w-4/5 w-full">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <h5 className="text-lg font-semibold mb-4">Introduction :</h5>
                                <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                                <h5 className="text-lg font-semibold mb-4 mt-6">User Agreements :</h5>
                                <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have <b className="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b className="text-red-600">composed</b> in a pseudo-Latin language which more or less <b className="text-red-600">corresponds</b> to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also <b className="text-red-600">incomprehensible</b>, but it imitates the rhythm of most European languages in Latin script. The <b className="text-red-600">advantage</b> of its Latin origin and the relative <b className="text-red-600">meaninglessness</b> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's <b className="text-red-600">attention</b> from the layout.</p>
                                <p className="text-slate-400 mt-3">There is now an <b className="text-red-600">abundance</b> of readable dummy texts. These are usually used when a text is <b className="text-red-600">required purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <b className="text-red-600">nonsensical</b> stories.</p>
                                <p className="text-slate-400 mt-3">It seems that only <b className="text-red-600">fragments</b> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                
                                <h5 className="text-lg font-semibold mb-4 mt-6">Restrictions :</h5>
                                <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                                <ul className="list-none text-slate-400 mt-3">
                                    <li className="flex mt-2 ms-0"><i className="mdi mdi-arrow-right text-green-600 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="flex mt-2 ms-0"><i className="mdi mdi-arrow-right text-green-600 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                    <li className="flex mt-2 ms-0"><i className="mdi mdi-arrow-right text-green-600 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                                    <li className="flex mt-2 ms-0"><i className="mdi mdi-arrow-right text-green-600 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="flex mt-2 ms-0"><i className="mdi mdi-arrow-right text-green-600 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                    <li className="flex mt-2 ms-0"><i className="mdi mdi-arrow-right text-green-600 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                                </ul>

                                <h5 className="text-lg font-semibold mt-6">Users Question & Answer :</h5>

                                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                    {accordianData.map((item, index) =>{
                                        return(
                                            <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4" key={index}>
                                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                    <button type="button" className={`${accordion1 === index ? ' bg-gray-50 dark:bg-slate-800 text-green-600' :' text-dark dark:text-white'} flex justify-between items-center p-5 w-full font-medium text-start`} onClick={() =>setAccordion1(index)}>
                                                        <span>{item.title}</span>
                                                        <FiChevronDown className={`${accordion1 === index ? 'rotate-180' : ''} size-4 shrink-0`}/>
                                                    </button>
                                                </h2>
                                                <div className={accordion1 === index ? '' : 'hidden'}>
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="mt-6">
                                    <Link to="" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">Accept</Link>
                                    <Link to="" className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md ms-2">Decline</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
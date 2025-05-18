import React from "react";
import { Link } from "react-router-dom";
import { propertiesData } from "../data/data";
import { LiaCompressArrowsAltSolid, LiaNewspaperSolid, MdOutlineWaterDrop, GoLightBulb, GiRoad, CiLocationOn } from "../assets/icons/vander";

export default function ExploreProperty(){
    return(
        <>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Explore Properties</h5>

                    <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link to="/">Hously</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Properties</li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    {propertiesData.map((item,index) =>{
                        return(
                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={index}>
                                <div className="relative property-pic">
                                    <img src={item.image} alt=""/>

                                    <div className="absolute top-4 end-4">
                                        <Link to="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart text-[20px]"></i></Link>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="p-1">
                                        <h3 className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</h3>
                                        <Link to={`/property-detail/${item.id}`} className={`property-button mt-4 w-full ${!item.enabled ? 'disabled' : ''}`}>
                                            {item.enabled ? 'View Property' : 'Coming soon'}
                                        </Link>
                                    </div>

                                    <ul className="pt-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none flex-wrap">
                                        <li className="flex items-center me-4 mb-4">
                                            <LiaCompressArrowsAltSolid className="text-2xl me-2 text-green-600" />
                                            <span>{item.square} mts2</span>
                                        </li>

                                        <li className="flex items-center me-4 mb-4">
                                            <LiaNewspaperSolid className="text-2xl me-2 text-green-600" />
                                            <span>{item.legalConsiderations.titleIssues}</span>
                                        </li>

                                        <li className="flex items-center me-4 mb-4">
                                            <MdOutlineWaterDrop className="text-2xl me-2 text-green-600" />
                                            <span>{item.utilityInformation.waterSource}</span>
                                        </li>

                                        <li className="flex items-center me-4 mb-4">
                                            <GoLightBulb className="text-2xl me-2 text-green-600" />
                                            <span>{item.utilityInformation.electricitySource}</span>
                                        </li>

                                        <li className="flex items-center me-4 mb-4">
                                            <GiRoad className="text-2xl me-2 text-green-600" />
                                            <span>{item.terrainFeatures.accessibility}</span>
                                        </li>

                                        <li className="flex items-center me-4 mb-4">
                                            <CiLocationOn className="text-2xl me-2 text-green-600" />
                                            <span>{item.address}, {item.state}</span>
                                        </li>
                                    </ul>

                                    <ul className="pt-6 flex justify-between items-center list-none">
                                        <li>
                                            <span className="text-slate-400">Property Price</span>
                                            <p className="text-lg font-medium">${item.price}</p>
                                        </li>

                                        <li>
                                            <span className="text-slate-400">Token Price</span>
                                            <p className="text-lg font-medium">$100</p>
                                        </li>

                                        <li>
                                            <span className="text-slate-400">Rating</span>
                                            <ul className="text-lg font-medium text-amber-400 list-none">
                                                <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                        <i className="mdi mdi-chevron-left text-[20px]"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 size-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                        <i className="mdi mdi-chevron-right text-[20px]"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
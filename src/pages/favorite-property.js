import React from "react";
import { Link } from "react-router-dom";
import { propertiesData } from "../data/data";
import { LiaCompressArrowsAltSolid, LiaNewspaperSolid, MdOutlineWaterDrop, GoLightBulb, GiRoad, CiLocationOn } from "../assets/icons/vander";

export default function FavoriteProperty(){
    return(
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Favorite Properties</h5>

                    <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link to="/">FractMarket</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Properties</li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    {propertiesData.map((item,index) =>{
                        return(
                            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={index}>
                                <div className="relative property-pic">
                                    <img src={item.image} alt="" />

                                    <div className="absolute top-4 end-4">
                                        <Link to="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart text-[20px]"></i></Link>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <Link to={`/property-detail/${item.id}`}>
                                        <h3 className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</h3>
                                    </Link>
                                    <ul className="pt-2 flex justify-between items-center list-none">
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
                                    <Link to={`/property-detail/${item.id}`} className={`property-button mt-4 w-full ${!item.enabled ? 'disabled' : ''}`}>
                                        {item.enabled ? 'View Property' : 'Coming soon'}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
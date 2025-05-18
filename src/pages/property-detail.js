import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LiaNewspaperSolid, MdOutlineWaterDrop, GoLightBulb, GiRoad, CiLocationOn, LiaBathSolid, LiaCompressArrowsAltSolid } from "../assets/icons/vander";
import { AiOutlineCamera } from "react-icons/ai";

import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';

import { propertiesData } from "../data/data";

function GoogleMapsURLToEmbedURL(GoogleMapsURL) {
    var coords = /\@([0-9\.\,\-a-zA-Z]*)/.exec(GoogleMapsURL);
    if (coords != null) {
        var coordsArray = coords[1].split(',');
        return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d" + coordsArray[1] + "!3d" + coordsArray[0] + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098";
    }
}

export default function PropertyDetail(){
    let params = useParams();
    let id = params.id;
    let data = propertiesData.find((property) => property.id === parseInt(id));

    let [isOpen, setIsOpen] = useState(false);
    let [photoIndex, setActiveIndex] = useState(0);

    let handleCLick = (index) => {
        setActiveIndex(index)
        setIsOpen(true);
    }

    return(
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Property Details</h5>

                    <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link to="/">Hously</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Property Details</li>
                    </ul>
                </div>

                <div className="md:flex mt-4">
                    <div className="lg:w-1/2 md:w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                            <img src={data?.detail[0]} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link to="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2">
                        <div className="flex">
                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={data?.detail[1]} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={data?.detail[2]} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={data?.detail[3]} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={data?.detail[4]} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={data?.detail[photoIndex]}
                        nextSrc={data?.detail[(photoIndex + 1) % data?.detail.length]}
                        prevSrc={data?.detail[(photoIndex + data?.detail.length - 1) % data?.detail.length]}
                        onCloseRequest={() =>setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setActiveIndex((photoIndex + data?.detail.length - 1) % data?.detail.length,
                            )
                        }
                        onMoveNextRequest={() =>
                            setActiveIndex((photoIndex + 1) % data?.detail.length,
                            )
                        }
                    />
                )}

                <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-6 mt-6">
                    <div className="lg:col-span-8">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow dark:shadow-gray-700">
                            <h4 className="text-2xl font-medium">{data?.name}</h4>

                            <ul className="py-6 flex items-center list-none list-features flex-wrap">
                                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                                    <LiaCompressArrowsAltSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">{data?.square} mts2</span>
                                </li>

                                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                                    <LiaBathSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">{data?.baths} Baths</span>
                                </li>

                                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                                    <LiaNewspaperSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">{data?.legalConsiderations.titleIssues}</span>
                                </li>

                                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                                    <MdOutlineWaterDrop className="lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">{data?.utilityInformation.waterSource}</span>
                                </li>

                                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                                    <GoLightBulb className="lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">{data?.utilityInformation.electricitySource}</span>
                                </li>

                                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                                    <GiRoad className="lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">{data?.terrainFeatures.accessibility}</span>
                                </li>

                                <li className="flex items-center lg:m-6 lg:ml-0 lg:mb-0 m-4 ml-0 mb-0">
                                    <CiLocationOn className="lg:text-3xl text-2xl me-2 text-green-600" />
                                    <span className="lg:text-xl">{data?.address}, {data?.state}</span>
                                </li>
                            </ul>

                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.canItBeDivided}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.terrainType}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.elevation}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.soilQuality}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.naturalResources}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.topography}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.accessibility}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.proximityToAmenities}</p>
                            <p className="text-slate-400 mt-4">{data?.terrainFeatures.environmentalConcerns}</p>

                            <p className="text-slate-400 mt-4">{data?.legalConsiderations.zoningRegulations}</p>
                            <p className="text-slate-400 mt-4">{data?.legalConsiderations.landUseRestrictions}</p>
                            <p className="text-slate-400 mt-4">{data?.legalConsiderations.easements}</p>
                            <p className="text-slate-400 mt-4">{data?.legalConsiderations.propertyTaxStatus}</p>
                            <p className="text-slate-400 mt-4">{data?.legalConsiderations.titleIssues}</p>
                            <p className="text-slate-400 mt-4">{data?.legalConsiderations.surveyAvailable ? "Survey available" : "Survey not available"}</p>

                            <p className="text-slate-400 mt-4">{data?.utilityInformation.waterSource}</p>
                            <p className="text-slate-400 mt-4">{data?.utilityInformation.waterSourceComment}</p>
                            <p className="text-slate-400 mt-4">{data?.utilityInformation.sewerSystem}</p>
                            <p className="text-slate-400 mt-4">{data?.utilityInformation.electricitySource}</p>
                            <p className="text-slate-400 mt-4">{data?.utilityInformation.electricitySourceComment}</p>
                            <p className="text-slate-400 mt-4">{data?.utilityInformation.gasAvailability}</p>
                            <p className="text-slate-400 mt-4">{data?.utilityInformation.internetConnectivity}</p>

                            <p className="text-slate-400 mt-4">{data?.developmentPotential.futureLandValue}</p>
                            <p className="text-slate-400 mt-4">{data?.developmentPotential.potentialLandUse}</p>
                            <p className="text-slate-400 mt-4">{data?.developmentPotential.infrastructurePlans}</p>
                            <p className="text-slate-400 mt-4">{data?.developmentPotential.surroundingDevelopment}</p>
                            <p className="text-slate-400 mt-4">{data?.developmentPotential.marketTrends}</p>
                            <p className="text-slate-400 mt-4">{data?.developmentPotential.investmentOpportunities}</p>

                            <div className="w-full leading-[0] border-0 mt-6">
                                <iframe src={GoogleMapsURLToEmbedURL(data?.googleMapsLink)} style={{border:"0"}} title="hously" className="w-full h-[500px]" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                            <div className="p-6">
                                <h5 className="text-2xl font-medium">Price:</h5>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-medium">$ {data?.price}</span>

                                    <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">For Sale</span>
                                </div>

                                <ul className="list-none mt-4">
                                    <li className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">Days on Hously</span>
                                        <span className="font-medium text-sm">124 Days</span>
                                    </li>

                                    <li className="flex justify-between items-center mt-2">
                                        <span className="text-slate-400 text-sm">Price per sq ft</span>
                                        <span className="font-medium text-sm">$ 186</span>
                                    </li>

                                    <li className="flex justify-between items-center mt-2">
                                        <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                        <span className="font-medium text-sm">$ 1497/Monthly</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex">
                                <div className="p-1 w-1/2">
                                    <Link to="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Book Now</Link>
                                </div>
                                <div className="p-1 w-1/2">
                                    <Link to="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Offer Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                            <div className="mt-6">
                                <Link to="contact.html" className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"><i className="mdi mdi-phone align-middle me-2"></i> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
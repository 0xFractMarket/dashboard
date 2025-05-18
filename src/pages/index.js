import React,{useRef} from "react";
import { Link } from "react-router-dom";

import CountUp from 'react-countup';
import Chart from 'react-apexcharts'

import { VectorMap } from "react-jvectormap";
import '../../node_modules/jvectormap-next/jquery-jvectormap.css'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { counterData, recentTransection, salesData, topProperties } from "../data/data";

export default function Index(){
    let options = {
        chart: {
            height: 360,
            type: 'area',
            width: '100%',
            stacked: true,
            toolbar: {
                show: false,
                autoSelected: 'zoom'
            },
        },
        colors: ['#b9b98b', '#16a34a'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [1.5, 1.5],
            dashArray: [0, 4],
            lineCap: 'round',
        },
        grid: {
            padding: {
            left: 0,
            right: 0
            },
            strokeDashArray: 3,
        },
        markers: {
            size: 0,
            hover: {
            size: 0
            }
        },
        series: [{
            name: 'No. of Sales',
            data: [0, 100, 40, 110, 60, 140, 55, 130, 65, 180, 75, 115],
        }, {
            name: 'Revenue',
            data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
        }],
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
            },  
            axisTicks: {
                show: true,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
            shadeIntensity: .8,
            opacityFrom: 0.3,
            opacityTo: 0.2,
            stops: [0, 80, 100]
            }
        },
        
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        legend: {
            position: 'bottom',
            offsetY: 0,
        },
    }
    const mapRef = useRef();
   
    return(
        <>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="text-xl font-semibold">Hello, Calvin</h5>
                        <h6 className="text-slate-400">Welcome back!</h6>
                    </div>
                </div>

                <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                    {counterData.map((item,index) =>{
                        return(
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900" key={index}>
                                <div className="p-5 flex items-center justify-between">
                                    <span className="me-3">
                                        <span className="text-slate-400 block">{item.title}</span>
                                        <span className="flex items-center justify-between mt-1">
                                            <span className="text-2xl font-medium">{item.symbol} <CountUp start={0} end={item.target}/></span>
                                        </span>
                                    </span>
                                    
                                    <span className="flex justify-center items-center rounded-md size-12 min-w-[48px] bg-slate-50 dark:bg-slate-800 shadow shadow-gray-100 dark:shadow-gray-700 text-green-600">
                                        <i className={`${item.icon} text-[28px]`}></i>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-8">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <h6 className="text-lg font-semibold">Revenue Analytics</h6>
                                
                                <div className="position-relative">                                            
                                    <select className="form-select form-input w-full py-2 h-10 bg-white dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                        <option defaultValue="Y">Yearly</option>
                                        <option defaultValue="M">Monthly</option>
                                        <option defaultValue="W">Weekly</option>
                                        <option defaultValue="T">Today</option>
                                    </select>
                                </div>
                            </div>
                            <Chart options={options} series={options.series} type="area" width="100%" height={360} className="apex-chart px-4 pb-6"/>
                        </div>
                    </div>
                
                    <div className="lg:col-span-4">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <h6 className="text-lg font-semibold">Sales Data</h6>

                                <div className="position-relative">                                            
                                    <select className="form-select form-input w-full py-2 h-10 bg-white dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                        <option defaultValue="Y">Yearly</option>
                                        <option defaultValue="M">Monthly</option>
                                        <option defaultValue="W">Weekly</option>
                                        <option defaultValue="T">Today</option>
                                    </select>
                                </div>
                            </div>

                            <div className="p-6">
                                {salesData.map((item,index) =>{
                                    return (
                                        <div className="mt-5 first:mt-0" key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-slate-400">{item.title}</span>
                                                <span className="text-slate-400">{item.sale}</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                                <div className="bg-green-600 h-[6px] rounded-full" style={{width: item.sale}}></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="xl:col-span-3 lg:col-span-6 order-1">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <h6 className="text-lg font-semibold">Area Map</h6>

                                <span className="text-slate-400">Last update 5 days ago</span>
                            </div>

                            <div className="p-6">
                                <div id="map" className="w-full h-[236px]">
                                <VectorMap
                                    ref={mapRef}
                                    map={"world_mill"}
                                    backgroundColor="white"
                                    containerStyle={{
                                        width: "100%",
                                        height: "80%"
                                    }}
                                    markerStyle={{
                                        initial: {fill: "4f46e5"},
                                        selected:{ fill: "#059669" }
                                    }}
                                    markersSelectable ={true}
                                    selectedMarkers=  {[0, 1]}
                                    selectedMar
                                    markers={[
                                        {latLng: [31.9474,35.2272], name: "Palestine"},
                                        {latLng: [61.524,105.3188], name: "Russia"},
                                        {latLng: [56.1304,-106.3468], name: "Canada"},
                                        {latLng: [71.7069,-42.6043], name: "Greenland"},
                                    ]}
                                    
                                    labels = {{
                                        markers: {
                                        render: marker => marker.name
                                        }
                                    }}
                                    regionStyle={{
                                        initial: {
                                        fill: "#D1D5DB",
                                        "fill-opacity": 1,
                                        stroke: "#ff0000"
                                        },
                                        hover: {
                                        "fill-opacity": 0.8,
                                        fill: "#ffff00",
                                        stroke: "#ff0000"
                                        },
                                        selected: {
                                        fill: "#FFFB00"
                                        }
                                    }}
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-6 lg:col-span-12 xl:order-2 order-3">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <h6 className="text-lg font-semibold">Recent Transections</h6>
                                
                                <Link to="" className="btn btn-link font-normal text-slate-400 hover:text-green-600 after:bg-green-600 transition duration-500">View orders <i className="mdi mdi-arrow-right ms-1"></i></Link>
                            </div>

                            <SimpleBar className="relative overflow-x-auto block w-full xl:max-h-[284px] max-h-[350px]">
                                <table className="w-full text-start">
                                    <thead className="text-base">
                                        <tr>
                                            <th className="text-start font-semibold text-[15px] px-4 py-3"></th>
                                            <th className="text-start font-semibold text-[15px] px-4 py-3 min-w-[140px]">Date</th>
                                            <th className="text-start font-semibold text-[15px] px-4 py-3 min-w-[120px]">Name</th>
                                            <th className="text-start font-semibold text-[15px] px-4 py-3">Price</th>
                                            <th className="text-start font-semibold text-[15px] px-4 py-3 min-w-[40px]">Type</th>
                                            <th className="text-end font-semibold text-[15px] px-4 py-3 min-w-[70px]">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentTransection.map((item,index) =>{
                                            return(
                                                <tr key={index}>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">
                                                        <div className="relative md:shrink-0">
                                                            <img src={item.image} className="object-cover size-12 min-w-[48px] rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                        </div>
                                                    </th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                        <span className="text-slate-400">{item.date}</span>
                                                    </td>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">{item.name}</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                        <span className="text-slate-400">{item.price}</span>
                                                    </td>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold">{item.type}</th>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 px-4 py-3">
                                                        <span className={`${item.status === 'Paid' ? 'bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 ' : 'bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600'} text-[15px] font-medium px-2.5 py-0.5 rounded h-5 ms-1`}>{item.status}</span>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </SimpleBar>
                        </div>
                    </div>

                    <div className="xl:col-span-3 lg:col-span-6 xl:order-3 order-2">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <h6 className="text-lg font-semibold">Top Properties</h6>

                                <Link to="" className="btn btn-link font-normal text-slate-400 hover:text-green-600 after:bg-green-600 transition duration-500">See More <i className="mdi mdi-arrow-right ms-1"></i></Link>
                            </div>

                            <SimpleBar className="relative overflow-x-auto block w-full max-h-[284px] p-6">
                                {topProperties.map((item,index) =>{
                                    return(
                                        <div className="flex justify-between items-center mt-4 first:mt-0" key={index}>
                                            <div className="flex items-center">
                                                <div className="relative md:shrink-0">
                                                    <img src={item.image} className="object-cover size-14 min-w-[56px] rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                </div>

                                                <div className="ms-2">
                                                    <Link to="" className="font-medium hover:text-green-600 block text-lg">{item.name}</Link>
                                                    <span className="text-slate-400">{item.loction}</span>
                                                </div>
                                            </div>
                                            {item.status === 'up' ? 
                                                <span className="w-20 text-emerald-600 text-end"><i className="mdi mdi-arrow-top-right"></i> {item.rate}</span> :
                                                <span className="w-20 text-red-600 text-end"><i className="mdi mdi-arrow-bottom-right"></i> {item.rate}</span>
                                            }
                                        </div>
                                    )
                                })}
                            </SimpleBar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
 
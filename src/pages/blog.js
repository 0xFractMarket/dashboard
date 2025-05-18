import React,{useState} from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/data";
import { FiPlus } from "react-icons/fi";

export default function Blog(){
    let [ show, setShow ] = useState(false);
    let [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <div>
                        <h5 className="text-lg font-semibold">Blogs</h5>

                        <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                            <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link to="/">Hously</Link></li>
                            <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                            <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Blogs</li>
                        </ul>
                    </div>

                    <div>
                        <Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-slate-800/5 hover:bg-slate-800/10 dark:bg-slate-700 border border-slate-100/5 dark:border-gray-700 text-slate-900 dark:text-white rounded-full" onClick={() =>setShow(true)}><FiPlus className="size-4"/></Link>
                    </div>
                    <div className={`${show ? '' : 'hidden'} fixed z-50  flex items-center justify-center overflow-hidden m-auto bg-gray-900 bg-opacity-50 dark:bg-opacity-80 inset-0`}>
                        <div className="relative w-full h-auto max-w-lg p-4">
                            <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
                                <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
                                    <h5 className="text-xl font-semibold">Add blog or news</h5>
                                    <button type="button" onClick={() =>setShow(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                        <svg className="size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                    </button>
                                </div>
                                <div className="p-4">
                                    <div>
                                        <p className="font-semibold mb-4">Upload your blog image here, Please click "Upload Image" Button.</p>
                                        
                                        {file ? 
                                            <img src={file} alt="" /> :
                                            <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                        }

                                        <input type="file" id="input-file" name="input-file" accept="image/*" onChange={handleChange}  hidden/>
                                        <label className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mt-6 cursor-pointer" htmlFor="input-file">Upload Image</label>
                                    </div>
                                    
                                    <form className="mt-4">
                                        <div className="grid grid-cols-12 gap-3">
                                            <div className="col-span-12">
                                                <label className="font-semibold">Blog Title <span className="text-red-600">*</span></label>
                                                <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0 mt-2" placeholder="Title :"/>
                                            </div>

                                            <div className="col-span-12">
                                                <label className="font-semibold"> Description : </label>
                                                <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0 mt-2" placeholder="Description :"></textarea>
                                            </div>

                                            <div className="col-span-12">
                                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">Create Blog</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    {blogData.map((item,index) =>{
                        return(
                            <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition-all duration-500" key={index}>
                                <div className="relative overflow-hidden">
                                    <img src={item.image} className="" alt=""/>
                                    <div className="absolute end-4 top-4">
                                        <span className="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">{item.tag}</span>
                                    </div>
                                </div>
        
                                <div className="relative p-6">
                                    <div className="">
                                        <div className="flex justify-between mb-4">
                                            <span className="text-slate-400 text-sm"><i className="mdi mdi-calendar-month align-middle text-base text-slate-900 dark:text-white me-2"></i>{item.date}</span>
                                            <span className="text-slate-400 text-sm ms-3"><i className="mdi mdi-clock-outline align-middle text-base text-slate-900 dark:text-white me-2"></i>{item.time}</span>
                                        </div>
        
                                        <Link to={`/blog-detail/${item.id}`} className="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out">{item.title}</Link>
                                        
                                        <div className="mt-3">
                                            <Link to={`/blog-detail/${item.id}`} className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                        </div>
                                    </div>
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
    )
}
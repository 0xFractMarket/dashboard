import React, { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Switcher(){
    useEffect(() => {
        // Asegurar que el modo oscuro esté activo al montar el componente
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    }, []);

    const changeMode = (mode, event) => {
        switch (mode) {
            case 'mode':
                if (document.documentElement.className.includes("dark")) {
                    document.documentElement.className = 'light'
                } else {
                    document.documentElement.className = 'dark'
                }
                break;
            case 'layout':
                if (event.target?.innerText === "LTR") {
                    document.documentElement.dir = "ltr"
                }
                else {
                    document.documentElement.dir = "rtl"
                }
                break;

            default:
                break;
        }
    }
    return(
        <>
         <div className="fixed top-[30%] -end-2 z-50">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onClick={(event) => changeMode('mode', event)} defaultChecked={true}/>
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                    <FiMoon className=" size-[18px] text-yellow-500"/>
                    <FiSun className=" size-[18px] text-yellow-500"/>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>
        <div className="fixed top-[40%] -end-3 z-50">
            <Link to="#" id="switchRtl">
                <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" onClick={(event) => changeMode('layout', event)}>LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden" onClick={(event) => changeMode('layout', event)}>RTL</span>
            </Link>
        </div>
        </>
    )
}
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BackToHome(){
    return(
        <div className="fixed bottom-3 end-3 z-50">
            <Link to="/" className="back-button btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md"><FiArrowLeft className="size-4"/></Link>
        </div>
    )
}
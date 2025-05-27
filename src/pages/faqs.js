import React, { useState } from "react";
import { accordianData } from "../data/data";
import { FiChevronDown } from "react-icons/fi";

export default function Faqs(){
    const [activeAccordions, setActiveAccordions] = useState({
        businessModel: null,
        fees: null,
        properties: null,
        regulations: null,
        technology: null,
        market: null
    });

    const handleAccordionClick = (category, index) => {
        setActiveAccordions(prev => ({
            ...prev,
            [category]: prev[category] === index ? null : index
        }));
    };

    const categoryTitles = {
        businessModel: "Business Model & Legal Structure",
        fees: "Fees & Commissions",
        properties: "Property Information",
        regulations: "Regulations & Compliance",
        technology: "Technology & Platform",
        market: "Market & Competition"
    };

    return(
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Frequently Asked Questions</h5>
                </div>

                <div className="faq grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {Object.entries(accordianData).map(([category, questions]) => (
                        <div key={category} className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <h5 className="font-semibold">{categoryTitles[category]}</h5>

                            <div className="mt-6">
                                {questions.map((item, index) => (
                                    <div className="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold">
                                            <button 
                                                type="button" 
                                                className={`${activeAccordions[category] === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : 'text-dark dark:text-white'} flex justify-between items-center p-5 w-full font-medium text-start`} 
                                                onClick={() => handleAccordionClick(category, index)}
                                            >
                                                <span>{item.title}</span>
                                                <FiChevronDown className={`${activeAccordions[category] === index ? 'rotate-180' : ''} size-4 shrink-0`}/>
                                            </button>
                                        </h2>
                                        <div className={activeAccordions[category] === index ? '' : 'hidden'}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
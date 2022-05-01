import React, { useState } from "react";
import Link from 'next/link';
const Index = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="w-full">
            <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family"/>
                
                <div className="pt-4 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:mr-10 xl:pr-0 rounded-lg border-dotted border-4 border-indigo-700  shadow-2xl shadow-indigo-500/50">
                    <video width="100%" height="100%" controls>
                        <source src="21.mp4" type="video/mp4" />

                    </video>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                        <p tabIndex="0" className="text-indigo-700 uppercase text-2xl mb-4">Free Cookbook</p>
                        <h1 tabIndex="0" className="text-indigo-700 text-4xl lg:text-5xl font-black mb-8">21 Easy And Healthy 
                        Keto Recipes You Need To Try!</h1>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8"><strong>Losing weight may not seem easy right away—but it can be. </strong></p>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8">With the perfect balance of ingredients, instruction, and examples, this brand-new cookbook features three chapters, over 10,000 words, and a mixture of breakfast, dinner and lunch recipes. </p>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8">And all of it is designed to deliver you an unparalleled new way of losing weight.— <strong>completely free.</strong></p>
                        <div className="flex justify-center items-center">
                            <Link href="/subscribe">
                                <a className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4">FREE DOWNDOLAD</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
            
        </div>
    );
};
export default Index;


import React, { useState } from "react";
function Index() {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-white pb-12 overflow-y-hidden" style={{ minHeight: 700 }}>
            {/* Code block starts */}
            <dh-component>
                
                <div className="bg-white">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                21 Easy And Healthy 
                                <span className="text-indigo-700"> Keto Recipes </span>
                                You Need To Try!
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg"><strong>Losing weight may not seem easy right away—but it can be.</strong></p>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">With the perfect balance of ingredients, instruction, and examples, this brand-new cookbook features three chapters, over 10,000 words, and a mixture of breakfast, dinner and lunch recipes.</p>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">And all of it is designed to deliver you an unparalleled new way of losing weight.—<strong>completely free.</strong></p>
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="/subscribe" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">FREE DOWNDOLAD</a>
                            
                        </div>
                    </div>
                </div>
            </dh-component>
            {/* Code block ends */}
        </div>

    );
}

export default Index;

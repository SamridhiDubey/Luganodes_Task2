import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import logo from './Blockchain-Color.gif';

function Home() {
    return(
        <>
            <Navbar/>
            <div className="py-12 md:py-24 h-screen w-auto">
            <div className="grid mt-40 max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
            <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
                <h1 className="mb-2 text-3xl font-bold text-gray-600 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">StakeTrackr : The numbers speak</h1>
                    <p className="mb-6 text-lg text-gray-500 xl:text-xl lg:mb-8 xl:mb-10">Track Lugandose validated Stake amount across PolkaDot, Cardano and Kusama</p>
                    <div className="flex mb-6 space-x-4">
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                    className="w-4 h-4 fill-current text-gray-400"
                    viewBox="0 0 20 20"
                    >
                    <path
                    fillRule="evenodd"
                    d="M6.293 6.707a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                    </svg>
                </div>
                    </div>
                </div>
                <div className="order-1 col-span-2 hidden lg:block">
                    <img src={logo} className="ml-40 h-80 w-80" alt="" />
                </div>
                
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;
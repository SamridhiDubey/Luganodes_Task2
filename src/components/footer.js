import React from "react";
import logo from "./logo.svg"
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <>
        <footer className="bg-gray-600">
        <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
                <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <img src={logo} className="h-8 mx-2 fill-current inline">
                </img>
                StakeTrackr
                </a>
            </div>
            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link to="/faq"><a href="#" className="no-underline hover:underline text-gray-400 hover:text-pink-500">FAQ</a></Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link to="/"><a href="#" className="no-underline hover:underline text-gray-400 hover:text-pink-500">Home</a></Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link to="/myform"> <a href="#" className="no-underline hover:underline text-gray-400 hover:text-pink-500">Sign In</a></Link>
                </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-400 hover:text-pink-500">Facebook</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-400 hover:text-pink-500">Linkedin</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-400 hover:text-pink-500">Twitter</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
        </>
    );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import { useUser, SignInButton, SignOutButton } from "@clerk/clerk-react";

export default function Navbar() {
    const user = useUser();

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };
    return(
        <>
        <nav id="header" className="fixed w-full z-30 top-0 text-white bg-blue-500 backdrop-blur-md">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                <img src={logo} className="h-12 mx-2 fill-current inline">
                </img>
                <div className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                    StakeTrackr
                </div>
                </div>
                <div className="block lg:hidden pr-4">
                <button 
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    onClick={handleMenuToggle}
                >
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
                </div>
                
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                    id="navbar-default">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                    <Link to={"/"}><div className="inline-block py-2 px-4 text-white font-bold no-underline" href="#">Home</div></Link>
                    </li>
                    <li className="mr-3">
                    <Link to={"/faq"}><div className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">FAQ</div></Link>
                    </li>
                    <li className="mr-3">
                        {!!user?.isSignedIn && (
                            <Link to={"/stake"}><div className="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4">View Stakes</div></Link>
                        )}
                    </li>
                    <li>
                        {!user.isSignedIn && (
                        <div className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <SignInButton />
                        </div>
                        )}
                        {!!user.isSignedIn && (
                        <div className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <SignOutButton />
                        </div>
                        )}
                    </li>
                </ul>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        </>
    );
}
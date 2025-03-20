import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navPaths = ["/signup", "/about", "/pricing", "/products", "/support"];

    return (
        <nav className="bg-white shadow-md w-full flex h-[70px] p-4 fixed  top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={"/"} className="flex items-center space-x-2 ml-[7rem]">
                    <img src="/assets/logo.svg" alt="Logo" className="h-[16px] w-auto" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 text-gray-700 font-medium gap-4 mr-[7rem]">
                    {["signup", "About", "Pricing", "Product", "Support"].map((item, index) => {
                        return (
                            <Link key={index} to={navPaths[index]} className="hover:text-blue-600 text-[#666666]">{item}</Link>
                        )
                    })}

                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700"
                >
                    {isOpen ? (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 text-gray-700 font-medium text-center">
                    <Link href="#" className="block p-2 hover:text-blue-600">Signup</Link>
                    <Link href="#" className="block p-2 hover:text-blue-600">About</Link>
                    <Link href="#" className="block p-2 hover:text-blue-600">Pricing</Link>
                    <Link href="#" className="block p-2 hover:text-blue-600">Product</Link>
                    <Link href="#" className="block p-2 hover:text-blue-600">Support</Link>
                </div>
            )}
        </nav>
    );
}
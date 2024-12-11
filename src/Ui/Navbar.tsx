"use client";

import React, { useState } from 'react';
import Image from 'next/image';

/**
 * Navbar component that provides navigation functionality for both desktop and mobile views.
 * Features a responsive design with a hamburger menu for mobile that opens a full sidebar.
 * Includes logo, navigation links, and call-to-action buttons.
 */
const Navbar = () => {
    // State to control mobile sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Main navigation bar with glass effect background */}
            <nav className="fixed w-full backdrop-blur-sm bg-black/10 px-4 sm:px-6 py-3 sm:py-4 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo and brand name container */}
                    <div className="flex items-center">
                        <Image 
                            src="/logo.png" 
                            alt="Logo"
                            width={40}
                            height={40}
                            className="w-auto h-8 sm:h-10"
                        />
                        <span className="ml-2 text-white text-xl font-bold hidden sm:block">RR</span>
                    </div>

                    {/* Mobile menu button - only visible on small screens */}
                    <button 
                        className="sm:hidden text-white hover:text-blue-400 transition-colors duration-300"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Desktop Navigation links - hidden on mobile */}
                    <ul className="hidden sm:flex space-x-4 md:space-x-8">
                        {["Home", "About", "Services", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Sidebar with overlay - only visible when isSidebarOpen is true */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50">
                    <div className="fixed left-0 top-0 h-full w-full bg-gradient-to-b from-[#041d2d]/95 to-[#007056]/95 transform transition-all duration-500 flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/20">
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/logo.png" 
                                    alt="Logo"
                                    width={36}
                                    height={36}
                                    className="w-9 h-9"
                                />
                                <span className="text-white text-2xl font-bold">RR</span>
                            </div>
                            <button 
                                onClick={() => setIsSidebarOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-2"
                                aria-label="Close menu"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 flex flex-col justify-center px-6 py-8">
                            {["Home", "About", "Services", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="group relative py-4 text-white/80 text-3xl font-medium transition-all hover:text-white"
                                >
                                    <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                                        {item}
                                    </span>
                                    <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-1/2 transition-all duration-300"/>
                                </a>
                            ))}
                        </nav>

                        {/* Action Buttons */}
                        <div className="p-6 space-y-4">
                            <button className="w-full py-4 text-white text-xl font-medium border-2 border-blue-400/30 rounded-xl hover:border-blue-400 backdrop-blur-sm transition-all duration-300">
                                Get in Touch
                            </button>
                            <button className="w-full py-4 text-white text-xl font-medium bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-xl hover:opacity-90 transition-all duration-300">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
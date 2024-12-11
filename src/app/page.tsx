import React from "react";
import Image from "next/image";
import TypeWriterEffect from "@/Ui/TypeWriterEffect";
import Navbar from "@/Ui/Navbar";

// Main page component that renders the landing page
const page = () => {
  return (
    // Main container with full height and modern gradient background
    <div className="min-h-screen bg-gradient-to-br from-[#041d2d] to-[#007056]">
      {/* Navigation bar with glass effect */}
      <Navbar/>

      {/* Hero section with improved layout */}
      <div className="container px-4 mx-auto min-h-screen flex items-center justify-center pt-16 md:pt-20">
        <div className="w-full grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6 text-white text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span>Hi! I&apos;m{" "}</span>
              <span className="block lg:inline mt-2 lg:mt-0 lg:ml-2 text-blue-400">
                <TypeWriterEffect props="Rashed Rabby"/>
              </span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-200">
              <div>
                <TypeWriterEffect props={["Problem Solver", "Innovator", "Creator"]}/>{" "}
              </div>
              <div className="mt-2">
                <span className="text-green-400">from Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-transparent backdrop-blur-sm border-2 border-blue-400/30 hover:border-blue-400 rounded-lg px-6 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 w-full sm:w-auto">
                <span className="text-blue-400 font-medium group-hover:text-blue-300 flex items-center justify-center gap-2">
                  Get in Touch
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <button className="group relative bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-lg px-6 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-full sm:w-auto">
                <span className="relative z-10 text-white font-medium flex items-center justify-center gap-2">
                  View Portfolio
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Profile Image with animation */}
          <div className="relative order-1 lg:order-2  ">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-75 blur-3xl animate-pulse"/>
            <div className="relative">
              <Image
                src="https://i.imgur.com/WFRLTZl.png"
                alt="Profile Image"
                width={500}
                height={500}
                priority
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] mx-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

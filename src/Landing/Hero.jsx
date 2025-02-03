import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-scroll"; // Import the Link component from react-scroll

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Minds, Envisioning Futures with{' '}
              <span className="text-[#29AEFC]">Cutting-Edge</span> <br />
              <span className="text-[#F36C50] mr-1">Technology Education</span>
            </h1>
            <p className="text-lg text-[gray-600 max-w-lg]">
              Transform your career with industry-leading courses in AI, AR/VR, Cybersecurity, and more. Learn from experts and join a community of innovators.
            </p>
            <div className="flex">
              <Link
                to="courses"  // This is the ID of the section you want to scroll to
                smooth={true}  // Smooth scrolling
                duration={500}  // Duration for the scroll animation
                className="group inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
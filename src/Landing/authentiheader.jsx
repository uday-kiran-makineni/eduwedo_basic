import React from "react";
import { BookOpen, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dzymyjltu/image/upload/v1738600322/WhatsApp_Image_2025-02-03_at_22.01.57_0d667605_fw46d6.jpg"
            alt="EduWedo Logo"
            className="h-10 w-13 object-cover"
          />
          <div className="flex">
            <span className="text-xl font-bold text-[#000000]">edu</span>
            <span className="text-xl font-bold text-[#29AEFC]">we</span>
            <span className="text-xl font-bold text-[#F36C50]">do</span>
          </div>
        </div>

        

        {/* <div className="hidden md:flex items-center space-x-4">
          <button
            className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
            onClick={() => navigate("/login")} // Navigate to login page
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => navigate("/signup")} // Navigate to signup page
          >
            Sign Up
          </button>
        </div> */}

        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </nav>
    </header>
  );
}

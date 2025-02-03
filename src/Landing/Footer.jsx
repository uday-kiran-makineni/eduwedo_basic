import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dzymyjltu/image/upload/v1738600322/WhatsApp_Image_2025-02-03_at_22.01.57_0d667605_fw46d6.jpg"
                alt="EduWedo Logo"
                className="h-10 w-13 object-cover"
              />
              <div className="flex">
                <span className="text-xl font-bold text-white">edu</span>
                <span className="text-xl font-bold text-[#29AEFC]">we</span>
                <span className="text-xl font-bold text-[#F36C50]">do</span>
              </div>
            </div>
            <p className="text-sm mt-2">
              Empowering the future through innovative technology education.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email1: director@eduwedo.in</li>
              <li>Email2: info@eduwedo.in</li>
              <li>Phone: +91 8639901710</li>
              <li>Address: Malkapur, Medak, Telangana-502295</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/eduwedo/" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/eduwedo.in/" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} EduWedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { GraduationCap, Building2, ChevronRight, BookOpen } from 'lucide-react';

const RoleSelection = ({ onRoleSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Student Column */}
          <div className="w-full md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="flex items-center space-x-2 mb-8">
              <GraduationCap className="h-8 w-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">For Students</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Discover resources to enhance your skills, connect with employers, and launch your career.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <ChevronRight className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Access to comprehensive practice problems and learning materials</span>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Personalized career guidance and mentorship opportunities</span>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Connect with top employers for internships and job opportunities</span>
              </li>
            </ul>
            
            <button
              onClick={() => onRoleSelect('student')}
              className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          {/* College Column */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="flex items-center space-x-2 mb-8">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">For Colleges/Universities</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Partner with us to empower your students, streamline your recruitment process, and prepare them for success.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Track and improve student outcomes with detailed analytics</span>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Build direct connections with industry-leading employers</span>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Access comprehensive career services and placement tools</span>
              </li>
            </ul>
            
            <button
              onClick={() => onRoleSelect('college')}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
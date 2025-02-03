import React from 'react';
import { Brain, Glasses, Shield, Cloud, Code } from 'lucide-react';

const courses = [
  { name: 'Artificial Intelligence', icon: Brain },
  { name: 'AR/VR Development', icon: Glasses },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Cloud Computing', icon: Cloud },
  { name: 'Full-Stack Development', icon: Code },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600">
            We're on a mission to democratize technology education and empower the next generation of innovators. Our cutting-edge curriculum is designed by industry experts to provide practical, hands-on learning experiences.
          </p>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4" id="courses">Our Course Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {courses.map((course) => (
            <div key={course.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <course.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
              <p className="text-gray-600">
                Master the latest technologies and tools in {course.name.toLowerCase()} through hands-on projects and expert mentorship.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
}
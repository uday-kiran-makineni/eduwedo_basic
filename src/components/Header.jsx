import React from 'react';
import { BookOpen, Bell, Settings, User } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-slate-800 border-b border-gray-700">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">EduWedo</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-white">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

export default function DashboardFooter() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 border-t border-gray-700">
      <div className="flex items-center justify-between h-12 px-4">
        <div className="text-sm text-white">
          © {new Date().getFullYear()} EduWedo. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-white hover:text-blue-400">Help</a>
          <a href="#" className="text-sm text-white hover:text-blue-400">Terms</a>
          <a href="#" className="text-sm text-white hover:text-blue-400">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/AGR-Assignment" className="text-blue-500 text-lg font-bold">Home</Link>
              <span className="text-gray-500 mx-2">/</span>
              <span className="text-blue-500 text-lg font-bold">Dashboard</span>
              <span className="text-gray-500 mx-2">/</span>
              <span className="text-black-500 text-lg">Service</span>
            </div>
          </div>
          <div className="flex items-center">
            {/* Add your other navbar elements here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

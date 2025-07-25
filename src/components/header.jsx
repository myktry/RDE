import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Left: University info */}
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
          University of Southeastern Philippines
        </h1>
        <p className="text-sm text-gray-600">Office of the President</p>
      </div>

      {/* Right: Profile */}
      <div className="flex items-center space-x-2">
        <FaUserCircle className="text-2xl text-gray-700" />
        <span className="text-sm font-medium text-gray-800">President</span>
      </div>
    </header>
  );
}

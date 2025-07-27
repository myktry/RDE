import React from "react";
import { FaUserCircle, FaBell, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/useraccount");
  };

  return (
    <header className="w-full bg-gradient-to-r from-red-900 to-orange-600 text-white px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Left: University info with logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">U</span>
        </div>
        <div>
          <h1 className="text-base sm:text-lg font-bold leading-tight">
            UNIVERSITY OF SOUTHEASTERN PHILIPPINES
          </h1>
          <p className="text-xs text-gray-200">Office of the President</p>
        </div>
      </div>

      {/* Right: User info and icons */}
      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium hidden sm:block">
          John Henry Talite
        </span>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <FaBell className="text-lg" />
          </button>
          <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <FaMoon className="text-lg" />
          </button>
          <button
            className="flex items-center space-x-2 hover:bg-white/10 rounded-full p-1.5 transition-colors"
            onClick={handleProfileClick}
          >
            <FaUserCircle className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
}

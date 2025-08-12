import { MessageCircle, Bell } from 'lucide-react';
import usepLogo from '../assets/usep-logo.png';

const Header = () => {
  return (
    <header className="bg-red-800 text-white px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50 h-20 flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <img 
            src={usepLogo} 
            alt="USeP Logo" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white leading-tight">
              UNIVERSITY OF SOUTHEASTERN PHILIPPINES
            </h1>
            <p className="text-xs text-gray-200 leading-tight">
              Research and Development Division
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
            <MessageCircle size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

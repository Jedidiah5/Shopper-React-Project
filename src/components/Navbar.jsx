import { useState } from 'react';
import logo from './logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for logo + nav + mobile button */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo (Left) - Optional: Hide on small screens if needed */}
          <div className="flex items-center md:absolute md:left-8">
          <img src={logo} alt="logo" className='w-16 h-16' />
          <span className="text-lg font-bold text-gray-800">SHOPPER</span>
          </div>

          {/* Centered Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-8">
              <a href="#" className="relative group text-gray-800 hover:text-orange-500">
                SHOP
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group text-gray-800 hover:text-orange-500">
                MEN
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group text-gray-800 hover:text-orange-500">
                WOMEN
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group text-gray-800 hover:text-orange-500">
                KIDS
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button (Right) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 px-2 pt-2">
              <a href="#" className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded">Home</a>
              <a href="#" className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded">Shop</a>
              <a href="#" className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded">About</a>
              <a href="#" className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
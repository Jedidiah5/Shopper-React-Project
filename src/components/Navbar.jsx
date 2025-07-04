import { useState } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();

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
              <Link to="/" className="relative group text-gray-800 hover:text-orange-500">
                SHOP
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/men" className="relative group text-gray-800 hover:text-orange-500">
                MEN
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/women" className="relative group text-gray-800 hover:text-orange-500">
                WOMEN
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#" className="relative group text-gray-800 hover:text-orange-500">
                KIDS
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Cart Icon and Mobile Menu Button (Right) */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-800 hover:text-orange-500 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px]">
                  {getCartCount() > 99 ? '99+' : getCartCount()}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 hover:text-orange-500 focus:outline-none p-2"
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
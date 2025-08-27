import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 p-4 flex justify-between items-center shadow-xl rounded-b-2xl relative z-10">
      <div className="flex items-center space-x-3">
        {/* Logo/Icon */}
        <span className="bg-white rounded-full p-2 shadow-md">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M2 12h20M12 2v20" />
          </svg>
        </span>
        <h1 className="text-white text-2xl font-extrabold tracking-wide drop-shadow-lg">
          Zebra Crossing Monitor
        </h1>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link
          to="/"
          className="text-white font-medium px-3 py-2 rounded-lg transition duration-200 hover:bg-blue-800 hover:scale-105 active:bg-blue-900"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="text-white font-medium px-3 py-2 rounded-lg transition duration-200 hover:bg-blue-800 hover:scale-105 active:bg-blue-900"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 hover:scale-105 transition duration-200 active:bg-blue-200"
        >
          Sign Up
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-1 w-6 bg-white rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-1 w-6 bg-white rounded transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block h-1 w-6 bg-white rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white rounded-xl shadow-lg flex flex-col items-end w-48 py-4 px-6 space-y-3 md:hidden animate-fade-in z-20">
          <Link
            to="/"
            className="text-blue-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-100 w-full text-right"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-blue-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-100 w-full text-right"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-800 w-full text-right"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
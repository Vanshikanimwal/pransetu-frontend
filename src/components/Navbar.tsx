
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Wallet } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Register", path: "/donor-registration" },
    { name: "Dashboard", path: "/match-results" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <Logo />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-300 ${
                      isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <Button className="bg-teal-500 hover:bg-teal-600">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-teal-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-slide-in">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive ? "bg-teal-50 text-teal-700" : "text-teal-600 hover:bg-teal-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="px-4 py-3">
              <Button className="w-full bg-teal-500 hover:bg-teal-600">
                <Wallet className="mr-2 h-5 w-5" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

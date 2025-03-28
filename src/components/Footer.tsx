
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-teal-700 mb-4">Pransetu</h3>
            <p className="text-teal-600 text-sm">
              Transforming organ donation with blockchain technology for a more transparent, 
              secure, and fair system.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-teal-700 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-teal-600 hover:text-teal-800 transition-colors">Home</Link></li>
              <li><Link to="/donor-registration" className="text-teal-600 hover:text-teal-800 transition-colors">Register as Donor</Link></li>
              <li><Link to="/recipient-registration" className="text-teal-600 hover:text-teal-800 transition-colors">Register as Recipient</Link></li>
              <li><Link to="/match-results" className="text-teal-600 hover:text-teal-800 transition-colors">Match Results</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-teal-700 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-teal-600">
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                contact@pransetu.io
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-200 mt-8 pt-8 text-center text-sm text-teal-600">
          <p>&copy; {new Date().getFullYear()} Pransetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

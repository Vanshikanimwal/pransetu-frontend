
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-teal-50 p-4">
      <div className="glass-card rounded-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
        <p className="text-xl text-teal-600 mb-8">The page you're looking for doesn't exist.</p>
        <div className="h-1 w-20 bg-teal-200 mx-auto mb-8"></div>
        <p className="text-teal-600 mb-8">
          The page you are trying to access may have been moved, deleted, or might never have existed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn-primary inline-flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

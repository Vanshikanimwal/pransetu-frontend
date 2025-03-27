
import React from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "@/components/RegistrationForm";

const RecipientRegistration = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    // Here you would normally send data to blockchain
    console.log("Recipient registration values:", values);
    
    // For demo purposes, just navigate to match results after a delay
    setTimeout(() => {
      navigate("/match-results");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-teal-700 mb-3">Register as an Organ Recipient</h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Register to join the waiting list for an organ transplant. Our AI-powered system will match you
            with compatible donors based on medical compatibility and urgency.
          </p>
        </div>

        <RegistrationForm formType="recipient" onSubmit={handleSubmit} />
        
        <div className="mt-12 glass-card p-6 rounded-xl">
          <h3 className="font-bold text-teal-700 mb-4">Recipient Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-teal-700 mb-3">What Happens After Registration?</h4>
              <ol className="space-y-3 text-teal-600 text-sm">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mr-3 font-medium">1</span>
                  <span>Your medical information is securely stored on the blockchain</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mr-3 font-medium">2</span>
                  <span>Our AI algorithm analyzes compatibility with registered donors</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mr-3 font-medium">3</span>
                  <span>When a match is found, both parties are notified</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mr-3 font-medium">4</span>
                  <span>Medical teams coordinate the transplant process</span>
                </li>
              </ol>
            </div>
            
            <div className="glass-card p-6 bg-teal-500/5 rounded-xl">
              <h4 className="font-medium text-teal-700 mb-3">Why Our System Is Different</h4>
              <ul className="space-y-3 text-teal-600 text-sm">
                <li className="flex items-start">
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
                    className="text-teal-500 mr-3 flex-shrink-0"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Fair and transparent matching based on medical need, not financial status</span>
                </li>
                <li className="flex items-start">
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
                    className="text-teal-500 mr-3 flex-shrink-0"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Blockchain ensures waiting list cannot be manipulated</span>
                </li>
                <li className="flex items-start">
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
                    className="text-teal-500 mr-3 flex-shrink-0"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>AI matching optimizes for best medical outcomes</span>
                </li>
                <li className="flex items-start">
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
                    className="text-teal-500 mr-3 flex-shrink-0"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Privacy-focused system protects your medical data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientRegistration;

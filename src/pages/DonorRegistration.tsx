
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import RegistrationForm from "@/components/RegistrationForm";

const DonorRegistration = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    // Here you would normally send data to blockchain
    console.log("Donor registration values:", values);
    
    // For demo purposes, just navigate to match results after a delay
    setTimeout(() => {
      navigate("/match-results");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-teal-700 mb-3">Become an Organ Donor</h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            By registering as an organ donor, you're giving hope to those in need of life-saving
            transplants. Your information is securely stored on the blockchain.
          </p>
        </div>

        <RegistrationForm formType="donor" onSubmit={handleSubmit} />
        
        <div className="mt-12 glass-card p-6 rounded-xl">
          <h3 className="font-bold text-teal-700 mb-4">Why Become a Donor?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-teal-600"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h4 className="font-medium text-teal-700 mb-2">Save Lives</h4>
              <p className="text-sm text-teal-600">
                One organ donor can save up to 8 lives and enhance many more.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-teal-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h4 className="font-medium text-teal-700 mb-2">Create Legacy</h4>
              <p className="text-sm text-teal-600">
                Leave a lasting impact by giving the gift of life to others.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-teal-600"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <h4 className="font-medium text-teal-700 mb-2">Support Families</h4>
              <p className="text-sm text-teal-600">
                Help families find hope during their most difficult times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistration;

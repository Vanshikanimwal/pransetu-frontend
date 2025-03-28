
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-600 text-sm font-medium mb-6">
              Blockchain-Powered Healthcare
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="block">Transforming</span>
              <span className="text-teal-500 block">Organ Donation</span>
              <span className="block">with Blockchain</span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-6 mb-8 max-w-lg">
              Pransetu connects donors with recipients through a transparent, secure blockchain platform, saving lives through technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/donor-registration")}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Register as Donor
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("/recipient-registration")}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Register as Recipient
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-teal-50 rounded-2xl p-6 relative">
              <div className="absolute -top-8 left-8 bg-white rounded-lg shadow-md p-4 z-10">
                <h3 className="font-semibold text-gray-800">Verified by Blockchain</h3>
                <p className="text-sm text-gray-600">Transparent & Secure</p>
              </div>
              
              <img 
                src="/lovable-uploads/3827a093-4a37-403c-89ee-0c68bfaf5909.png" 
                alt="Medical scan showing hand x-ray" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

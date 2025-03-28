
import React from "react";
import HeroSection from "@/components/HeroSection";
import DoctorContactSection from "@/components/DoctorContactSection";

const Index = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      
      <section className="page-container py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">How Pransetu Works</h2>
          <p className="text-teal-600 mb-12">
            Our platform combines blockchain technology with AI to create a transparent, 
            secure, and fair organ donation system.
          </p>
          
          <div className="relative">
            {/* Connection lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-teal-200 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 z-10">1</div>
                <div className="glass-card p-6 h-full">
                  <h3 className="font-bold text-teal-700 mb-2">Registration</h3>
                  <p className="text-teal-600 text-sm">
                    Donors and recipients register with their medical information, 
                    which is securely stored on the blockchain.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 z-10">2</div>
                <div className="glass-card p-6 h-full">
                  <h3 className="font-bold text-teal-700 mb-2">AI Matching</h3>
                  <p className="text-teal-600 text-sm">
                    Our AI algorithm analyzes the data to find the most compatible 
                    and urgent matches between donors and recipients.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 z-10">3</div>
                <div className="glass-card p-6 h-full">
                  <h3 className="font-bold text-teal-700 mb-2">Secure Matching</h3>
                  <p className="text-teal-600 text-sm">
                    Match results are stored on the blockchain, ensuring transparency 
                    and preventing any manipulation of the waiting list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="page-container bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Use Blockchain?</h2>
            <ul className="space-y-4 text-teal-700">
              <li className="flex items-start">
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
                  className="text-teal-500 mr-3 flex-shrink-0"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>
                  <strong className="font-medium">Immutable Records:</strong> Once data is recorded, it cannot be altered, ensuring the integrity of the waiting list.
                </span>
              </li>
              <li className="flex items-start">
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
                  className="text-teal-500 mr-3 flex-shrink-0"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>
                  <strong className="font-medium">Transparency:</strong> All stakeholders can verify matches, ensuring the system is fair and free from corruption.
                </span>
              </li>
              <li className="flex items-start">
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
                  className="text-teal-500 mr-3 flex-shrink-0"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>
                  <strong className="font-medium">Security:</strong> Advanced cryptography protects sensitive medical data while allowing necessary access.
                </span>
              </li>
              <li className="flex items-start">
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
                  className="text-teal-500 mr-3 flex-shrink-0"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>
                  <strong className="font-medium">Trust:</strong> No central authority can manipulate the system, creating trust among all participants.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl overflow-hidden">
            <div className="relative aspect-video w-full">
              <div className="absolute inset-0 bg-teal-500/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal-500/90 rounded-full flex items-center justify-center mx-auto">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="36" 
                      height="36" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-white"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="mt-3 text-teal-700 font-medium">Watch how it works</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <DoctorContactSection className="bg-gradient-to-b from-white to-teal-50" />
    </div>
  );
};

export default Index;

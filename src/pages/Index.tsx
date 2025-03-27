
import React from "react";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <section className="page-container py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">How LifeChain Works</h2>
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
      
      <footer className="bg-teal-50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-4">LifeChain</h3>
              <p className="text-teal-600 text-sm">
                Transforming organ donation with blockchain technology for a more transparent, 
                secure, and fair system.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-teal-600 hover:text-teal-800 transition-colors">Home</a></li>
                <li><a href="/donor-registration" className="text-teal-600 hover:text-teal-800 transition-colors">Register as Donor</a></li>
                <li><a href="/recipient-registration" className="text-teal-600 hover:text-teal-800 transition-colors">Register as Recipient</a></li>
                <li><a href="/match-results" className="text-teal-600 hover:text-teal-800 transition-colors">Match Results</a></li>
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
                  contact@lifechain.io
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-teal-200 mt-8 pt-8 text-center text-sm text-teal-600">
            <p>&copy; {new Date().getFullYear()} LifeChain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

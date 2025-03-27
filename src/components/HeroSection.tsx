
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-28 -right-28 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-60 -left-28 w-80 h-80 bg-teal-300 rounded-full opacity-15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
            Transforming Organ Donation with Blockchain
          </h1>
          <p className="text-lg md:text-xl text-teal-700 mb-10">
            A secure, transparent, and fair platform connecting organ donors with recipients using
            cutting-edge AI matching and blockchain technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard delay={100}>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600 w-8 h-8"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">Secure Registration</h3>
              <p className="text-teal-600">
                Register as a donor or recipient with your data securely stored on blockchain.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600 w-8 h-8"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">AI-Powered Matching</h3>
              <p className="text-teal-600">
                Advanced algorithms match donors and recipients based on medical compatibility and urgency.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={300}>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600 w-8 h-8"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-3">Blockchain Transparency</h3>
              <p className="text-teal-600">
                Match results stored on blockchain for maximum security and fairness.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

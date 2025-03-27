
import React, { useEffect, useState } from "react";
import AnimatedCard from "@/components/AnimatedCard";

// Demo data for match results
const demoMatches = [
  {
    id: "1",
    donor: {
      name: "John D.",
      age: 45,
      bloodType: "O+",
      organType: "Kidney",
      location: "Boston, MA",
    },
    recipient: {
      name: "Maria R.",
      age: 38,
      bloodType: "O+",
      urgencyLevel: "High",
      waitingTime: "8 months",
    },
    compatibilityScore: 94,
    matchDate: "2023-10-15",
    status: "Awaiting Confirmation",
  },
  {
    id: "2",
    donor: {
      name: "Sarah D.",
      age: 52,
      bloodType: "A-",
      organType: "Liver (Partial)",
      location: "San Francisco, CA",
    },
    recipient: {
      name: "Robert R.",
      age: 41,
      bloodType: "A+",
      urgencyLevel: "Critical",
      waitingTime: "3 months",
    },
    compatibilityScore: 87,
    matchDate: "2023-10-12",
    status: "Pre-Surgery Evaluation",
  },
  {
    id: "3",
    donor: {
      name: "Michael D.",
      age: 29,
      bloodType: "B+",
      organType: "Kidney",
      location: "Chicago, IL",
    },
    recipient: {
      name: "Jennifer R.",
      age: 33,
      bloodType: "B+",
      urgencyLevel: "Medium",
      waitingTime: "1 year",
    },
    compatibilityScore: 91,
    matchDate: "2023-10-10",
    status: "Surgery Scheduled",
  },
];

const MatchResults = () => {
  const [matches, setMatches] = useState<typeof demoMatches>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from blockchain
    const fetchMatches = async () => {
      try {
        // In a real application, you would fetch from blockchain here
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setMatches(demoMatches);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-teal-700 mb-3">Organ Match Results</h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Below are the latest AI-powered matches between donors and recipients.
            All matches are stored on the blockchain for full transparency.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin mb-4"></div>
            <p className="text-teal-600">Fetching match data from blockchain...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {matches.map((match, index) => (
              <AnimatedCard 
                key={match.id} 
                delay={index * 200}
                className="p-0 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <div className="text-xs font-medium text-teal-500 mb-1">Match ID: {match.id}</div>
                      <h3 className="text-xl font-bold text-teal-700">Donor-Recipient Match</h3>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4 flex items-center">
                      <div className="bg-teal-100 text-teal-800 rounded-full py-1 px-3 text-sm font-medium">
                        {match.status}
                      </div>
                      <div className="ml-4 flex items-center">
                        <div className="text-sm font-semibold text-teal-700">Compatibility:</div>
                        <div className="ml-2 w-10 h-10 rounded-full flex items-center justify-center bg-teal-500 text-white font-bold">
                          {match.compatibilityScore}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-teal-50 rounded-lg p-4">
                      <h4 className="font-medium text-teal-700 mb-3 flex items-center">
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
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        Donor Information
                      </h4>
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Name:</span>
                          <span className="font-medium text-teal-800">{match.donor.name}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Age:</span>
                          <span className="font-medium text-teal-800">{match.donor.age}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Blood Type:</span>
                          <span className="font-medium text-teal-800">{match.donor.bloodType}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Organ:</span>
                          <span className="font-medium text-teal-800">{match.donor.organType}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Location:</span>
                          <span className="font-medium text-teal-800">{match.donor.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-50 rounded-lg p-4">
                      <h4 className="font-medium text-teal-700 mb-3 flex items-center">
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
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        Recipient Information
                      </h4>
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Name:</span>
                          <span className="font-medium text-teal-800">{match.recipient.name}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Age:</span>
                          <span className="font-medium text-teal-800">{match.recipient.age}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Blood Type:</span>
                          <span className="font-medium text-teal-800">{match.recipient.bloodType}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Urgency:</span>
                          <span className="font-medium text-teal-800">{match.recipient.urgencyLevel}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-teal-600">Waiting Time:</span>
                          <span className="font-medium text-teal-800">{match.recipient.waitingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-50 px-6 py-3 flex justify-between items-center">
                  <div className="text-sm text-teal-600">
                    <span className="font-medium">Match Date:</span> {match.matchDate}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-1 bg-white border border-teal-200 rounded text-sm text-teal-600 hover:bg-teal-50 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-1 bg-teal-500 rounded text-sm text-white hover:bg-teal-600 transition-colors">
                      Verify on Blockchain
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        )}

        <div className="mt-16 glass-card p-6 rounded-xl">
          <h3 className="font-bold text-teal-700 mb-6 text-center">How AI Match Algorithm Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold">1</span>
              </div>
              <h4 className="font-medium text-teal-700 mb-2">Blood Type Compatibility</h4>
              <p className="text-sm text-teal-600">
                Verifies donor and recipient blood types are compatible
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold">2</span>
              </div>
              <h4 className="font-medium text-teal-700 mb-2">Tissue Matching</h4>
              <p className="text-sm text-teal-600">
                Analyzes HLA proteins to minimize rejection risk
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold">3</span>
              </div>
              <h4 className="font-medium text-teal-700 mb-2">Urgency Assessment</h4>
              <p className="text-sm text-teal-600">
                Prioritizes based on medical urgency and waiting time
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold">4</span>
              </div>
              <h4 className="font-medium text-teal-700 mb-2">Location Distance</h4>
              <p className="text-sm text-teal-600">
                Considers geographical proximity for organ viability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchResults;


import React, { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "sonner";

type DoctorSpecialty = "Transplant Surgeon" | "Nephrologist" | "Hepatologist" | "Cardiologist" | "Pulmonologist";

interface DoctorProps {
  id: string;
  name: string;
  specialty: DoctorSpecialty;
  image: string;
  hospital: string;
  experience: string;
  phone: string;
  email: string;
  location: string;
  availability: string;
}

const doctors: DoctorProps[] = [
  {
    id: "dr-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Transplant Surgeon",
    image: "/lovable-uploads/23b9b01d-7751-43bc-9de9-3a5ff250eb93.png",
    hospital: "Pransetu Memorial Hospital",
    experience: "15+ years",
    phone: "+91 98765 43210",
    email: "dr.sharma@pransetu.io",
    location: "New Delhi, India",
    availability: "Mon, Wed, Fri: 9AM - 1PM"
  },
  {
    id: "dr-patel",
    name: "Dr. Vikram Patel",
    specialty: "Nephrologist",
    image: "/lovable-uploads/23b9b01d-7751-43bc-9de9-3a5ff250eb93.png",
    hospital: "Kidney Care Center",
    experience: "12+ years",
    phone: "+91 87654 32109",
    email: "dr.patel@pransetu.io",
    location: "Mumbai, India",
    availability: "Tue, Thu: 2PM - 6PM"
  },
  {
    id: "dr-reddy",
    name: "Dr. Lakshmi Reddy",
    specialty: "Hepatologist",
    image: "/lovable-uploads/23b9b01d-7751-43bc-9de9-3a5ff250eb93.png",
    hospital: "Liver Institute",
    experience: "10+ years",
    phone: "+91 76543 21098",
    email: "dr.reddy@pransetu.io",
    location: "Hyderabad, India",
    availability: "Mon-Fri: 10AM - 4PM"
  },
  {
    id: "dr-gupta",
    name: "Dr. Rajiv Gupta",
    specialty: "Cardiologist",
    image: "/lovable-uploads/23b9b01d-7751-43bc-9de9-3a5ff250eb93.png",
    hospital: "Heart Care Specialists",
    experience: "18+ years",
    phone: "+91 65432 10987",
    email: "dr.gupta@pransetu.io",
    location: "Kolkata, India",
    availability: "Wed, Sat: 9AM - 5PM"
  },
  {
    id: "dr-singh",
    name: "Dr. Harpreet Singh",
    specialty: "Pulmonologist",
    image: "/lovable-uploads/23b9b01d-7751-43bc-9de9-3a5ff250eb93.png",
    hospital: "Lung Care Center",
    experience: "14+ years",
    phone: "+91 54321 09876",
    email: "dr.singh@pransetu.io",
    location: "Chandigarh, India",
    availability: "Mon, Thu, Sat: 11AM - 3PM"
  }
];

const DoctorCard: React.FC<{ doctor: DoctorProps }> = ({ doctor }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleContactClick = (method: string) => {
    toast.success(`Contact request sent to ${doctor.name} via ${method}. They will get back to you soon.`);
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-teal-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teal-600 w-12 h-12"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-teal-700">{doctor.name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                {doctor.specialty}
              </span>
              <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs">
                {doctor.hospital}
              </span>
              <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs">
                {doctor.experience}
              </span>
            </div>
          </div>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full md:w-auto">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="mt-3 md:mt-0 w-full md:w-auto">
                {isOpen ? "Hide Details" : "Contact Details"}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
        
        <CollapsibleContent className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-3 rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <Phone className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex-grow">
                <p className="text-xs text-teal-600">Phone</p>
                <p className="text-sm font-medium text-teal-700">{doctor.phone}</p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => handleContactClick('phone')}>
                Call
              </Button>
            </div>
            
            <div className="glass-card p-3 rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <Mail className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex-grow">
                <p className="text-xs text-teal-600">Email</p>
                <p className="text-sm font-medium text-teal-700">{doctor.email}</p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => handleContactClick('email')}>
                Email
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-3 rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex-grow">
                <p className="text-xs text-teal-600">Location</p>
                <p className="text-sm font-medium text-teal-700">{doctor.location}</p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => handleContactClick('location')}>
                Map
              </Button>
            </div>
            
            <div className="glass-card p-3 rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex-grow">
                <p className="text-xs text-teal-600">Availability</p>
                <p className="text-sm font-medium text-teal-700">{doctor.availability}</p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => handleContactClick('appointment')}>
                Book
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <Button className="flex-1" variant="outline" onClick={() => handleContactClick('video')}>
              <MessageSquare className="mr-2 h-4 w-4" /> Video Consult
            </Button>
            <Button className="flex-1" onClick={() => handleContactClick('appointment')}>
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </div>
        </CollapsibleContent>
      </div>
    </div>
  );
};

interface DoctorContactSectionProps {
  className?: string;
}

const DoctorContactSection: React.FC<DoctorContactSectionProps> = ({ className }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<DoctorSpecialty | "All">("All");
  
  const filteredDoctors = selectedSpecialty === "All" 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);
  
  const specialties: Array<DoctorSpecialty | "All"> = [
    "All", 
    "Transplant Surgeon", 
    "Nephrologist", 
    "Hepatologist", 
    "Cardiologist", 
    "Pulmonologist"
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-teal-700 mb-3">Consult with Specialists</h2>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Our network of experienced specialists is available for consultations regarding organ donation and transplantation.
            Choose a doctor based on your specific needs.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-8 flex-wrap gap-2">
          {specialties.map(specialty => (
            <Button 
              key={specialty}
              variant={selectedSpecialty === specialty ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty === "All" && <Users className="mr-2 h-4 w-4" />}
              {specialty}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        
        <div className="mt-12 bg-teal-50 p-6 rounded-xl">
          <div className="text-center">
            <h3 className="text-xl font-bold text-teal-700 mb-3">Need More Help?</h3>
            <p className="text-teal-600 mb-4">
              Our medical team is available 24/7 for emergency consultations and inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> Emergency Hotline
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <MessageSquare className="h-4 w-4" /> Chat with Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorContactSection;

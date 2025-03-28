
import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const logoSizes = {
    sm: 28,
    md: 36,
    lg: 44,
  };

  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]}`}>
      <img 
        src="/lovable-uploads/23b9b01d-7751-43bc-9de9-3a5ff250eb93.png" 
        alt="Pransetu Logo" 
        className="object-contain"
        width={logoSizes[size]} 
        height={logoSizes[size]} 
      />
      <span className="font-bold text-white">
        Pransetu
      </span>
    </div>
  );
};

export default Logo;

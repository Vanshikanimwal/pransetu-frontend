
import React from "react";
import { Heart } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]}`}>
      <Heart className="text-teal-500 animate-pulse-soft" size={size === "lg" ? 36 : size === "md" ? 28 : 24} />
      <span className="font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
        LifeChain
      </span>
    </div>
  );
};

export default Logo;

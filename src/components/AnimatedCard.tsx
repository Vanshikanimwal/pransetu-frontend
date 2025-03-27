
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({
  children,
  className,
  delay = 0,
}: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 animate-fade-in card-hover opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;

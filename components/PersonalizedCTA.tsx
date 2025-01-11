"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface PersonalizedCTAProps {
  className?: string;
}

export default function PersonalizedCTA({
  className = "",
}: PersonalizedCTAProps) {
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisited");
    if (hasVisitedBefore) {
      setIsReturningVisitor(true);
    } else {
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const ctaText = isReturningVisitor
    ? "Get Your 10% Discount Now"
    : "Learn More";
  // const href = isReturningVisitor ? "#discount" : "#how-it-works"

  const handleGetDiscount = () => {
    if (isReturningVisitor) {
      window.location.href = "/api/male-validity";
    } else {
      window.location.href = "/api/male-validity-power";
    }
  };
  return (
    <Button
      className={`w-full sm:w-auto relative overflow-hidden group px-8 py-8 rounded-full text-lg font-semibold inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:shadow-lg transition-all duration-300  ${className}`}
      onClick={handleGetDiscount}
    >
      <span className="relative z-10">{ctaText}</span>
      <ArrowRight className="ml-2 relative z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
}

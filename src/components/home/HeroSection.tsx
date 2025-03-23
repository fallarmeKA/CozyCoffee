import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

const HeroSection = ({
  title = "Welcome to Cozy Coffee",
  subtitle = "Discover our handcrafted coffee, sourced from sustainable farms and roasted to perfection.",
  backgroundImage = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80",
  primaryCta = {
    text: "Order Now",
    href: "/menu",
  },
  secondaryCta = {
    text: "Our Story",
    href: "#origin-story",
  },
}: HeroSectionProps) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-amber-950">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-3xl">
          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg md:text-xl">{subtitle}</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              className="bg-amber-700 hover:bg-amber-800"
              onClick={() => (window.location.href = primaryCta.href)}
            >
              {primaryCta.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white/20"
              onClick={() => (window.location.href = secondaryCta.href)}
            >
              {secondaryCta.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

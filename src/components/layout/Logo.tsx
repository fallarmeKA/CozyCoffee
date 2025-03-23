import React from "react";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

const Logo = ({
  className,
  iconClassName,
  textClassName,
  showText = true,
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Coffee className={cn("h-6 w-6 text-amber-700", iconClassName)} />
      {showText && (
        <span
          className={cn(
            "font-dancing-script text-2xl font-bold text-amber-900",
            textClassName,
          )}
        >
          Cozy Coffee
        </span>
      )}
    </div>
  );
};

export default Logo;

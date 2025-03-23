import React from "react";
import { cn } from "@/lib/utils";

interface OriginStoryProps {
  title?: string;
  story?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

const OriginStory = ({
  title = "Our Coffee Journey",
  story = "Coffee Haven began in 2010 when two friends, passionate about exceptional coffee, decided to create a space where quality and community could thrive together. What started as a small cart in the local farmers' market has grown into the warm, inviting space you see today. We source our beans directly from small-scale farmers across the globe, ensuring ethical practices and the highest quality. Each cup we serve carries the story of the hands that nurtured it from seed to harvest. Our roasting process, perfected over years of dedication, brings out the unique character of every bean variety. At Coffee Haven, we believe that great coffee creates moments of connection – between people, cultures, and traditions.",
  imageSrc = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  imageAlt = "Coffee beans being roasted in a traditional roaster",
  reverse = false,
}: OriginStoryProps) => {
  return (
    <section className="w-full py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex flex-col md:flex-row items-center gap-8 md:gap-12",
            reverse && "md:flex-row-reverse",
          )}
        >
          <div className="w-full md:w-1/2">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900">
              {title}
            </h2>
            <div className="w-20 h-1 bg-amber-600"></div>
            <p className="text-amber-800 leading-relaxed">{story}</p>
            <button className="mt-4 px-6 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-md transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;

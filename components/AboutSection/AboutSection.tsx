import React from "react";
import ValueCard from "./ValueCard";

interface ValueData {
  id: number;
  attributes: {
    name: string;
    short_desc: string;
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
interface AboutSectionProps {
  backgroundImage: string;
  overlayColor: string;
  title: string;
  cardColumnsCss: string;
  valuesData: ValueData[];
}

export const metadata = {
  title: "AboutSection",
};

export default function AboutSection({
  backgroundImage,
  overlayColor,
  title,
  cardColumnsCss,
  valuesData,
}: AboutSectionProps) {
  return (
    <div className="relative">
      <div
        className="w-full min-h-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        {/* Overlay covering the entire background */}
        <div className={`absolute inset-0 ${overlayColor}`}></div>
        <div className="relative text-white p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-bold text-4xl md:text-5xl my-12">
              {title}
            </h2>
            {/* Values cards container */}
            <div className={`grid ${cardColumnsCss} gap-6`}>
              {valuesData.map((value) => (
                <ValueCard key={value.id} data={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

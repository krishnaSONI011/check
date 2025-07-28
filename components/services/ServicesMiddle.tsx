import React from "react";
import ServiceCard from "./ServiceCard";
import ServicesSlider from "./ServicesSlider";
import NotFound from "../NotFound";

interface ServicesMiddleProps {
  data: any;
  isHome: boolean;
}

export const metadata ={
  title: "Services ...",
};

export default function ServicesMiddle({ data, isHome }: ServicesMiddleProps) {
  if (!Array.isArray(data)) {
    return <NotFound />;
  }

  return (
    <div className="mb-12">
      {isHome ? (
        <div>
          <div className="hidden md:block">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map(
                  (service: any, index: React.Key | null | undefined) => (
                    <ServiceCard key={index} data={service} />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <ServicesSlider data={data} />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((service: any, index: React.Key | null | undefined) => (
              <ServiceCard key={index} data={service} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import { JobOpening } from "@/lib/types";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { FaArrowRight } from "react-icons/fa6";
import NotFound from "../NotFound";

interface CareerOpeningsProps {
  openings: JobOpening[];
}

// export const metadata = {
//   title: "careeopeanings",
// };

const CareerOpenings: React.FC<CareerOpeningsProps> = ({ openings }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryCounts: Record<string, number> = useMemo(() => {
    const counts: Record<string, number> = {};
    openings.forEach((opening) => {
      counts[opening.category] = (counts[opening.category] || 0) + 1;
    });
    return counts;
  }, [openings]);

  const categories = useMemo(() => {
    const categorySet = new Set(openings.map((opening) => opening.category));
    return ["All", ...Array.from(categorySet)];
  }, [openings]);

  const filteredOpenings =
    activeCategory === "All"
      ? openings
      : openings.filter((opening) => opening.category === activeCategory);

  if (!openings) {
    return <NotFound />;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 ">
      <div className="text-center uppercase font-sans mt-10 text-[1.2rem]">
        Come Join Us
      </div>
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 m-4">
        Career Openings
      </h1>
      <p className="text-center text-gray-600 mb-8 md:w-[700px] mx-auto ">
        We&apos;re always looking for creative, talented self-starters to join
        the threeacross family. Check out our open roles below and fill out an
        application.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <div className="flex flex-col">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-left py-2 px-4 ${
                activeCategory === category
                  ? "font-bold text-blue-500"
                  : "text-gray-900"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category} (
              {category === "All"
                ? openings.length
                : categoryCounts[category] || 0}
              )
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filteredOpenings.map((opening, index) => (
            // <Link key={index}
            //   href={`#`}
            //   className="text-gray-900 hover:text-gray-700 ml-4"
            // >
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-lg"
              >
                <div className="w-2/3">
                  <h3 className="text-lg text-gray-900">
                    {opening.title}
                  </h3>
                </div>
                <div className="ml-4">
                  <div className="text-gray-600">Experience</div>{" "}
                  <span className="text-gray-600">{opening.experience}</span>
                </div>

                <FaArrowRight color="black" />
              </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOpenings;

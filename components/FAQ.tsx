"use client";
import React, { useState } from "react";
import NotFound from "./NotFound";

type FAQDataProps = {
  question: string;
  answer: string;
};

type Props = {
  faqData: FAQDataProps[];
};

const FAQ = ({ faqData }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqData || faqData.length === 0) {
    return null; // Don't render anything if there is no faqData
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-20">
      <div className="relative w-full bg-white px-6 pb-8 mt-8 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-full sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-medium tracking-wider md:text-4xl ">
              FAQ&apos;s
            </h2>
          </div>
          {faqData.map((item, index) => (
            <div
              className="mx-auto mt-4 grid max-w-4xl divide-y divide-neutral-300 border rounded-xl"
              key={index}
            >
              <div className="py-1">
                <details
                  className="group"
                  open={openIndex === index}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFAQ(index);
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium p-4">
                    <span className="text-md font-sans">{item.question}</span>
                    <span
                      className={`transition ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="gray"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 p-4">
                    {item.answer}
                  </p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

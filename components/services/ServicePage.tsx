import Link from "next/link";
import React from "react";
import FAQ from "../FAQ";

export default function ServicePage({ data }: any) {
  return (
    <div className="mb-60">
      <div className="w-full h-full">
        <div className="flex p-10 gap-2">
          <div className="mt-2 flex p-10 gap-2">
            <Link
              href="/services"
              className="inline-flex items-center  px-3  py-1.5 rounded-md text-red-500 hover:bg-indigo-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </Link>

            <div className="text-3xl font-bold p-2 text-white text-center justify-center">
              {data.attributes.name}
            </div>
          </div>
        </div>

        <div className="text-white text-center text-2xl p-5">
          {data.attributes.short_desc}
        </div>
      </div>

      <div>
        <div className="m-10 p-10 rounded-lg shadow-lg">
          <div className="text-black ">{data.attributes.long_desc}</div>
        </div>
        <FAQ faqData={data.attributes.faq} />
      </div>
    </div>
  );
}

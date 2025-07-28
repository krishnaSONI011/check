import CareerOpenings from "@/components/Career/CareerOpening";
import NotFound from "@/components/NotFound";
import { fetchAPI } from "@/lib/fetch-api";
import { JobOpening } from "@/lib/types";
import React from "react";

export const metadata = {
  title: "Careers",
};

export default async function Page() {
  const data: any[] = await getData();
  if (!data) {
    return <NotFound />;
  }

  if (!Array.isArray(data) || data === null) {
    return <NotFound />;
  }

  const jobOpenings: JobOpening[] = data.map((item) => {
    return {
      id: item.id,
      title: item.attributes.title,
      experience: item.attributes.job_summary.experience,
      category: item.attributes.field,
    };
  });

  return (
    <div className="relative">
      <div
        className="bg-no-repeat bg-cover  h-full w-full p-6 min-h-80 relative"
        style={{
          backgroundImage: `url('/images/career/career.svg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gray-400 bg-opacity-50"></div>

        <div className=" relative flex flex-col items-center justify-center p-8 mt-20 z-10">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Join Us
          </h1>
          <p className=" text-lg text-center text-white">
            We are a community of passionate individuals who love to create and
            innovate. Join us and be a part of something amazing!
          </p>
        </div>
      </div>

          <CareerOpenings openings={jobOpenings} />
    </div>
  );
}

async function getData() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/careers`;
    const urlParamsObject = {
      populate: ["job_summary.experience"],
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);

    const data = await responseData.data;
    return data;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

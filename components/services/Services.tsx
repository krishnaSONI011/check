import React from "react";
import { fetchAPI } from "@/lib/fetch-api";
import ServicesMiddle from "./ServicesMiddle";
import NotFound from "../NotFound";


export const metadata = {
  title: "Services",
};

interface ServicesProps {
  isHome: boolean;
}

export default async function Services({ isHome }: ServicesProps) {
  const data: any[] = await getData(isHome);

  return (
    <div
      className="bg-no-repeat bg-cover bg-center h-full w-full p-6 relative"
      style={{
        backgroundImage: `url('/images/services/services-bg.png')`,
        backgroundSize: "cover",
      }}
    >
      {/* Gray overlay covering the entire background */}
      <div className="absolute inset-0 bg-red-400 bg-opacity-50"></div>

      {/* Content wrapper with relative positioning and z-index */}
      <div className="relative z-10 ">
        {isHome ? (
          <div className="m-6 flex justify-between">
            <h1 className="text-2xl md:text-3xl pl-2  border-l-[6px] font-sans font-bold border-blue-500 dark:text-gray-200 text-white rounded">
              Services We Offer
            </h1>
          </div>
        ) : (
          <div>
            <div className="max-w-3xl mx-auto text-center mt-16">
              <h1 className="text-3xl font-bold text-white leading-tight mb-1 pb-1 relative">
                Services we offer
              </h1>
              <p className="text-sm text-white mb-12">
                Here are list of services we offer!
              </p>
            </div>
          </div>
        )}
        {data === null ? <NotFound /> : <ServicesMiddle data={data} isHome={isHome} />}
      </div>
    </div>
  );
}

async function getData(isHome: boolean) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/services`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject = {
      populate: {
        icon: { url: "*" },
        slug: { url: "*" },
      },
    };

    const responseData = await fetchAPI(path, urlParamsObject, options);
    const data = await responseData.data;
    return data;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

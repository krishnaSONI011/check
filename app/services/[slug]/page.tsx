import FAQ from "@/components/FAQ";
import { postRenderer } from "@/components/post-renderer";
import { fetchAPI } from "@/lib/fetch-api";
import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

let name: string;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name}`);
    }, 100);
  });
  return {
    title: `${title}`,
  };
};

export default async function Page({ params }: Props) {
  const data = await getData(params.slug);

  name = data.attributes?.name;

  // console.log(data.attributes.desc);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/services/services-bg.png')`,
        }}
      >
        {/* Gray overlay covering the entire background */}
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
      </div>
      <div className="relative z-10 pt-20 mb-20">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-bold p-2 text-white font-sans">
            {data.attributes?.name ? data.attributes.name : "No name"}
          </div>
          <div className="text-gray-200 text-center text-xl p-5 lg:mx-60 mb-10">
            {data.attributes.short_desc || "No Description"}
          </div>
          <div className="bg-white lg:mx-60 rounded-xl w-full max-w-4xl ">
            <div className="rounded-lg shadow-lg mx-4 p-2 lg:p-10 ">
              <div className="text-black">
                {data.attributes.desc.map((section: any, index: number) =>
                  postRenderer(section, index)
                )}
              </div>
              {data.attributes.faq && <FAQ faqData={data.attributes.faq} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
async function getData(slug: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/services/${slug}`;
    const urlParamsObject = {
      populate: {
        icon: { url: "*" },
        faq: { populate: "*" },
        desc: { populate: "*" },
      },
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

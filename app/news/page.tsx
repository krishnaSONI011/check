import NewsCard from "@/components/News/NewsCard";
 import NotFound from "@/components/NotFound";
import { formatDate, getStrapiMedia } from "@/lib/api-helpers";
import { fetchAPI } from "@/lib/fetch-api";
import React from "react";


export const metadata = {
  title: "News",
};

export default async function Page() {
  const data: any[] = await getData();
  if (!data) {
    return <NotFound />;
  }
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center h-full w-full p-6 min-h-96"
        style={{
          backgroundImage: `url('/images/services/services-bg.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-col items-center justify-center p-8 mt-20">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            News
          </h1>
          <p className=" text-lg text-center text-white">
            We are a community of passionate individuals who love to create and
            innovate. Join us and be a part of something amazing!
          </p>
        </div>
      </div>

      <div className="relative z-2">
        <div className="h-full w-full p-6 py-10">
          <div className="m-6 flex justify-center">
            <h1 className="text-3xl md:text-3xl font-sans font-bold d text-white rounded">
              In The News
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.map((card: any, index: any) => (
                <NewsCard
                  date={formatDate(card.attributes.date)}
                  url={card.attributes.url}
                  key={index}
                  title={card.attributes.Title}
                  author={card.attributes.author}
                  image={
                    getStrapiMedia(
                      card.attributes.cover.data.attributes.url
                    ) as string
                  }
                  description={card.attributes.short_desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/news-articles`;
    const urlParamsObject = {
      sort: { createdAt: "asc" },
      populate: {
        cover: { fields: ["url"] },
        category: { populate: "*" },
        authorsBio: {
          populate: "*",
        },
      },
      pagination: {
        start: 0,
        limit: 4,
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

import React from "react";
import { fetchAPI } from "@/lib/fetch-api";
import Link from "next/link";
import NewsMiddle from "./NewsMiddle";
import NotFound from "../NotFound";

export const metadata = {
  title: "News Section",
};

export default async function NewsSection() {
  const data: any[] = await getData();
  if (!data) {
    return <NotFound />;
  }
  return (
    <div className="relative z-2">
      <div className="h-full w-full p-6    bg-amber-200">
        <div className="m-6 flex justify-between ">
          <h1 className="text-2xl md:text-3xl pl-2    border-l-[6px] font-sans font-bold border-blue-500 dark:text-gray-200 text-black rounded-l "
          >
            In The News
          </h1>
          <Link
            href={"/news"}
            className="ml-auto text-black hover:text-blue-700 font-bold"
          >
            View More →
          </Link>
        </div>
        <NewsMiddle data={data} />
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
        short_desc: { populate: "*" },
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

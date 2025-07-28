import React from "react";
import { fetchAPI } from "@/lib/fetch-api";
import Link from "next/link";
import BlogMiddle from "./BlogMiddle";
import NotFound from "../NotFound";
import { Button } from "../ui/button";

export const metadata = {
  title: "BlogSection",
};

export default async function BlogSection() {
  const data: any[] = await getData();
  if (!data) {
    return <NotFound />;
  }
  return (
    <div className="h-full w-full p-6 relative py-10 mt-10">
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-blue-500" />
      <div className="m-6 flex justify-between">
        <h1 className="text-2xl md:text-3xl pl-2  border-l-[6px] font-sans font-bold border-blue-500 dark:text-gray-200 text-black rounded">
          Blogs
        </h1>
        <Link href={"/blog"} className="ml-auto text-blac hover:text-blue-700  font-bold">
          View More →
        </Link>
      </div>
      <BlogMiddle data={data} />
    </div>
  );
}

async function getData() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
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

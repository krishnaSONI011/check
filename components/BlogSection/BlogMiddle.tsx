"use client";
import React from "react";
import BlogCard from "./BlogCard";
import { getStrapiMedia } from "@/lib/api-helpers";
import BlogSlider from "./BlogSlider";
import NotFound from "../NotFound";


// export const metadata = {
//   title: "BlogMiddle",
// };


export default function BlogMiddle({ data }: any) {
  if (!Array.isArray(data) || data === null) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="hidden md:block">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center px-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {data &&
                data.map((card: any, index: any) => {
                  const categoryData = card.attributes.category?.data;
                  return (
                    <BlogCard
                      url={`/blog/${categoryData?.attributes.slug}/${card.attributes.slug}`}
                      key={index}
                      title={card.attributes.title}
                      image={getStrapiMedia(
                        card.attributes.cover.data.attributes.url
                      ) as string}
                      description={card.attributes.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <BlogSlider data={data} />
      </div>
    </div>
  );
}

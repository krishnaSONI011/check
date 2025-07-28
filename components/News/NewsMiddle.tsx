"use client";
import { formatDate, getStrapiMedia } from "@/lib/api-helpers";
import React from "react";
import NewsCard from "./NewsCard";
import NotFound from "../NotFound";
import NewsSlider from "./NewsSlider";

export default function NewsMiddle({ data }: any) {
  if (!Array.isArray(data) || data === null) {
    return <NotFound />;
  }

  return (
    <div className="relative">
      <div className="hidden md:block z-2">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center px-4 my-12 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.map((card: any, index: any) => (
                <NewsCard
                  date={formatDate(card.attributes.date)}
                  url={card.attributes.url}
                  key={index}
                  title={card.attributes.Title}
                  description={card.attributes?.short_desc}
                  author={card.attributes.author}
                  image={
                    getStrapiMedia(
                      card.attributes.cover.data.attributes.url
                    ) as string
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mb-80 z-2">
        <NewsSlider data={data} />
      </div>
    </div>
  );
}

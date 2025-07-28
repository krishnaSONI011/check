"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getStrapiMedia } from "@/lib/api-helpers";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { BlogCardProps } from "@/lib/data";


// export const metadata = {
//   title: "BlogSlider",
// };

export default function BlogSlider({ data }: any) {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...settings} ref={setSliderRef} className="mb-6">
        {data.map((card: any, index: any) => {
          if (card && card.attributes) {
            return (
              <BlogCard
                url={`/blog/${card.attributes.category.data?.attributes?.slug}/${card.attributes.slug}`}
                key={index}
                title={card.attributes.title}
                image={
                  getStrapiMedia(
                    card.attributes.cover.data.attributes.url
                  ) as string
                }
                description={card.attributes.description}
              />
            );
          }
          return null;
        })}
      </Slider>
      <div className="absolute left-1/2 mt-6 transform -translate-x-1/2 flex">
        <button
          className="mr-2 flex items-center justify-center h-10 w-10 rounded-full border-white border-2"
          onClick={() => sliderRef?.slickPrev()}
        >
          <IoArrowBackOutline color="white" size={26} />
        </button>
        <button
          className="flex items-center justify-center h-10 w-10 rounded-full border-white border-2 shadow-md"
          onClick={() => sliderRef?.slickNext()}
        >
          <IoArrowForwardOutline color="white" size={26} />
        </button>
      </div>
    </div>
  );
}
const BlogCard = ({ title, image, description, url }: BlogCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md z-10 flex flex-col h-full">
      <Image
        src={image}
        alt="plant"
        width={283}
        height={220}
        className="object-cover w-full h-56"
      />
      <div className="flex flex-col p-5">
        <h3 className="text-xl font-sans font-bold mb-2 flex-grow line-clamp-2 overflow-hidden">
          {title}
        </h3>
        <p className="text-medium text-gray-500 mb-4 flex-grow line-clamp-3 overflow-hidden">
          {description}
        </p>
        <Link
          className="rounded-md py-2 text-blue-700 duration-75 self-start mt-auto"
          href={url}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

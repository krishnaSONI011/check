"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatDate, getStrapiMedia } from "@/lib/api-helpers";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function NewsSlider({ data }: any) {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings} ref={setSliderRef} className="mb-6">
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
            description={card.attributes.description}
          />
        ))}
      </Slider>
      <div className="flex justify-center">
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

const NewsCard = ({ title, image, description, author, url, date }: any) => {
  return (
    <div className=" min-w-56 overflow-hidden rounded-xl bg-white shadow-md flex flex-col h-full m-2">
      <Link href={url} className="flex flex-col h-full">
        <Image
          src={image}
          alt="plant"
          className="h-56 w-full object-cover"
          width={200}
          height={90}
        />
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-xl lg:text-3xl font-sans font-bold text-black mb-2 flex-grow line-clamp-2 overflow-hidden">
            {title}
          </h3>
          <p className="text-medium mb-4 text-gray-700 flex-grow">
            {description}
          </p>
          <div className="mt-auto">
            <h4 className="text-sm">{author}</h4>
            <h4 className="font-bold text-sm mb-2">Published on {date}</h4>
            <button className="rounded-md py-2 text-blue-700 duration-75">
              Read More →
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

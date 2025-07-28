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
import { AiOutlineStop } from "react-icons/ai";

export default function ServicesSlider({ data }: any) {
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
      <Slider
        {...settings}
        ref={setSliderRef}
        className="mb-6 flex justify-center"
      >
        {data.reduce((result: JSX.Element[], service: any, index: number) => {
          if (index % 2 === 0) {
            result.push(
              <div key={index} className="flex space-x-2">
                <ServiceCard data={data[index]} />
                {data[index + 1] && <ServiceCard data={data[index + 1]} />}
              </div>
            );
          }
          return result;
        }, [])}
      </Slider>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex">
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

type ServiceCardProps = {
  data: any;
  isHome?: boolean;
};

function ServiceCard({ data, isHome }: ServiceCardProps) {
  const cardData = data.attributes;
  return (
    <Link href={isHome ? "/services" : `/services/${data.id}`}>
      <div
        className={`p-4 w-full flex relative overflow-hidden bg-white shadow-md rounded-xl`}
      >
        <div className="flex flex-col">
          {cardData.icon.data === null ? (
            <AiOutlineStop color="red" size={ 44} />
          ) : (
            <Image
              src={getStrapiMedia(cardData.icon.data?.attributes.url) as string}
              alt={""}
              width={40}
              height={40}
            />
          )}

          <h3 className="text-lg font-sans font-bold text-[#333333]">
            {data?.attributes.name ? data?.attributes.name : "No Title"}
          </h3>
          <p className="flex text-sm text-gray-400">
            {data?.attributes.short_desc
              ? data?.attributes.short_desc
              : "No Description"}
          </p>
        </div>
      </div>
    </Link>
  );
}

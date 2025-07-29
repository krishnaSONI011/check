"use client";
import React, { useState } from "react";
import  ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getStrapiMedia } from "@/lib/api-helpers";
import Image from "next/image";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import Loading from "../Loading";
import NotFound from "../NotFound";
interface TestimoniProps {
  data: any[];
}

export default function Testimony({ data }: TestimoniProps) {
  const [sliderRef, setSliderRef] = useState<ReactSlick | null>(null);
  const Slider = ReactSlick as unknown as React.FC<any>;
  let slides = 1;

  console.log(data.length);

  if (data.length < 3) {
    slides = data.length;
  } else {
    slides = 3;
  }

  if (!Array.isArray(data)) {
    return <NotFound />;
  }

  const settings = {
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="h-full w-full p-6 relative py-10 mb-20">
        <div className="absolute inset-x-0 top-0 h-3/5 bg-blue-500 -z-10" />
        <div className="m-6 flex justify-between mb-10">
          <div className="text-2xl md:text-3xl pl-2  border-l-[6px] font-sans font-bold border-white text-white rounded whitespace-nowrap ">
            Client Testimonials
          </div>
          <div className="hidden md:block">
            <div className="flex w-full items-center justify-end">
              <div className="flex justify-between">
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
          </div>
        </div>
        <div>
          <Slider {...settings} ref={setSliderRef} arrows={false}>
            {data.map((testimoni, index: number) => (
              <div className="px-3 flex" key={index}>
                <div className="border-2 hover:border-blue-500 transition-all rounded-3xl p-6 flex flex-col bg-white md:h-80 h-96">
                  <p className="mt-5 text-left">
                    “{testimoni.attributes.feedback}”.
                  </p>
                  <div className="flex-1" />{" "}
                  {/* Add this empty div to take up remaining space */}
                  <div className="h-20 flex flex-col xl:flex-row w-full xl:items-center">
                    <div className="flex order-2 xl:order-1">
                      <Image
                        className="rounded-full h-16 w-16 object-cover"
                        src={
                          testimoni.attributes.profile.data === null
                            ? ""
                            : (getStrapiMedia(
                                testimoni.attributes.profile.data.attributes.url
                              ) as string)
                        }
                        height={70}
                        width={70}
                        alt="Icon People"
                      />
                      <div className="flex flex-col ml-5 text-left m-auto">
                        <p className="text-sm text-gray-600 capitalize font-sans font-bold">
                          {testimoni.attributes.name}
                        </p>
                        <p className="text-sm text-gray-500 capitalize">
                          {testimoni.attributes.place}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex w-full items-center justify-center md:hidden mt-10">
          <div className="flex justify-between">
            <button
              className="mr-2 flex items-center justify-center h-10 w-10 rounded-full border-black border-2"
              onClick={() => sliderRef?.slickPrev()}
            >
              <IoArrowBackOutline color="black" size={26} />
            </button>
            <button
              className="flex items-center justify-center h-10 w-10 rounded-full border-black border-2 shadow-md"
              onClick={() => sliderRef?.slickNext()}
            >
              <IoArrowForwardOutline color="black" size={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

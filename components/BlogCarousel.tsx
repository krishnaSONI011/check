"use client";
import React from "react";
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { formatDate, getStrapiMedia } from "@/lib/api-helpers";
import Link from "next/link";

export default function BlogCarousel({ data }: any) {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <IoIosArrowBack color="white" />,
    responsive: [
      {
        breakpoint: 768, // Tablet breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };
  const Slider = ReactSlick as unknown as React.FC<any>;
  return (
    <div>
      <Slider {...settings}>
        {data.map((article: any, index: any) => {
          const imageUrl = getStrapiMedia(
            article.attributes.cover.data?.attributes.url
          );

          const category = article.attributes.category.data?.attributes;
          const authorsBio = article.attributes.authorsBio.data?.attributes;

          const avatarUrl = getStrapiMedia(
            authorsBio?.avatar.data.attributes.url
          );

          return (
            <div
              key={index}
              className="bg-no-repeat bg-cover bg-center w-full h-auto flex justify-center items-center"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            >
              <div className="text-center  md:m-20 items-center">
                <h1 className="text-2xl md:text-3xl p-2 text-white font-bold">
                  {article.attributes.title}
                </h1>
                <p className="text-gray-200 mb-4">
                  {article.attributes.description}
                </p>
                <Link
                  className="text-gray-100 mb-10"
                  href={`/blog/${category?.slug}/${article.attributes.slug}`}
                >
                  Read article
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

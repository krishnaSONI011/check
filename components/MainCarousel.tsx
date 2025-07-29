"use client";
import React from "react";
import  ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hero, heroes } from "./Hero";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Carousel.css";

export default function MainCarousel() {
  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <IoIosArrowBack color="white" />,
  };
  const Slider = ReactSlick as unknown as React.FC<any>;
  return (
    <div>
      <Slider {...settings} arrows={true}>
        {heroes.map((hero, index) => (
          <Hero key={index} {...hero} />
        ))}
      </Slider>
    </div>
  );
}

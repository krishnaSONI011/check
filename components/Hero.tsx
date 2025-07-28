import React from "react";

interface HeroProps {
  imgSrc: string;
  heading: string;
  highlightedWord: string;
  highlightColor: string;
}

const heroes: HeroProps[] = [
  {
    imgSrc: "/images/main/slide1.jpg",
    heading: "Bringing Partnership back to recruitment",
    highlightedWord: "Partnership",
    highlightColor: "text-red-600",
  },
  {
    imgSrc: "/images/main/slide2.jpg",
    heading: "Bringing Passion back to talent acquisition",
    highlightedWord: "Passion",
    highlightColor: "text-yellow-300",
  },
  {
    imgSrc: "/images/main/slide3.jpg",
    heading: "Bringing Inclusivity back to hiring",
    highlightedWord: "Inclusivity",
    highlightColor: "text-blue-400",
  },
];

function Hero({ imgSrc, heading, highlightedWord, highlightColor }: HeroProps) {
  const [before, after] = heading.split(highlightedWord);

  return (
    <div
      className="bg-no-repeat bg-cover bg-center w-full p-6 sm:h-[50vh] lg:h-screen"
      style={{ backgroundImage: `url('${imgSrc}')` }}
    >
      <h1 className="text-3xl md:text-5xl p-2 text-white mt-20 md:mt-40 lg:mt-72 ml-10 md:ml-20  justify-center">
        {before}
        <span className={`${highlightColor} font-bold`}>{highlightedWord}</span>
        <div className="mt-2"></div>
        {after}
      </h1>
    </div>
  );
}

export { Hero, heroes };

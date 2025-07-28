import React from "react";

interface HeroProps {
  imgSrc: string;
  heading: string;
}

export const metadata = {
  title : "Blog",
};

const heroes: HeroProps[] = [
  {
    imgSrc: "/images/blog/image 22.png",
    heading: "",
  },
  {
    imgSrc: "/images/main/slide2.jpg",
    heading: "Bringing Partnership back to recruitment",
  },
  {
    imgSrc: "/images/main/slide3.jpg",
    heading: "Bringing Partnership back to recruitment",
  },
];

function Hero() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center w-full p-6 h-3/4 min-h-96 flex justify-center items-center"
      style={{ backgroundImage: `url('${heroes[0].imgSrc}')` }}
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl p-2 text-white">
          Bringing Partnership back to recruitment
        </h1>
        <p> Bringing Partnership back to recruitment</p>
      </div>
    </div>
  );
}

function Hero2() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center w-full p-6 h-3/4"
        style={{ backgroundImage: `url('${heroes[1].imgSrc}')` }}
      >
        <h1 className="text-3xl md:text-5xl p-2 text-white mt-60 ml-20">
          Bringing
          <span className="text-yellow-300 font-bold">
            {" "}
            Passion{" "}
          </span> <br /> back to talent acquisition.
        </h1>
      </div>
    </div>
  );
}
function Hero3() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center w-full p-6 h-3/4"
        style={{ backgroundImage: `url('${heroes[2].imgSrc}')` }}
      >
        <h1 className="text-3xl md:text-5xl p-2 text-white mt-60 ml-20">
          Bringing
          <span className="text-blue-400 font-bold">
            {" "}
            Inclusivity{" "}
          </span> <br /> back to hiring
        </h1>
      </div>
    </div>
  );
}

export { Hero, Hero2, Hero3 };

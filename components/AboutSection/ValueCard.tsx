import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/api-helpers";
import { AiOutlineStop } from "react-icons/ai";

interface ValueCardProps {
  data: {
    attributes: {
      name: string;
      short_desc: string;
      icon: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}


export const metadata= {
  title: 'Value Card',
};

function ValueCard({ data }: ValueCardProps) {
  const cardData = data.attributes;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-start gap-2">
      {cardData.icon.data === null ? (
        <AiOutlineStop color="red" size={54} />
      ) : (
        <Image
          className="h-10 w-10"
          src={cardData.icon.data?.attributes.url}
          alt={""}
          width={40}
          height={40}
        />
      )}
      <h3 className="text-xl font-sans font-bold text-[#333333] sm:mt-2">
        {" "}
        {data?.attributes.name ? data?.attributes.name : "No Title"}
      </h3>
      <p className="flex  text-base text-[#333333] flex-grow line-clamp-3 overflow-hidden">
        {" "}
        {data?.attributes.short_desc
          ? data?.attributes.short_desc
          : "No Description"}
      </p>
    </div>
  );
}

export default ValueCard;

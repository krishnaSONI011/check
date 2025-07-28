"use client";
import { getStrapiMedia } from "@/lib/api-helpers";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineStop } from "react-icons/ai";

type ServiceCardProps = {
  data: any;
  isHome?: boolean;
};

function ServiceCard({ data, isHome }: ServiceCardProps) {
  const cardData = data.attributes;
  return (
    <Link href={isHome ? "/services" : `/services/${data.id}`}>
      <div
        className={`p-4 w-full flex relative overflow-hidden bg-white shadow-md rounded-xl sm:w-full z-10 duration-200 hover:scale-105 hover:shadow-xl`}
      >
        <div className="flex flex-col p-2 sm:h-80 gap-6 mt-2">
          {cardData.icon.data === null ? (
            <AiOutlineStop color="red" size={54} />
          ) : (
            <Image
              className="h-10 w-10"
              src={getStrapiMedia(cardData.icon.data?.attributes.url) as string}
              alt={""}
              width={40}
              height={40}
            />
          )}
          <h3 className="text-xl font-sans font-bold text-[#333333] sm:mt-2">
            {data?.attributes.name ? data?.attributes.name : "No Title"}
          </h3>
          <p className="flex  text-base text-[#333333] flex-grow line-clamp-3 overflow-hidden">
            {data?.attributes.short_desc
              ? data?.attributes.short_desc
              : "No Description"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;

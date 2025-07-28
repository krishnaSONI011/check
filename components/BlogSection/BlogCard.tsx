import { BlogCardProps } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

export const metadata = {
  title: "BlogCard",
};

const BlogCard = ({ title, image, description, url }: BlogCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl z-10 flex flex-col h-full">
      <Link href={url} className="flex flex-col h-full">
        <Image
          src={image}
          alt="plant"
          width={283}
          height={220}
          className="object-cover w-full h-56"
        />
        <div className="flex flex-col p-4 m-6 flex-grow">
          <h3 className="text-xl font-sans font-bold mb-2 line-clamp-2 overflow-hidden">
            {title}
          </h3>
          <p className="text-medium text-gray-500 mb-4 flex-grow line-clamp-3 overflow-hidden">
            {description}
          </p>
          <div className="mt-auto">
            <div className="rounded-md text-blue-700 duration-75 inline-flex items-center">
              Read article <IoArrowForwardOutline />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

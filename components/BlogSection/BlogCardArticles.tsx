import { BlogCardProps } from "@/lib/data";
import Image from "next/image";



export const metadata = {
  title: "BlogCardArticles",
};

const BlogCardArticles = ({
  title,
  image,
  description,
  url,
}: BlogCardProps) => {
  return (
    <div className="max-w-sm h-[420px] overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl z-10 flex flex-col">
      <Image
        src={image}
        alt={title}
        width={283}
        height={220}
        className="object-cover w-full h-44"
      />
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-lg md:text-2xl font-bold font-sans text-medium text-gray-500 mb-4 line-clamp-2 overflow-hidden">
          {title}
        </div>
        <p className="text-medium text-gray-700 mb-4 flex-grow line-clamp-3 overflow-hidden">
          {description}
        </p>
        <div className="mt-auto">
          <button className="rounded-md py-2 text-blue-700 duration-75">
            Read article
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardArticles;

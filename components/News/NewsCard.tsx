import { truncateString } from "@/lib/truncator";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";


export const metadata = {
  title: "News Card",
};

const NewsCard = ({ title, image, description, author, url, date }: any) => {
  return (
    <div className="max-w-sm min-w-64 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl z-10 flex flex-col h-full">
      <Link href={url} className="flex flex-col h-full">
        <Image
          src={image}
          alt="plant"
          className="h-56 w-full object-cover"
          width={200}
          height={90}
        />
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex flex-row justify-between">
            <h4 className="text-sm">{author}</h4>
            <h4 className="font-bold text-sm mb-2">{date}</h4>
          </div>

          <h3 className="text-xl font-sans font-bold text-black mb-2 flex-grow line-clamp-2 overflow-hidden">
            {title}
          </h3>
          <p className="text-medium mb-4 text-gray-700 flex-grow">
            {description ? description.slice(0, 100) + "..." : ""}
          </p>
          <div className="mt-auto">
            <div
              className="rounded-md text-blue-700 duration-75 inline-flex items-center"
            >
              Read article <IoArrowForwardOutline />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;

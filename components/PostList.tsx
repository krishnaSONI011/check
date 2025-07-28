// ./frontend/src/app/[lang]/components/PostList.tsx

import { formatDate, getStrapiMedia } from "@/lib/api-helpers";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: 4;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: {
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    authorsBio: {
      data: {
        attributes: {
          name: string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export const metadata = {
  title: "PostList",
};

export default function PostList({
  data: articles,
  children,
}: {
  data: Article[];
  children?: React.ReactNode;
}) {
  return (
    <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-4 mb-20">
        {articles.map((article) => {
          const imageUrl = getStrapiMedia(
            article.attributes.cover.data?.attributes.url
          );
          const category = article.attributes.category.data?.attributes;
          return (
            <Link
              href={`/blog/${category?.slug}/${article.attributes.slug}`}
              key={article.id}
              className="mx-auto relative hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[200px] xl:min-w-[300px] min-w-[350px] lg:min-w-[300px] rounded-2xl overflow-hidden shadow-lg mb-10"
            >
              {imageUrl && (
                <Image
                  alt="presentation"
                  width="240"
                  height="240"
                  className="object-cover w-full h-44 "
                  src={imageUrl}
                />
              )}
              <div className="p-6 space-y-2  mt-4">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {article.attributes.title}
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-xs dark:text-gray-400">
                    {formatDate(article.attributes.publishedAt)}
                  </span>
                </div>
                <p className="py-4">
                  {article.attributes.description.slice(0, 100) + "..."}
                </p>
                <div className="mt-auto absolute bottom-2">
                  <button className="rounded-md py-2 text-blue-700 duration-75">
                    Read article →
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {children && children}
    </section>
  );
}

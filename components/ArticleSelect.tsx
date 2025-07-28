import React from "react";
import Link from "next/link";
import BlogCard from "./BlogSection/BlogCard";
import BlogCardArticles from "./BlogSection/BlogCardArticles";
import { getStrapiMedia } from "@/lib/api-helpers";

export const metadata= {
  title: "Article Select",
};

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    articles: {
      data: Array<{}>;
    };
  };
}

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    cover: string;
  };
}

function selectedFilter(current: string, selected: string) {
  return current === selected
    ? "px-3 py-1 rounded-lg hover:underline dark:bg-violet-700 dark:text-gray-100"
    : "px-3 py-1 rounded-lg hover:underline dark:bg-violet-400 dark:text-gray-900";
}

export default function ArticleSelect({
  categories,
  articles,
  params,
}: {
  categories: Category[];
  articles: Article[];
  params: {
    slug: string;
    category: string;
    cover: string;
  };
}) {
  return (
    <div className="p-4 rounded-lg dark:bg-gray-900 min-h-[365px] relative mb-80">
      <h4 className="text-xl font-semibold">Browse By Category</h4>

      <div>
        <div className="flex flex-wrap py-6 space-x-2 dark:border-gray-400">
          {categories.map((category: Category, index: any) => {
            if (category.attributes.articles.data.length === 0) return null;
            return (
              <Link
                key={index}
                href={`/blog/${category.attributes.slug}`}
                className={selectedFilter(
                  category.attributes.slug,
                  params.category
                )}
              >
                #{category.attributes.name}
              </Link>
            );
          })}
          <Link href={"/blog"} className={selectedFilter("", "filter")}>
            #all
          </Link>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="text-3xl font-bold">You May Also Like</h4>
            <Link
              rel="noopener noreferrer"
              href="/blog"
              className="text-violet-400 hover:underline hover:text-violet-500 transition-colors duration-200"
            >
              View More
            </Link>
          </div>

          <div className="container">
            <div className="flex flex-wrap items-center justify-center px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {articles.map((article: any, index: any) => {
                  return (
                    <Link
                      key={index}
                      href={`/blog/${params.category}/${article.attributes.slug}`}
                      rel="noopener noreferrer"
                    >
                      <BlogCardArticles
                        title={article.attributes.title}
                        image={
                          getStrapiMedia(
                            article.attributes.cover!.data.attributes.url
                          ) as string
                        }
                        description={article.attributes.description}
                        url={""}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "@/lib/fetch-api";
import Loader from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import PostList from "@/components/PostList";
import BlogCarousel from "@/components/BlogCarousel";
import { Button } from "@/components/ui/button";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

// export const metadata = {
//   title: "blog",
// };
export default function Page() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/articles`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          cover: { fields: ["url"] },
          category: { populate: "*" },
          authorsBio: {
            populate: "*",
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts() {
    if (meta) {
      const nextPosts = meta.pagination.start + meta.pagination.limit;
      fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
    }
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div className="relative">
      <div
        className="bg-no-repeat bg-cover bg-center h-1/2 w-full p-20 relative"
        style={{
          backgroundImage: `url('/images/career/career.svg')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>

        <BlogCarousel data={data} />
      </div>

      <div className="relative mt-60 bottom-40 z-10">
        <PostList data={data}>
          {meta &&
            meta.pagination.start + meta.pagination.limit <
              meta.pagination.total && (
              <div className="flex justify-center">
                <Button
                  type="button"
                  className="px-4 py-2 text-sm  hover:underline dark:bg-transparent border-white dark:text-gray-400"
                  onClick={loadMorePosts}
                >
                  view more
                </Button>
              </div>
            )}
        </PostList>
        <div className="mb-10"></div>
      </div>
    </div>
  );
}

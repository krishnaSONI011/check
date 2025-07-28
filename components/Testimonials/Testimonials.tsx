import React from "react";
import { fetchAPI } from "@/lib/fetch-api";
import Testimony from "./Testimony";
import NotFound from "../NotFound";

export default async function Testimonials() {
  const data: any[] = await getData();
  if (!data) {
    return <NotFound />;
  }

  return <Testimony data={data} />;
}

async function getData() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/testimonies`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const urlParamsObject = {
      populate: {
        profile: { url: "*" },
      },
    };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    const data = await responseData.data;
    return data;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

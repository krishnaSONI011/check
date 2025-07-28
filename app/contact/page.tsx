import React from "react";
import { fetchAPI } from "@/lib/fetch-api";
import ContactForm from "@/components/Contact/ContactForm";
import NotFound from "@/components/NotFound";

export const metadata = {
  title: "Contact",
};

export default async function Contact() {
  const data: any[] = await getData();
  if (!data) {
    return <NotFound />;
  }
  return <ContactForm data={data} />;
}

async function getData() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/global`;
    const urlParamsObject = {
      populate: ["contact.phone"],
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    const data = await responseData.data;
    return data;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
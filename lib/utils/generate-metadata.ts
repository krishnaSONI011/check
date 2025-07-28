import { Metadata } from "next";
import { StaticPageMetadata } from "../types/seo-types";

export const generateStaticMetadata = (
  metadata: StaticPageMetadata
): Metadata => {
  return {
    title: `${metadata.title} | Your Site Name`,
    description: metadata.description,
    keywords: metadata.keywords?.join(", "),
    alternates: {
      canonical: metadata.canonicalUrl,
    },
    robots: metadata.robots || {
      index: true,
      follow: true,
    },
    openGraph: {
      title: metadata.openGraph?.title || metadata.title,
      description: metadata.openGraph?.description || metadata.description,
      url: metadata.openGraph?.url || metadata.canonicalUrl,
      siteName: metadata.openGraph?.siteName || "Your Site Name",
      images: metadata.openGraph?.images,
      locale: "en_US",
      type: metadata.openGraph?.type || "website",
      publishedTime: metadata.openGraph?.publishedTime,
      modifiedTime: metadata.openGraph?.modifiedTime,
    },
    twitter: {
      card: metadata.twitter?.card || "summary_large_image",
      site: metadata.twitter?.site || "@yourhandle",
      creator: metadata.twitter?.creator || "@yourhandle",
      title: metadata.twitter?.title || metadata.title,
      description: metadata.twitter?.description || metadata.description,
      images: metadata.twitter?.images,
    },
  };
};
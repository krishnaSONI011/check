export type StaticPageMetadata = {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    type?: "website" | "article";
    url?: string;
    title?: string;
    description?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }[];
    siteName?: string;
    publishedTime?: string;
    modifiedTime?: string;
  };
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player";
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    images?: {
      url: string;
      alt?: string;
    }[];
  };
  canonicalUrl?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
  };
};
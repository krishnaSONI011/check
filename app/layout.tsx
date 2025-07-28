import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { fetchAPI } from "@/lib/fetch-api";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

 export const metadata: Metadata = {
//   title: "Threeacross",
//   description: "Three Across",
//   icons: {
//     icon: "/images/logo/3Across.png",
//     apple: "public/images/logo/3Across.png",
//     shortcut: "public/images/logo/3Across.png",
//   },
title: {
  default: 'TheThreeAcross | Expert Hiring Solutions for Employers & Job Seekers',
  template: '%s | TheThreeAcross',
},
icons: {
      icon: "/images/logo/3Across.png",
      apple: "public/images/logo/3Across.png",
      shortcut: "public/images/logo/3Across.png",
    },
description:
  'thethreeacross is a next-gen RPO partner helping businesses scale recruitment through AI-powered hiring, flexible talent models, and data-driven results. Discover better hiring today.',
openGraph: {
  title: 'TheThreeAcross |',
  description: 'Grow your brand with SEO, content, and performance marketing strategies.',
  url: 'https://www.thethreeacross.com/',
  siteName: 'TheThreeAcross',
  images: [
    {
      url: 'https://www.thethreeacross.com/images/logo/3Across.png',
      width: 1200,
      height: 630,
      alt: 'TheThreeAcross_logo',
    },
  ],
  locale: 'en_US',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'TheThreeAcross | Expert Hiring Solutions for Employers & Job Seekers',
  description: 'thethreeacross is a next-gen RPO partner helping businesses scale recruitment through AI-powered hiring, flexible talent models, and data-driven results. Discover better hiring today.',
  images: ['https://www.thethreeacross.com/images/logo/3Across.png'],
},
alternates: {
  canonical: 'https://www.thethreeacross.com/',
},

 };


async function getGlobal() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!token) {
      throw new Error("The Strapi API Token environment variable is not set.");
    }

    const path = `/global`;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const urlParamsObject = {
      populate: [
        "metadata.shareImage",
        "favicon",
        "navbar.links",
        "navbar.navbarLogo.logoImg",
        "navbar.navbarLogoBlack.logoImg",
        "footer.footerLogo.logoImg",
        "footer.menuLinks",
        "footer.legalLinks",
        "footer.socialLinks",
        "submenu.heading",
        "submenu.items",
      ],
    };

    const response = await fetchAPI(path, urlParamsObject, options);

    return response;
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
}

// export async function generateMetadata() {
//   const meta = await getGlobal();
//   if (!meta) return FALLBACK_SEO;
//   const { metadata, favicon } = meta.data.attributes;
//   const { url } = favicon.data.attributes;

//   return {
//     title: metadata.metaTitle,
//     description: metadata.metaDescription,
//     icons: {
//       icon: [new URL(url, getStrapiURL())],
//     },
//   };
// }

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Navbar />

        <main className="dark:bg-black dark:text-gray-100 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
      <GoogleAnalytics gaId="G-MR5VRXK4BS" />
    </html>
  );
}

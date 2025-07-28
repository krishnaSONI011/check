import AboutSection from "@/components/AboutSection/AboutSection";
import TeamMembers from "@/components/AboutSection/TeamMembers";
import FAQ from "@/components/FAQ";
import { fetchAPI } from "@/lib/fetch-api";
import { StaticPageMetadata } from "@/lib/types/seo-types";
import { generateStaticMetadata } from "@/lib/utils/generate-metadata";
import { Metadata } from "next";
import React from "react";




export const metadata: Metadata = {
  //   title: "Threeacross",
  //   description: "Three Across",
  //   icons: {
  //     icon: "/images/logo/3Across.png",
  //     apple: "public/images/logo/3Across.png",
  //     shortcut: "public/images/logo/3Across.png",
  //   },
  title: "About us",
  icons: {
        icon: "/images/logo/3Across.png",
        apple: "public/images/logo/3Across.png",
        shortcut: "public/images/logo/3Across.png",
      },
  
  alternates: {
    canonical: 'https://www.thethreeacross.com/about',
  },
  
   };
  

// export const generateMetadata = (): Metadata => {
//   const metadata: StaticPageMetadata = {
//     title: "About Us",
//     description: "Learn about our company history, mission, and values",
//     // keywords: ["about", "company", "history", "mission"],
//     openGraph: {
//       images: [
//         {
//           url: "/images/about-og.jpg",
//           width: 1200,
//           height: 630,
//           alt: "About Our Company",
//         },
//       ],
//     },
//     canonicalUrl: "https://www.thethreeacross.com/about",
//   };

//   return generateStaticMetadata(metadata);
// };




const valuesData = [
  {
    id: 1,
    attributes: {
      name: "Integrity",
      short_desc:
        "We uphold the highest standards of honesty and transparency in all our interactions.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/reflect-vertical.svg", // You'll need to replace this with the actual icon path
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "Accountability",
      short_desc:
        "We are committed to delivering superior service and achieving outstanding results.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/chart-line-up.svg", // Replace with actual icon path
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      name: "Inclusivity",
      short_desc:
        "We value diversity and inclusion, recognizing that varied perspectives drive creativity and success.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/arrow-progress.svg", // Replace with actual icon path
          },
        },
      },
    },
  },
  {
    id: 4,
    attributes: {
      name: "Innovation",
      short_desc:
        "We embrace new technologies and innovative practices to stay ahead in the recruitment industry.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/microchip.svg", // Replace with actual icon path
          },
        },
      },
    },
  },
  {
    id: 5,
    attributes: {
      name: "Partnership",
      short_desc:
        "We believe in building long-term relationships based on trust and mutual respect.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/handshake.svg", // Replace with actual icon path
          },
        },
      },
    },
  },
];
const chooseData = [
  {
    id: 1,
    attributes: {
      name: "Expertise",
      short_desc:
        "Our team members and leaders are experts in their fields, ensuring a deep understanding of industry-specific needs.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/user-tie.svg", // You'll need to replace this with the actual icon path
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "Personalized Service",
      short_desc:
        "We offer customized recruitment solutions tailored to each client's unique requirements.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/handshake-blue.svg", // Replace with actual icon path
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      name: "Commitment to Quality",
      short_desc:
        "We provide the highest quality service, from initial consultation to final placement.",
      icon: {
        data: {
          attributes: {
            url: "/images/icons/file-check.svg", // Replace with actual icon path
          },
        },
      },
    },
  },
];

export default async function About() {
  const data = await getData();

  return (
    <div className="relative">
      <div
        className="bg-cover w-full  p-4 md:p-12 relative"
        style={{
          backgroundImage: `url('/images/services/services-bg.png')`,
        }}
      >
        {/* Gray overlay covering the entire background */}
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>

        <div className="text-center text-white pt-20 relative">
          <h1 className="font-bold text-3xl md:text-5xl">About Us</h1>
          {/* <p className="sm:text-sm md:text-lg">
            Embracing cutting-edge technology, we leverage innovative tools to
            ensure a best-in-class experience for our clients and candidates
            alike.
          </p> */}
          <section className="bg-black bg-opacity-50 rounded-lg mt-10">
            <div className="">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="lg:w-1/3 px-4 md:pr-16">
                  <h1 className="mt-10 md:mt-6 mb-3 text-lg md:text-5xl leading-tight text-white text-left md:pl-4">
                    Bringing <b className="text-[#009CC2]">Human</b> back to{" "}
                    <b className="text-[#009CC2]">HR</b>
                  </h1>
                </div>
                <div className="my-5 md:mx-5 bg-white h-1 w-72 md:h-72 md:w-1 md:rounded-lg lg:h-72" />
                <div className="w-full lg:w-2/3 px-4 md:pl-16 md:text-lg md:py-10 gap-4 flex flex-col text-xs p-6">
                  <p className="flex text-start">
                    At Three Across, we revolutionize recruitment norms,
                    reigniting the human touch in HR. Our approach goes beyond
                    traditional hierarchies, welcoming talent across all
                    organizational levels. Rooted in a unique threefold strategy
                    centered around people, our dedication is evident in
                    delivering a high-touch experience and forging meaningful
                    partnerships.
                  </p>
                  <p className="text-start">
                    In a landscape fixated on specific hierarchies, we adopt a
                    holistic recruitment strategy
                    <span className="text-[#009CC2]">
                      {" "}
                      spanning executive positions, foundational roles, and
                      specialized verticals.
                    </span>
                    Recognizing the importance of talent at every level, we
                    transcend conventional norms.
                  </p>
                  <p className="flex text-start">
                    Defying traditional practices, we restore the human touch to
                    HR. As your trusted talent partner, our commitment lies in
                    reshaping success through a comprehensive, threefold
                    methodology, placing people at the heart of every
                    initiative.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <AboutSection
        backgroundImage="/images/about/modern-equipped-computer-lab 1.png"
        overlayColor="bg-red-400 bg-opacity-50"
        title="Our Values"
        cardColumnsCss="grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
        valuesData={valuesData}
      />
      <section className="bg-white sm:mt-20 md:mt-10 lg:mt-10 mt-20">
        <div className="max-w-7xl mx-auto px-8 space-y-5">
          <h2 className="font-heading font-bold text-black text-4xl text-center">
            Our Leadership Team
          </h2>
          <div className="font text-gray-500 text-lg text-center">
            Our team comprises seasoned recruitment professionals with extensive
            industry experience. Each member brings a wealth of knowledge and a
            passion for matching the right talent with the right opportunities.{" "}
          </div>
          <TeamMembers data={data} />
        </div>
      </section>

      <div className="mt-8">
        <AboutSection
          backgroundImage="/images/about/image 25.png"
          overlayColor="bg-teal-700 bg-opacity-50"
          title="Why Choose Us?"
          cardColumnsCss="grid-cols-1 md:grid-cols-3"
          valuesData={chooseData}
        />
      </div>
      {data &&
        data.attributes &&
        data.attributes.about &&
        data.attributes.about.faq && (
          <FAQ faqData={data.attributes.about.faq} />
        )}
    </div>
  );
}

async function getData() {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/global`;
    const urlParamsObject = {
      populate: [
        "about.team_member",
        "about.content",
        "about.faq",
        "about.team_member.avatar",
        "about.linkedin_url",
      ],
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

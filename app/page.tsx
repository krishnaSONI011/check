import BlogSection from "@/components/BlogSection/BlogSection";
import ChatBubble from "@/components/Bubble/chatBubble";
import MainCarousel from "@/components/MainCarousel";
import NewsSection from "@/components/News/NewsSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Services from "@/components/services/Services";
import { Bubble } from "@typebot.io/nextjs";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Three Across",
//   description: "Three Across",
//   icons: {
//     icon: "/images/logo/3Across.png",
//     apple: "public/images/logo/3Across.png",
//     shortcut: "public/images/logo/3Across.png",
//   },
// };

export default function Home() {
  return (
    <div>
      <MainCarousel />
      <Services isHome={true} />
      <BlogSection />
      <Testimonials />
      <NewsSection />
      {/* <ChatBubble/> */}
    </div>
  );
}

"use client";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CTA from "./CTA/CTA";
import { cn } from "@/lib/utils";
import Social from "./Contact/Social";
import Image from "next/image";

const links = [
  { href: "/", text: "Home" },
  { href: "/careers", text: "Careers" },
  { href: "/about", text: "About Us" },
  { href: "/blog", text: "Blogs" },
  { href: "/servies", text: "Services" },
  { href: "/contact", text: "Contact Us" },
];

export default function Footer() {
  const path = usePathname();
  let isServicesOrContact = false;

  if (
    path.startsWith("/contact") ||
    path.startsWith("/about") ||
    path.startsWith("/careers") ||
    path.startsWith("/services")
  ) {
    isServicesOrContact = true;
  }
  const showCTA = !isServicesOrContact;
  return (
    <div className={cn("z-1 relative", !isServicesOrContact && "mt-20")}>
      {showCTA ? <CTA isFooterStatic={isServicesOrContact} /> : ""}

      <footer className="bg-[#0F172A]">
        <div className="bg-[#0F172A] px-4 sm:px-6 md:px-4 w-full lg:flex lg:items-center lg:justify-between lg:px-2 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl md:px-10 font-bold tracking-tight ml-4 lg:ml-10 text-white pt-10">
            Let&apos;s Connect!
          </h2>
          <div className="flex space-x-8 items-center mt-4 ml-4 lg:mr-20">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center py-2.5 border border-white text-sm font-medium rounded-md focus:outline-none ring-2 ring-transparent ring-offset-transparent appearance-none text-white bg-transparent focus:ring-white focus:ring-offset-white !px-6 !shadow-lg">
                <p className="lg:text-xl">Contact us</p>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="ml-8 my-8 lg:-ml-20 lg:my-20 flex flex-col  justify-evenly gap-4 md:flex-row items-start ">
            <div className="grid grid-cols-4 md:grid-cols-3  md:gap-3 ">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`text-white whitespace-nowrap text-sm lg:text-lg m-1   lg:mr-32 ${
                    link.href === "#" ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="mt-2 ">
              <div className="text-white">Follow Us</div>
              <div className="flex space-x-2 mt-2 lg:mt-2 ">
                <Social />
              </div>
            </div>

            <Link href="/" className="pl-3">
              <Image
                className="mt-2"
                src="/images/logo/3Across_white.png"
                alt={""}
                height={150}
                width={150}
              />
            </Link>
          </div>
          <div className="p-12 md:mx-10 border-t border-white pt-8 flex flex-col sm:flex-row justify-between">
            <div className="text-md text-center sm:text-start text-white mb-4 sm:mb-0">
              threeacross @ 2024. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-between gap-4">
              <Link href="/toc" className="text-white">
                Terms
              </Link>
              <Link href="/toc#privacy" className="text-white">
                Privacy
              </Link>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

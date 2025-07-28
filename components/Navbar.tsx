"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About Us",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/careers",
    text: "Careers",
  },
  {
    url: "/blog",
    text: "Blogs",
  },
  {
    url: "/contact",
    text: "Contact Us",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    const path = window.location.pathname;
    const isRootPath = path === "/";

    if (isRootPath) {
      window.addEventListener("scroll", handleScroll);
      setIsScrolled(window.scrollY > 0);
    } else {
      setIsScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-transparent -mt-14 ${
        isScrolled ? "bg-white pb-8  text-gray-600 shadow-xl rounded-b-lg" : ""
      }`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex text-white">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex text-black"
            >
              <Logo
                src={
                  isScrolled
                    ? "/images/logo/3Across.png"
                    : "/images/logo/3Across_white.png"
                }
              />
            </Link>
          </NavigationMenuItem>

          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className={`flex md:hidden h-5 w-5 text-white sm:text-black z-10 ${
                    isScrolled ? "text-black bg-gray-300 rounded" : ""
                  }`}
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="flex font-bold text-xl text-black justify-center">
                    <Logo src="/images/logo/3Across.png" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {links.map((route, i) => (
                    <Link
                      onClick={() => setIsOpen(false)}
                      rel="noreferrer noopener"
                      href={route.url}
                      className={`text-[17px] ${buttonVariants({
                        variant: "ghost",
                      })} 
                        "text-white"
                      } hover:border-b-2 hover:border-white`}
                      key={i}
                    >
                      {route.text}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          <nav className="hidden md:flex gap-2">
            {links.map((route, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.url}
                className={`text-[17px] px-8 ${
                  isScrolled ? "text-black" : "text-white"
                } hover:underline hover:underline-offset-4 hover:scale-105 transition-all duration-100 ${
                  pathname === route.url && "font-bold underline"
                }`}
                key={i}
              >
                {route.text}
              </Link>
            ))}
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

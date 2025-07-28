import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const metadata = {
  title: "CTA",
};


type Props = {
  isFooterStatic?: boolean
}
export default function CTA({isFooterStatic}: Props) {
  return (
    <div
      className={cn(
        " w-full top-0",
        isFooterStatic ? "relative" : "absolute -translate-y-full"
      )}
    >
      <Image
        width={100}
        height={100}
        src="/images/cta/Backlights.svg"
        alt=""
        className="mx-auto "
        style={{ position: "absolute", right: 0, top: 300, zIndex: 2 }}
      />
      <div
        className="bg-no-repeat bg-cover h-full w-full "
        style={{
          backgroundImage: `url('/images/cta/Vector 14.svg')`,
          backgroundSize: "cover",
          height: 400,
        }}
      />
    </div>
  );
}

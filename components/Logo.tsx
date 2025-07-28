import React from "react";
import Image from "next/image";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center p-2 pt-0">
      {src && (
        <div className="w-24  h-20 pt-8 sm:w-56 sm:h-28"> 
          <Image
            src={src}
            alt="logo"
            width={144}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      )}
      <div className="ml-2">{children}</div>
    </div>
  );
}
import Services from "@/components/services/Services";
import React from "react";

export const metadata = {
  title:"Services",
  alternates: {
    canonical: 'https://www.thethreeacross.com/about',
  },
};

export default function Page() {
  return (
    <div>
      <Services isHome={false} />
    </div>
  );
}

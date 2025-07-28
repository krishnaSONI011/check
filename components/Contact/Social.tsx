import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Social",
};

export default function Social() {
  return (
    <div>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-center space-x-3">
          <Link href="https://www.linkedin.com/company/threeacross/" passHref>
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </Link>
          <Link href="https://www.instagram.com/threeacrosspeople/" passHref>
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </Link>
          <Link href="https://x.com/3acrossindia" passHref>
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </Link>
        </div>
      </div>
    </div>
  );
}

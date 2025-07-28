"use client"
import { Bubble } from "@typebot.io/nextjs";
import React from "react";
import "./chat.css"

// export const metadata = {
//   title: "chatbubble",
// };

export default function ChatBubble() {
  return (
    <div>
      <Bubble
        
        theme={{
          button: {
            backgroundColor: "#0042DA",
            customIconSrc:
              "https://s3.typebot.io/public/workspaces/clyrawrnp002bpo3gd5wqw5o8/typebots/clyrb40tj00357fqua8jfhf5s/icon?v=1721361901266",
            size: "medium",
          },
        }}
        typebot="faq-8jfhf5s"
      />
    </div>
  );
}

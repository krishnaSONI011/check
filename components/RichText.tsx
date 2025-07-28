import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./RichText.css";


interface RichTextProps {
  data: {
    body: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  return (
    <section className="rich-text py-6 text-black">
      <Markdown
        className={"text-black reactMarkDown h2"}
        remarkPlugins={[remarkGfm]}
      >
        {data.body}
      </Markdown>
    </section>
  );
}

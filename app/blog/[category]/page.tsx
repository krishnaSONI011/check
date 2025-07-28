
import PageHeader from "@/components/PageHeader";
import PostList from "@/components/PostList";
import { fetchAPI } from "@/lib/fetch-api";
import { Metadata } from "next";

type Props = {
   params:{
    category:string;
   };
};

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {

  const title = await new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(`Blog ${params.category}`);
    },100);
  });
  return{
    title: `Category ${title}`,
  };
};



async function fetchPostsByCategory(filter: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      filters: {
        category: {
          slug: filter,
        },
      },
      populate: {
        cover: { fields: ["url"] },
        category: {
          populate: "*",
        },
        authorsBio: {
          populate: "*",
        },
      },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

export default async function CategoryRoute({params}:Props) {
  const filter = params.category;
  const { data } = await fetchPostsByCategory(filter);

  if (data.length === 0) return <div>Not Posts In this category</div>;

  const { name, description } = data[0]?.attributes.category.data.attributes;

  return (
    <div>
      <PageHeader heading={name} text={description} />
      <PostList data={data} />
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}

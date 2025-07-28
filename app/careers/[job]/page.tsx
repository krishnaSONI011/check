import React from "react";
import JobDetails from "@/components/Career/JobDetails";
import { fetchAPI } from "@/lib/fetch-api";
import { JobDescription } from "@/lib/types";
import { Metadata } from "next";



type Props = {
  params:{
    job: string,
  };
};

export const generateMetadata = async ({params,}:Props): Promise<Metadata> => {

  const title = await new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(`careers ${params.job}`);
    },100);
  });
  return{
    title: `Careers ${title}`,
  };
};


export default async function Page({ params }:Props) {
  const jobID = params.job;
  const data = await getData(parseInt(jobID));

  // console.log(data.attributes.requirements)
  const jobDescription = createJobDescription(data);
  return (
    <div>
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white">
          Join Us
        </h1>
        <p className=" text-lg text-center text-white">
          We are a community of passionate individuals who love to create and
          innovate. Join us and be a part of something amazing!
        </p>
      </div>
      <JobDetails jobDescription={jobDescription} />
    </div>
  );
}

async function getData(id: number) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/careers/${id}`;
    const urlParamsObject = {
      populate: [
        "job_summary",
        "job_summary.working_days",
        "requirements",
      ],
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);

    const data = await responseData.data;
    return data;
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

function createJobDescription(data: any): JobDescription {
  return {
    id: data.id,
    attributes: {
      title: data.attributes.title,
      field: data.attributes.field,
      createdAt: data.attributes.createdAt,
      updatedAt: data.attributes.updatedAt,
      publishedAt: data.attributes.publishedAt,
      job_summary: {
        id: data.attributes.job_summary.id,
        location: data.attributes.job_summary.location,
        job_type: data.attributes.job_summary.job_type,
        date_posted: data.attributes.job_summary.date_posted,
        experience: data.attributes.job_summary.experience,
        working_hour: data.attributes.job_summary.working_hour,
        vacancy: data.attributes.job_summary.vacancy,
        working_days: data.attributes.job_summary.working_days,
      },
      requirements: data.attributes.requirements
    },
  };
}

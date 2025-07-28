"use client";

import React, { useState } from "react";
import { Mail, MapPinned, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import sendEmail from "@/lib/sendMail";
import Social from "./Social";
import { ContactDetails } from "@/lib/types";
import NotFound from "../NotFound";

// export const metadata = {
//   title: "contactform",
// };

export default function ContactForm({ data }: any) {
  const { register, handleSubmit, formState, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  async function onSubmit(data: any) {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    const mailData: ContactDetails = data;
    try {
      await sendEmail(data, 'contact');
      setIsSuccess(true);
      reset();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }
  }

  const subjects = [
    "RPO",
    "Lateral Hiring",
    "Executive Search",
    "Others",
  ];
  if (!data || !data.attributes || !data.attributes.contact) {
    return <NotFound />;
  }

  return (
    <div
      className="bg-no-repeat bg-cover bg-center h-full w-full p-6 relative "
      style={{
        backgroundImage: `url('/images/career/career.svg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-red-400 bg-opacity-50"></div>

      <div className="relative z-10">
        <div className="relative max-w-screen-lg mx-auto text-center ">
          <h1 className="text-4xl font-bold text-white mt-20">Contact Us</h1>
          <p className="text-lg mt-4 text-white mb-0">
            Any question or remark ? Just write a message!
          </p>
        </div>

        <div className="max-w-screen-lg md:mx-auto md:p-5 bg-white mb-40 mt-10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 ">
            <div className="bg-gray-900 md:col-span-4 p-4 text-white rounded-lg flex text-center flex-col justify-between relative">
              <div>
                <div className="mt-4 text-2xl  font-regular  text-center">
                  Contact Information
                </div>
                <div className="text-sm pt-2">
                  Say something to start a live chat!
                </div>
              </div>

              <div className="flex justify-between flex-col gap-4 lg:mt-20">
                <div className="flex items-center mt-5 gap-5 flex-col lg:flex-row">
                  <Phone color="#ffffff" />
                  <span className="text-sm">
                    {data.attributes.contact.phone}
                  </span>
                </div>

                <div className="flex items-center mt-5 gap-5 flex-col lg:flex-row">
                  <Mail color="#ffffff" />
                  <a
                    href={`mailto:${data.attributes.contact.email}`}
                    className="text-sm"
                  >
                    {data.attributes.contact.email}
                  </a>
                </div>

                <div className="flex items-center mt-5 gap-2 flex-col lg:flex-row md:-ml-4">
                  <MapPinned color="#ffffff" className="md:w-20" />
                  <span className="text-sm text-justify">
                    {data.attributes.contact.address}
                  </span>
                </div>
              </div>
              <div className=" relative">
                <div className="md:absolute md:left-0  md:mt-14 mt-10  ">
                  <Social />
                </div>
              </div>

              {/* down img */}
              <div>
                <Image
                  src="/images/circle.png"
                  alt="imag"
                  height={45}
                  width={90}
                  className="absolute bottom-12 right-12 "
                />
                <Image
                  src="/images/ellipse.png"
                  alt="imag"
                  height={50}
                  width={111}
                  className="absolute bottom-0 right-0 "
                />
              </div>
            </div>
            <form
              className="md:col-span-8 p-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="block w-full border-b-2 border-gray-300 text-gray-400 rounded py-3 px-4 mb-3 focus:border-blue-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    pattern="[a-zA-Z]*"
                    required
                    {...register("fname", {
                      required: "First Name is required",
                    })}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="block w-full border-b-2 border-gray-300 text-gray-400 rounded py-3 px-4 mb-3 focus:border-blue-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    pattern="[a-zA-Z]*"
                    {...register("lname")}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email Address
                  </label>
                  <input
                    className="block w-full border-b-2 border-gray-300 text-gray-400 rounded py-3 px-4 mb-3 focus:border-blue-500"
                    id="grid-email"
                    type="email"
                    placeholder="********@*****.**"
                    required
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="grid-phone"
                  >
                    Phone
                  </label>
                  <input
                    className="block w-full border-b-2 border-gray-300 text-gray-400 rounded py-3 px-4 mb-3 focus:border-blue-500"
                    id="grid-phone"
                    type="number"
                    placeholder="+91***********"
                    required
                    {...register("phone", { required: "Phone is required" })}
                  />
                </div>
              </div>
              <label
                className="block uppercase tracking-wide text-black  text-xs font-bold mb-2"
                htmlFor="subject"
              >
                Which service can we help you with?{" "}
              </label>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 text-sm">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`subject-${index}`}
                      value={subject}
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      required
                    />
                    <label className="ml-2" htmlFor={`subject-${index}`}>
                      {subject}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                    htmlFor="grid-message"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="block w-full border-b-2 border-gray-300 text-gray-400 rounded py-3 px-4 mb-3 focus:border-blue-500"
                    required
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                </div>
                <div className="flex justify-end w-full px-3">
                  <button
                    className="shadow bg-black hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    {isLoading
                      ? "Sending..."
                      : isSuccess
                      ? "Message Sent"
                      : "Send Message"}
                  </button>
                </div>
                <Image
                  className="h-auto w-40 lg:w-48 lg:ml-80 lg:-mb-20 lg:-mt-6"
                  width={10}
                  height={10}
                  src={"/images/contact/letter_send 1.svg"}
                  alt={""}
                />
              </div>
            </form>
          </div>
        </div>
        {isError && <div>Error sending message. Please try again.</div>}
      </div>
    </div>
  );
}

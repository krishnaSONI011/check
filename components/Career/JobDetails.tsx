"use client";
import { JobDescription } from "@/lib/types";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaBook,
  FaClock,
  FaUsers,
} from "react-icons/fa";

import ApplicationForm from "./ApplicationForm";
import { postRenderer } from "../post-renderer";
import RichText from "../RichText";

interface ListSection {
  title: string;
  items: string[];
}

interface JobSummaryItem {
  key: string;
  content: string;
}
interface JobDetailsProps {
  jobDescription: JobDescription;
}

const getIcon = (key: string) => {
  switch (key) {
    case "Location":
      return <FaMapMarkerAlt className="w-8 h-8 text-gray-600" />;
    case "Job Type":
      return <FaBriefcase className="w-8 h-8 text-gray-600" />;
    case "Date Posted":
      return <FaCalendarAlt className="w-8 h-8 text-gray-600" />;
    case "Experience":
      return <FaBook className="w-8 h-8 text-gray-600" />;
    case "Working Hours":
      return <FaClock className="w-8 h-8 text-gray-600" />;
    case "Working Days":
      return <FaCalendarAlt className="w-8 h-8 text-gray-600" />;
    case "Vacancies":
      return <FaUsers className="w-8 h-8 text-gray-600" />;
    default:
      return null;
  }
};

const JobDetails: React.FC<JobDetailsProps> = ({ jobDescription }) => {
  const [showForm, setShowForm] = useState(false);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const details = jobDescription.attributes.job_summary;

  // console.log(jobDescription.attributes.requirements[0]);

  return (
    <div className="max-w-6xl mx-auto p-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-6">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-10 uppercase">
            {jobDescription.attributes.title}
          </h1>
          <div className="text-black  justify-start flex">
            {jobDescription.attributes.requirements.map(
              (section: any, index: number) => {
                return postRenderer(section, index);
              }
            )}
          </div>
        </div>

        <div>
          <div className="bg-gray-100 p-10 rounded-lg items-center justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-500 mb-10 mx-auto text-white px-12 py-4 rounded-md hover:bg-blue-600 flex items-center"
            >
              Apply Now
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Job Summary
            </h3>
            <div className="mb-10">
              <div className="mt-10">
                <div className="flex items-center ">
                  <div> {getIcon("Location")}</div>
                  <div>
                    <div className="text-gray-400 ml-2">Location</div>
                    <div className="ml-2">{details.location}</div>
                  </div>
                </div>
              </div>{" "}
              <div className="mt-10">
                <div className="flex items-center ">
                  <div> {getIcon("Job Type")}</div>
                  <div>
                    <div className="text-gray-400 ml-2">Job Type</div>
                    <div className="ml-2">{details.job_type}</div>
                  </div>
                </div>
              </div>{" "}
              <div className="mt-10">
                <div className="flex items-center ">
                  <div> {getIcon("Date Posted")}</div>
                  <div>
                    <div className="text-gray-400 ml-2">Date Posted</div>
                    <div className="ml-2">{details.date_posted}</div>
                  </div>
                </div>
              </div>{" "}
              <div className="mt-10">
                <div className="flex items-center ">
                  <div> {getIcon("Experience")}</div>
                  <div>
                    <div className="text-gray-400 ml-2">Experience</div>
                    <div className="ml-2">{details.experience}</div>
                  </div>
                </div>
              </div>{" "}
              <div className="mt-10">
                <div className="flex items-center ">
                  <div> {getIcon("Working Hours")}</div>
                  <div>
                    <div className="text-gray-400 ml-2">Working Hours</div>
                    <div className="ml-2">{details.working_hour}</div>
                  </div>
                </div>
              </div>{" "}
              <div className="mt-10">
                <div className="flex items-center ">
                  <div> {getIcon("Working Days")}</div>
                  <div>
                    <div className="text-gray-400 ml-2">Working Days</div>
                    <div className="ml-2">
                      Weekly: {details.working_days.weekly}
                    </div>
                    <div className="ml-2">
                      Weekends: {details.working_days.weekends}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center ">
                  <div> {getIcon("Vacancies")}</div>
                  <div>
                    <div className="text-gray-400 ml-2">Vacancies</div>
                    <div className="ml-2">{details.vacancy}</div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/careers" className="mb-10 underline">
              View all jobs
            </Link>
          </div>
        </div>
      </div>
      {showForm && (
        <ApplicationForm
          jobTitle={jobDescription.attributes.title}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default JobDetails;

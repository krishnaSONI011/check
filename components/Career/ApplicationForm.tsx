import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import sendEmail from "@/lib/sendMail";


export const metadata = {
  title: "Application Form",
};

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  applyingFor: string;
  resume: FileList;
};

interface ApplicationFormProps {
  jobTitle: string;
  onClose: () => void; // Add this line
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ jobTitle, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("applyingFor", data.applyingFor);

      if (data.resume[0]) {
        formData.append("resume", data.resume[0]);
      }

      await sendEmail(formData, "jobApplication");
      setIsSuccess(true);
      reset();
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-0">
      <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 p-4 sm:p-6">
          Please fill the details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-6">
          <div className="flex flex-wrap -mx-2 sm:-mx-3 mb-4 sm:mb-6">
            <div className="w-full sm:w-1/2 px-2 sm:px-3 mb-4 sm:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-1 sm:mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="block w-full border-b-2 border-gray-300 text-sm sm:text-base text-gray-400 rounded py-2 sm:py-3 px-3 sm:px-4 mb-2 sm:mb-3 focus:border-blue-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 sm:px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-1 sm:mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="block w-full border-b-2 border-gray-300 text-sm sm:text-base text-gray-400 rounded py-2 sm:py-3 px-3 sm:px-4 mb-2 sm:mb-3 focus:border-blue-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 sm:-mx-3 mb-4 sm:mb-6">
            <div className="w-full sm:w-1/2 px-2 sm:px-3 mb-4 sm:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-1 sm:mb-2"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                className="block w-full border-b-2 border-gray-300 text-sm sm:text-base text-gray-400 rounded py-2 sm:py-3 px-3 sm:px-4 mb-2 sm:mb-3 focus:border-blue-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
              {errors.email && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-2 sm:px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-1 sm:mb-2"
                htmlFor="grid-phone"
              >
                Phone
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                className="block w-full border-b-2 border-gray-300 text-sm sm:text-base text-gray-400 rounded py-2 sm:py-3 px-3 sm:px-4 mb-2 sm:mb-3 focus:border-blue-500"
                id="grid-phone"
                type="tel"
                placeholder="+1 (123) 456-7890"
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-xs sm:text-sm">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4 sm:mb-6">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-1 sm:mb-2"
              htmlFor="grid-applying-for"
            >
              Applying for
            </label>
            <input
              {...register("applyingFor")}
              className="block w-full border-b-2 border-gray-300 text-sm sm:text-base text-gray-400 rounded py-2 sm:py-3 px-3 sm:px-4 mb-2 sm:mb-3 focus:border-blue-500"
              id="grid-applying-for"
              type="text"
              value={jobTitle}
              readOnly
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-1 sm:mb-2"
              htmlFor="grid-resume"
            >
              Resume
            </label>
            <Input
              id="grid-resume"
              type="file"
              className="block w-full text-sm sm:text-base text-gray-400 py-2 px-3"
              {...register("resume", { required: "Resume is required" })}
            />
            {errors.resume && (
              <span className="text-red-500 text-xs sm:text-sm">
                {errors.resume.message}
              </span>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="shadow bg-gray-300 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-black text-sm sm:text-base font-bold py-2 px-4 sm:px-6 rounded"
              onClick={onClose} // Add this line
            >
              Cancel
            </button>
            <button
              type="submit"
              className="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white text-sm sm:text-base font-bold py-2 px-4 sm:px-6 rounded"
              disabled={isLoading}
            >
              {isLoading
                ? "Sending..."
                : isSuccess
                ? "Application Sent"
                : "Submit Application"}
            </button>
          </div>
          {isError && (
            <p className="text-red-500 text-sm mt-2">
              An error occurred. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;

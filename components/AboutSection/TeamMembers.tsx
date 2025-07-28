"use client";
import React, { useState } from "react";
import ReactModal from "react-modal";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/api-helpers";
import NotFound from "../NotFound";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";

export const metadata = {
  title: "Team Members",
};

type TeamMember = {
  name: string;
  designation: string;
  experience: string;
  linkedin_url: string;
  avatar: {
    data: {
      attributes: {
        url: string;
      };
    } | null;
  };
  bio?: string;
};

type TeamMembersProps = {
  data: {
    attributes: {
      about: {
        team_member: TeamMember[];
      };
    };
  };
};

export default function TeamMembers({ data }: TeamMembersProps) {
  const Modal = ReactModal as unknown as React.FC<ReactModal.Props>;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  if (!data || !data.attributes || !data.attributes.about) {
    return <NotFound />;
  }

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-16 md:m-10 m-4">
      {data.attributes.about.team_member.map((member: TeamMember) => (
        <div
          className="space-y-2 cursor-pointer"
          key={member.name}
          onClick={() => openModal(member)}
        >
          <Image
            width={140}
            height={140}
            alt=""
            src={
              member.avatar.data === null
                ? "/images/about/no-profile.png"
                : (getStrapiMedia(member.avatar.data.attributes.url) as string)
            }
            className="mx-auto rounded-full w-20 h-20 md:w-40 md:h-40"
          />
          <h5 className="font text-gray-500 md:text-lg text-sm text-center font-sans ">
            {member.designation || "No Designation"}
          </h5>
          <h3 className=" text-black md:text-2xl text-sm text-center font-bold">
            {member.name || "No Name"}
          </h3>

          <Link href={member.linkedin_url as string || ""}>
            <Image
              className="flex mx-auto"
              src={"/images/about/icons8-linkedin-48.png"}
              alt={""}
              width={30}
              height={30}
            ></Image>
          </Link>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Team Member Details"
        className="modal"
      >
        <div className="modal-content bg-white p-4 rounded-lg shadow-lg md:mx-auto md:w-2/3 md:my-auto md:mt-60 mt-20">
          <div className="modal-header flex justify-end">
            <button
              className="close-button text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <IoCloseCircleOutline size={24} />
            </button>
          </div>
          {selectedMember && (
            <div className="flex flex-col md:flex-row md:p-6">
              <div
                className="space-y-2 cursor-pointer w-full md:w-1/3"
                key={selectedMember.name}
                onClick={() => openModal(selectedMember)}
              >
                <Image
                  width={140}
                  height={140}
                  alt=""
                  src={
                    selectedMember.avatar.data === null
                      ? "/images/about/no-profile.png"
                      : (getStrapiMedia(
                          selectedMember.avatar.data.attributes.url
                        ) as string)
                  }
                  className="mx-auto rounded-full w-32 h-32 md:w-40 md:h-40"
                />
                <h5 className="font text-gray-500 text-lg text-center font-sans">
                  {selectedMember.designation || "No Designation"}
                </h5>
                <h3 className="text-black text-xl md:text-2xl text-center font-bold">
                  {selectedMember.name || "No Name"}
                </h3>
              </div>

              <p className="text-gray-500 w-full md:w-2/3 text-justify mt-4 md:mt-0">
                {selectedMember.experience || "No Experience"}
              </p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

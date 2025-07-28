type ContactDetails = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  subject:
    | "General Inquiry"
    | "Consultancy"
    | "Request for Contact"
    | "Meeting";
  message: string;
};

export type JobApplicationDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  applyingFor: string;
  resume: FileList;
};

interface JobOpening {
  id: number;
  title: string;
  experience: number;
  category: string;
}

interface JobDescription {
  id: number;
  attributes: {
    title: string;
    field: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    job_summary: {
      id: number;
      location: string;
      job_type: string;
      date_posted: string;
      experience: string;
      working_hour: string;
      vacancy: number;
      working_days: any;
    };
    requirements: any;
  };
}


export type { ContactDetails, JobOpening, JobDescription };

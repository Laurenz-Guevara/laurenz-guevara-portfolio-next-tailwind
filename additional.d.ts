interface Experience {
  experience: [Fields];
}

interface Fields {
  fields: ExperienceData;
}

interface ExperienceData {
  postTitle: string;
  thumbnail: Object | any;
  companyName: string;
  employmentDuration: string;
  role: string;
  roleDescription: string;
  roleDuties: Array<string>;
  technologyStackImages: Array<any>;
}

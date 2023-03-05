interface Experience {
  experience: [ExpFields];
}

interface ExpFields {
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

interface Portfolio {
  experience: [Fields];
}

interface Fields {
  fields: PortfolioData;
}

interface Portfolios {
  portfolios: [Portfolio];
}

interface Portfolio {
  fields: Fields;
}

interface Fields {
  description: string;
  fontFace: Array<Object>;
  hexColours: Array<string>;
  hexTheme: string;
  imagePreview: ImagePreview;
  slug: string;
  technologyStackImages: Array<Object>;
  title: string;
  file: File;
}

interface ImagePreview {
  fields: Fields;
}

interface File {
  contentType: string;
  details: Details;
  fileName: string;
  url: string;
}

interface Details {
  image: Image;
  size: number;
}

interface Image {
  width: number;
  height: number;
}

interface Ran {
  title: string;
}

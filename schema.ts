export type Employment = {
  from: string;
  to: string;
  title: string;
  institution: string;
  department: string | null;
  project: string | null;
  notes: string[];
};

export type Education = {
  degree: string;
  institution: string;
  field: string;
  year: number;
};

export type Resume = {
  name: string;
  tagline: string;
  email: string;
  officeAddress: string;
  links: Record<string, string>;
  employment: Employment[];
  education: Education[];
  naturalLangs: Record<string, string[]>;
  programmingLangs: Record<string, string[]>;
};

// Central place for links + nav. Edit these once and every component updates.
export const LINKS = {
  github: "https://github.com/hritikhassaniNU",
  linkedin: "https://www.linkedin.com/in/hritik-hassani/",
  email: "hassani.hritik@gmail.com",
  bio: "https://hritikhassani.bio.link/",
  // Set this to your résumé. Either the file in /public (default) or your
  // Google Drive direct link, e.g. https://drive.google.com/uc?export=download&id=FILE_ID
  resume: "https://drive.google.com/file/d/1_HMBrIqGwd9hyqeFlsxjLMb7pHX-BnH0/view?usp=sharing','_blank",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

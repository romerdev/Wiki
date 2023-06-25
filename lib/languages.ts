export interface Language {
  abbreviation: string;
  title: string;
  flag: string;
}

const languageObjects = [
  { abbreviation: "en", title: "English", flag: "gb" },
  { abbreviation: "nl", title: "Dutch", flag: "nl" },
  { abbreviation: "jp", title: "Japanese", flag: "jp" },
];

export default languageObjects;

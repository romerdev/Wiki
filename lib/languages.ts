export interface Language {
  abbreviation: string;
  title: string;
  flag: string;
}

const languageObjects = [
  { abbreviation: "en", title: "English", flag: "gb" },
  { abbreviation: "es", title: "Spanish", flag: "es" },
  { abbreviation: "ar", title: "Arabic", flag: "sa" },
  { abbreviation: "fr", title: "French", flag: "fr" },
  { abbreviation: "nl", title: "Dutch", flag: "nl" },
];

export default languageObjects;

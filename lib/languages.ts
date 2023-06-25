export interface Language {
  abbreviation: string;
  title: string;
  flag: string;
}

const languageObjects = [
  { abbreviation: "en", title: "English", flag: "gb" },
  { abbreviation: "nl", title: "Dutch", flag: "nl" },
  { abbreviation: "de", title: "German", flag: "de" },
  { abbreviation: "es", title: "Spanish", flag: "es" },
];

export default languageObjects;

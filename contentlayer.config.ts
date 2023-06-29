import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from "contentlayer/source-files";

interface WikiData {
  _raw: {
    flattenedPath: string;
  };
  languages?: string;
}

const Socials = defineNestedType(() => ({
  name: "Socials",
  fields: {
    twitter: { type: "string", format: "string" },
    instagram: { type: "string", format: "string" },
    facebook: { type: "string", format: "string" },
    tiktok: { type: "string", format: "string" },
    website: { type: "string", format: "string" },
    youtube: { type: "string", format: "string" },
    spotify: { type: "string", format: "string" },
    apple_music: { type: "string", format: "string" },
  },
}));

export const Wiki = defineDocumentType(() => ({
  name: "Wiki",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    intro: { type: "string", required: true },
    image: { type: "string", required: true },
    image_alt: { type: "string", required: true },
    biography: { type: "string", required: true },
    socials: {
      type: "nested",
      of: Socials,
      required: false,
    },
    languages: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (wiki: WikiData) => `/${wiki._raw.flattenedPath}`,
    },
    languageAbbreviations: {
      type: "list",
      resolve: (wiki: WikiData) => {
        if (wiki.languages) {
          return wiki.languages.split(", ").map((lang) => lang.trim());
        }
        return [];
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "wiki",
  documentTypes: [Wiki],
});

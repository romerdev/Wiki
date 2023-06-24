import { defineDocumentType, makeSource } from "contentlayer/source-files";

interface WikiData {
  _raw: {
    flattenedPath: string;
  };
}

export const Wiki = defineDocumentType(() => ({
  name: "Wiki",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    intro: { type: "string", required: true },
    image: { type: "string", required: true },
    image_alt: { type: "string", required: true },
    biography: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (wiki: WikiData) => `/${wiki._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "wiki",
  documentTypes: [Wiki],
});

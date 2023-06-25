import React from "react";

interface EditButtonProps {
  url: string;
}

const EditButton: React.FC<EditButtonProps> = ({ url }) => (
  <a
    className="icon-button"
    aria-label="Contribute to this page"
    href={`https://github.com/romerdev/Wiki/blob/main/wiki${url}.md`}
    target="_blank"
    title="Contribute to this page"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
    </svg>
  </a>
);

export default EditButton;

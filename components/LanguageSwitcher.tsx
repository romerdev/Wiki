"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import languageObjects, { Language } from "@/lib/languages";

const LanguageSwitcher = ({
  languages,
  url,
}: {
  languages: Array<{ abbreviation: string }>;
  url: string;
}) => {
  const getLanguageByAbbreviation = (
    abbreviation: string
  ): Language | undefined => {
    return languageObjects.find(
      (language: Language) => language.abbreviation === abbreviation
    );
  };

  const languageData = languages
    .map((language) => getLanguageByAbbreviation(language.abbreviation))
    .filter((language): language is Language => language !== undefined);

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className="icon-button"
        aria-label="Toggle the language switcher"
        title="Toggle the language switcher"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z" />
          <path
            fillRule="evenodd"
            d="M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z"
            clipRule="evenodd"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute end-0 z-10 mt-2 w-44 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-3 px-4 grid gap-y-2 font-medium text-sm">
            {languageData.map((language: Language) => (
              <Menu.Item key={language.abbreviation}>
                {({ active }) => {
                  const { abbreviation, title, flag } = language;
                  return (
                    <a
                      href={`/${abbreviation}/${url.split("/").pop()}`}
                      aria-label={`Change the language to ${title}`}
                      title={`Change the language to ${title}`}
                      className={`flex items-center underline-offset-2 gap-x-2  ${
                        active ? "underline" : ""
                      }`}
                    >
                      <Image
                        src={`/flags/${flag}.svg`}
                        width={24}
                        height={24}
                        className="h-4 w-6 object-cover rounded-sm ring-1 ring-black ring-opacity-10"
                        alt=""
                        aria-hidden="true"
                      />
                      <p>{title}</p>
                    </a>
                  );
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitcher;

"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import languageObjects, { Language } from "@/lib/languages";

const Header = ({
  title,
  parentTitle,
  parentLink,
  languages,
  contributePage,
}: {
  title: string;
  parentTitle?: string;
  parentLink?: string;
  languages: Array<{ abbreviation: string }>;
  contributePage: string;
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
    <header className="flex items-center xl:grid grid-cols-6 md:grid-cols-4 md:gap-x-12 lg:gap-x-24 max-w-screen-2xl mx-auto px-4 lg:px-24 mb-8 xl:mb-6 relative">
      <div className="col-span-2 md:col-span-1 absolute xl:relative left-1/2 xl:left-auto -translate-x-1/2 lg:transform-none">
        <a href="/" className="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 md:h-12 md:w-12"
            viewBox="0 4.39 24 15.23"
          >
            <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021a.228.228 0 0 1-.145-.051.15.15 0 0 1-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016a.255.255 0 0 1-.152-.045c-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"></path>{" "}
          </svg>
        </a>
      </div>
      <div className="col-span-2">
        <h1 className="font-bold text-2xl lg:text-4xl text-start xs:text-center xl:text-start">
          {title}
        </h1>
        {parentTitle && parentLink && (
          <p>
            Main page:{" "}
            <a href={parentLink} className="link-color">
              {parentTitle}
            </a>
          </p>
        )}
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-end gap-x-2 md:gap-x-3 ml-auto xl:ml-0">
        {languages.length > 0 && (
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-3 px-4 grid gap-y-2 font-medium text-sm">
                  {languageData.map((language: Language) => (
                    <Menu.Item key={language.abbreviation}>
                      {({ active }) => {
                        const { abbreviation, title, flag } = language;
                        return (
                          <a
                            href={`/${abbreviation}/${contributePage
                              .split("/")
                              .pop()}`}
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
        )}
        <a
          className="icon-button"
          aria-label="Contribute to this page"
          href={`https://github.com/romerdev/Wiki/blob/main/wiki${contributePage}.md`}
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
      </div>
    </header>
  );
};

export default Header;

"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import SocialLink from "@/components/socialLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="grid grid-cols-4 gap-x-12 lg:gap-x-24 max-w-screen-2xl mx-auto px-4 md:px-24 mb-6">
        <div className="col-span-1">
          <a
            href="/"
            className="icon-button"
            aria-label="Go back to the homepage"
            title="Go back to the homepage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="col-span-2">
          <h1 className="font-bold text-2xl lg:text-4xl text-center xl:text-start">
            Coldplay
          </h1>
        </div>
        <div className="col-span-1 flex justify-end gap-x-3">
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
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        aria-label="Change the language to English"
                        title="Change the language to English"
                        className={`flex items-center underline-offset-2 gap-x-2  ${
                          active ? "underline" : ""
                        }`}
                      >
                        <Image
                          src="/flags/gb.svg"
                          width={24}
                          height={24}
                          className="h-4 w-6 object-cover rounded-sm"
                          alt="Flag of England"
                          aria-hidden="true"
                        />
                        <p>English</p>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        aria-label="Change the language to Dutch"
                        title="Change the language to Dutch"
                        className={`flex items-center underline-offset-2 gap-x-2  ${
                          active ? "underline" : ""
                        }`}
                      >
                        <Image
                          src="/flags/nl.svg"
                          width={24}
                          height={24}
                          className="h-4 w-6 object-cover rounded-sm"
                          alt="Flag of The Netherlands"
                          aria-hidden="true"
                        />
                        <p>Dutch</p>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        aria-label="Change the language to German"
                        title="Change the language to German"
                        className={`flex items-center underline-offset-2 gap-x-2  ${
                          active ? "underline" : ""
                        }`}
                      >
                        <Image
                          src="/flags/de.svg"
                          width={24}
                          height={24}
                          className="h-4 w-6 object-cover rounded-sm"
                          alt="Flag of Germany"
                          aria-hidden="true"
                        />
                        <p>German</p>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button
            className="icon-button"
            aria-label="Contribute to this page"
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
          </button>
        </div>
      </header>
      <div className="md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-x-12 lg:gap-x-24 max-w-screen-2xl mx-auto px-4 md:px-24">
        <aside className="col-span-1 relative hidden xl:block">
          <div className="sticky top-6">
            <MainImage />
            <Socials />
          </div>
        </aside>
        <article className="col-span-2">
          <main className="text-lg grid gap-y-6 lg:max-w-xl xl:max-w-none xl:mx-auto">
            <p>
              Coldplay are a British rock band formed in London in 1997. They
              consist of vocalist and pianist Chris Martin, guitarist Jonny
              Buckland, bassist Guy Berryman, drummer Will Champion and creative
              director Phil Harvey. They met at University College London and
              began playing music together from 1997 to 1998, initially calling
              themselves Big Fat Noises and later Starfish.
            </p>
            <div className="md:hidden">
              <MainImage />
              <Biography />
              <Socials />
            </div>
            <p>
              After independently releasing an extended play, Safety (1998),
              Coldplay signed with Parlophone in 1999. The band&apos;s debut
              album, Parachutes (2000), included their breakthrough single
              &quot;Yellow&quot; and received a Brit Award for British Album of
              the Year, a Grammy Award for Best Alternative Music Album and a
              Mercury Prize nomination. Their second album, A Rush of Blood to
              the Head (2002), won the same accolades and included the single
              &quot;Clocks&quot;, which won a Grammy Award for Record of the
              Year. The band&apos;s third album, X&Y (2005), which completed
              what the band considered to be a trilogy, and their fourth album,
              Viva la Vida or Death and All His Friends (2008), were both
              nominated for a Grammy Award for Best Rock Album, with the latter
              winning; both albums were the best-selling of their respective
              years, topping the charts in over 30 countries. Viva la Vida was
              also nominated for Album of the Year, while its title track became
              the first single by a British group to simultaneously reach number
              one in the United Kingdom and United States in the 21st century.
            </p>
          </main>
        </article>
        <aside className="col-span-1 relative hidden md:block">
          <div className="sticky top-6">
            <MainImage className="xl:hidden" />
            <Biography />
            <Socials className="xl:hidden" />
          </div>
        </aside>
      </div>
    </>
  );
}

function Socials({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 mt-4 ${className}`}>
      <SocialLink url="https://www.coldplay.com/" type="website" />
      <SocialLink
        url="https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
        type="spotify"
      />
      <SocialLink
        url="https://music.apple.com/us/artist/coldplay/471744/"
        type="apple_music"
      />
      <SocialLink url="https://www.instagram.com/coldplay/" type="instagram" />

      <SocialLink
        url="https://www.youtube.com/user/ColdplayVEVO"
        type="youtube"
      />
    </div>
  );
}

function MainImage({ className = "" }) {
  return (
    <Image
      src="/coldplay.webp"
      width={500}
      height={500}
      priority
      className={`w-full aspect-square object-top object-cover rounded-lg mb-4 ${className}`}
      alt="Coldplay band members"
    />
  );
}

function Biography() {
  return (
    <div className="bg-accent-color rounded-lg py-8 px-4">
      <strong className="text-xl">Biography</strong>
      <div className="mt-4">
        <strong>Members</strong>
        <ul className="mb-2">
          <li>Chris Martin (vocalist, pianist)</li>
          <li>Jonny Buckland (guitarist)</li>
          <li>Guy Berryman (bassist)</li>
          <li>Will Champion (drummer)</li>
          <li>Phil Harvey (creative director)</li>
        </ul>
        <strong>Years active</strong>
        <p className="mb-2">1997-present (26 years)</p>
        <strong>Origin</strong>
        <p className="mb-2">Londen, England</p>
        <strong>Genres</strong>
        <p>
          Alternative rock &middot; Pop rock &middot; Post-Britpop &middot; Pop
        </p>
      </div>
    </div>
  );
}

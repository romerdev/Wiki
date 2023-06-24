import { Wiki, allWikis } from "contentlayer/generated";
import SocialLink from "@/components/socialLink";
import Header from "@/components/header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";

export const generateStaticParams = async () =>
  allWikis.map((wiki) => ({ slug: wiki._raw.flattenedPath.split("/") }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: Array<string> };
}) => {
  const wiki = allWikis.find(
    (wiki) => wiki._raw.flattenedPath === params.slug.join("/")
  );
  if (!wiki) {
    return {
      notFound: true,
    };
  }
  return { title: wiki.title };
};

const languages = [
  { abbreviation: "gb", title: "English" },
  { abbreviation: "fr", title: "French" },
  { abbreviation: "de", title: "German" },
  { abbreviation: "es", title: "Spanish" },
  { abbreviation: "nl", title: "Dutch" },
];

const WikiPage = ({ params }: { params: { slug: Array<string> } }) => {
  const wiki = allWikis.find(
    (wiki) => wiki._raw.flattenedPath === params.slug.join("/")
  );

  if (!wiki) {
    notFound();
  }

  const hasParent = wiki._raw.flattenedPath.split("/").length > 2;
  let parentWiki;

  if (hasParent) {
    parentWiki = allWikis.find(
      (wiki) => wiki._raw.flattenedPath === params.slug.slice(0, -1).join("/")
    );
  }

  return (
    <>
      <Header
        title={wiki.title}
        languages={languages}
        parentLink={parentWiki?.url}
        parentTitle={parentWiki?.title}
      />
      <div className="md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-x-12 lg:gap-x-24 max-w-screen-2xl mx-auto px-4 lg:px-24">
        <aside className="col-span-1 relative hidden xl:block">
          <div className="sticky top-6">
            <MainImage wiki={wiki} />
            <Socials />
          </div>
        </aside>
        <article className="col-span-2">
          <main className="text-lg grid gap-y-6 lg:max-w-xl xl:max-w-none xl:mx-auto">
            <p>{wiki.intro}</p>
            <div className="relative md:hidden">
              <div className="sm:w-52 sm:h-52 sm:absolute sm:right-0">
                <MainImage wiki={wiki} />
              </div>
              <div>
                <Biography wiki={wiki} />
                <div className="sm:absolute sm:right-0 sm:top-52 sm:w-52">
                  <Socials />
                </div>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: wiki.body.html }}
              className="grid gap-y-6"
            ></div>
          </main>
        </article>
        <aside className="col-span-1 relative hidden md:block">
          <div className="sticky top-6">
            <MainImage wiki={wiki} className="xl:hidden" />
            <Biography wiki={wiki} />
            <Socials className="xl:hidden" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default WikiPage;

function Socials({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 md:gap-3 mt-4 ${className}`}>
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

function MainImage({ className, wiki }: { className?: string; wiki: Wiki }) {
  return (
    <Image
      src={wiki.image}
      width={500}
      height={500}
      priority
      className={`w-full aspect-square object-top object-cover rounded-lg mb-4 ${className}`}
      alt={wiki.image_alt}
    />
  );
}

function Biography({ wiki }: { wiki: Wiki }) {
  return (
    <div className="bg-accent-color rounded-lg py-8 px-4">
      <strong className="text-xl">Biography</strong>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{
          __html: sanitize(
            marked.parse(wiki.biography, {
              headerIds: false,
              mangle: false,
            })
          ),
        }}
      ></div>
    </div>
  );
}

import { Wiki, allWikis } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import SocialLink from "@/components/SocialLink";
import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";
import { Spotify } from "react-spotify-embed";

const mdxComponents: MDXComponents = {
  Spotify: ({ link }) => <Spotify wide link={link as string} />,
  Quote: ({ children }) => (
    <q className="text-3xl lg:text-6xl lg:-mx-8 text-center">{children}</q>
  ),
};

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

  let metaTitle = wiki.title;

  if (wiki.url.includes("ar")) {
    metaTitle = wiki.title.split(" - ")[1] + " - " + wiki.title.split(" - ")[0];
  }

  const hasParent = wiki._raw.flattenedPath.split("/").length > 2;
  let parentWiki;

  if (hasParent) {
    parentWiki = allWikis.find(
      (wiki) => wiki._raw.flattenedPath === params.slug.slice(0, -1).join("/")
    );

    if (parentWiki) {
      metaTitle = `${wiki.title} - ${parentWiki.title}`;
    }
  }

  return {
    title: metaTitle + " | Wiki",
    description: wiki.intro,
    parentWiki,
    openGraph: {
      images: [wiki.image],
    },
  };
};

interface WikiPageProps {
  params: { slug: Array<string> };
}

const WikiPage: React.FC<WikiPageProps> = ({ params }) => {
  const wiki = allWikis.find(
    (wiki) => wiki._raw.flattenedPath === params.slug.join("/")
  );

  if (!wiki) notFound();

  const hasParent = wiki._raw.flattenedPath.split("/").length > 2;
  let parentWiki;

  if (hasParent) {
    parentWiki = allWikis.find(
      (wiki) => wiki._raw.flattenedPath === params.slug.slice(0, -1).join("/")
    );
  }

  const socialItems = wiki.socials || {};

  const languageAbbreviations: Array<string> = wiki.languages?.split(",") || [];
  const languages = languageAbbreviations.map((abbreviation: string) => ({
    abbreviation,
  }));

  let direction = "ltr";

  if (wiki.url.includes("ar")) {
    direction = "rtl";
  }

  const MDXContent = useMDXComponent(wiki.body.code);

  return (
    <div dir={direction}>
      <Header
        title={wiki.title}
        languages={languages}
        parentLink={parentWiki?.url}
        parentTitle={parentWiki?.title}
        contributePage={wiki.url}
      />
      <div className="md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-x-12 lg:gap-x-24 max-w-screen-2xl mx-auto px-4 lg:px-24">
        <aside className="col-span-1 relative hidden xl:block">
          <div className="sticky top-6">Table of Contents</div>
        </aside>
        <article className="col-span-2">
          <main className="grid gap-y-6 lg:max-w-xl xl:max-w-none xl:mx-auto text-xl">
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl xl:hidden">
                {wiki.title}
              </h1>
              {parentWiki?.title && parentWiki?.url && (
                <p>
                  Main page:{" "}
                  <a href={parentWiki.url} className="link-color">
                    {parentWiki.title}
                  </a>
                </p>
              )}
            </div>
            <p>{wiki.intro}</p>
            <div className="relative md:hidden">
              <div className="sm:w-52 sm:h-52 sm:absolute sm:end-0">
                <MainImage wiki={wiki} />
              </div>
              <div>
                <Biography wiki={wiki} />
                <div className="sm:absolute sm:end-0 sm:top-52 sm:w-52">
                  <Socials socialItems={socialItems} />
                </div>
              </div>
            </div>
            <div className="article-body">
              <MDXContent components={mdxComponents} />
            </div>
          </main>
        </article>
        <aside className="col-span-1 hidden md:block">
          <div>
            <MainImage wiki={wiki} />
            <Biography wiki={wiki} />
            <Socials socialItems={socialItems} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WikiPage;

function Socials({ socialItems }: { socialItems: Record<string, string> }) {
  const filteredSocials = socialItems
    ? Object.entries(socialItems).slice(0, -2)
    : [];

  if (filteredSocials.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 md:gap-3 mt-4 ">
      {filteredSocials.map(([platform, url]) => (
        <SocialLink key={platform} url={url} type={platform} />
      ))}
    </div>
  );
}

function MainImage({ wiki }: { wiki: Wiki }) {
  return (
    <Image
      src={wiki.image}
      width={500}
      height={500}
      priority
      className="w-full aspect-square object-top object-cover rounded-lg mb-4"
      alt={wiki.image_alt}
    />
  );
}

function Biography({ wiki }: { wiki: Wiki }) {
  return (
    <div
      className="bg-accent-color rounded-lg py-8 px-4 biography"
      dangerouslySetInnerHTML={{
        __html: sanitize(
          marked.parse(wiki.biography, {
            headerIds: false,
            mangle: false,
          })
        ),
      }}
    ></div>
  );
}

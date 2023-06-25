import { allWikis } from "contentlayer/generated";

interface Wiki {
  url: string;
  title: string;
}

export default function Home() {
  const wikisByLanguage: Record<string, Wiki[]> = allWikis.reduce(
    (acc: Record<string, Wiki[]>, wiki: Wiki) => {
      const lang = wiki.url.split("/")[1];
      if (!acc[lang]) {
        acc[lang] = [];
      }
      acc[lang].push(wiki);
      return acc;
    },
    {}
  );

  const sortedLanguages = Object.keys(wikisByLanguage).sort();

  return (
    <main className="max-w-screen-2xl mx-auto px-4 md:px-24 text-lg my-12">
      <h1 className="font-bold text-2xl">Go to the following articles:</h1>

      {sortedLanguages.map((lang) => (
        <div key={lang}>
          <h2 className="text-xl font-bold mt-6">{lang}</h2>
          {wikisByLanguage[lang].map((wiki, idx) => (
            <p key={idx}>
              <a href={wiki.url}>{wiki.title}</a>
            </p>
          ))}
        </div>
      ))}
    </main>
  );
}

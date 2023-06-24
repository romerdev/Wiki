import { allWikis } from "contentlayer/generated";

export default function Home() {
  const wikis = allWikis;
  return (
    <main className="max-w-screen-2xl mx-auto px-4 md:px-24 text-lg my-12">
      <h1 className="font-bold text-2xl">Go to the following article:</h1>

      {wikis.map((wiki: any, idx: any) => (
        <p key={idx}>
          <a href={wiki.url}>{wiki.title}</a>
        </p>
      ))}
    </main>
  );
}

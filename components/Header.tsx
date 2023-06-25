import EditButton from "./EditButton";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

interface HeaderProps {
  title: string;
  parentTitle?: string;
  parentLink?: string;
  languages: { abbreviation: string }[];
  contributePage: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  parentTitle,
  parentLink,
  languages,
  contributePage,
}) => (
  <header className="flex items-center xl:grid grid-cols-6 md:grid-cols-4 md:gap-x-12 lg:gap-x-24 max-w-screen-2xl mx-auto px-4 lg:px-24 mb-8 xl:mb-6 relative">
    <div className="col-span-2 md:col-span-1 absolute xl:relative left-1/2 xl:left-auto -translate-x-1/2 lg:transform-none">
      <a href="/" className="inline-block">
        <Logo />
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
    <div className="col-span-2 md:col-span-1 flex justify-end gap-x-2 md:gap-x-3 ms-auto xl:ms-0">
      {languages.length > 0 && (
        <LanguageSwitcher languages={languages} url={contributePage} />
      )}
      <EditButton url={contributePage} />
    </div>
  </header>
);

export default Header;

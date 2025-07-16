import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo-white.png";

const TopFooter = ({ pages, offices, linksList, setting, t }) => {
  return (
    <div
      className={`container grid md:grid-cols-2 ${
        pages?.length > 0 ? "xl:grid-cols-4" : "xl:grid-cols-3"
      } gap-8`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <img loading="lazy" src={logoImg} alt="Logo" className="w-42 lg:w-60" />
        <p>{t("footer.title")}</p>

        {offices?.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {offices?.map((link) => (
              <a
                href={link.map_link}
                key={link.id}
                target="_blank"
                className="h-14 relative"
              >
                <img
                  src={link.image}
                  alt={link.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-2 lg:gap-4 text-center">
        <h3 className="font-bold text-2xl">{t("footer.explore")}</h3>
        <ul className="space-y-1">
          {linksList.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-light-red transition">
                {t(link.name)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {pages?.length > 0 && (
        <div className="flex flex-col items-center gap-2 lg:gap-4 text-center">
          <h3 className="font-bold text-2xl">{t("footer.new_pages")}</h3>
          <ul className="space-y-1">
            {pages?.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/pages/${link.slug}`}
                  className="hover:text-light-red transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col items-center gap-2 lg:gap-4 text-center">
        <h3 className="font-bold text-2xl">{t("footer.lets_connect")}</h3>
        {setting?.email && (
          <p>
            {t("footer.email")}: {setting?.email}
          </p>
        )}
        {setting?.phone && (
          <p>
            {t("footer.phone")}: {setting?.phone}
          </p>
        )}
        {setting?.address && (
          <p>
            {t("footer.location")}: {setting?.address}
          </p>
        )}

        <Link to={"/contact-us"} className="mainBtn light">
          {t("footer.button")}
        </Link>
      </div>
    </div>
  );
};

export default TopFooter;

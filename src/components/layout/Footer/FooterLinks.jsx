import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterLinks = ({ title, links }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <h3 className="footerLinksTitle">{t(title)}</h3>

      <ul className="space-y-2 text-lg text-start">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.link} className="hover:text-gray-400 transition">
              {t(link.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

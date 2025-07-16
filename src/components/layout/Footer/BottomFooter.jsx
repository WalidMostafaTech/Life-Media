import { FaBehance, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const BottomFooter = ({ setting, t }) => {
  return (
        <div className="container grid lg:grid-cols-3 gap-4 mt-8">
          <p className="text-start">{t("footer.rights")}</p>

          <div className="flex justify-center flex-wrap gap-4">
            {setting?.whatsapp && (
              <a
                href={`https://wa.me/${setting?.whatsapp}`}
                target="_blank"
                className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
              >
                <FaWhatsapp />
              </a>
            )}
            {setting?.instagram && (
              <a
                href={setting?.instagram}
                target="_blank"
                className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
              >
                <FaInstagram />
              </a>
            )}
            {setting?.facebook && (
              <a
                href={setting?.facebook}
                target="_blank"
                className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
              >
                <FaFacebook />
              </a>
            )}
            {setting?.behance && (
              <a
                href={setting?.behance}
                target="_blank"
                className="w-10 h-10 rounded-full border flex items-center justify-center text-2xl hover:text-light-red transition"
              >
                <FaBehance />
              </a>
            )}
          </div>

          <div className="text-end">
            <a href="#!" className="hover:text-light-red transition">
              {t("footer.terms")}
            </a>{" "}
            |{" "}
            <a href="#!" className="hover:text-light-red transition">
              {t("footer.privacy")}
            </a>
          </div>
        </div>
  );
}

export default BottomFooter;

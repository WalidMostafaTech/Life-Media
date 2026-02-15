import { useSelector } from "react-redux";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const FixedSection = () => {
  const { setting } = useSelector((state) => state.setting);
  const { t } = useTranslation();

  const list = [
    {
      id: 1,
      title: t("phone"),
      link:
        setting?.phone?.length > 0
          ? `tel:${(setting?.phone || "").replace(/\s/g, "")}`
          : null,
      icon: <FaPhoneAlt />,
      color: "#215274",
    },
    {
      id: 2,
      title: t("whatsapp"),
      link:
        setting?.whatsapp?.length > 0
          ? `https://wa.me/${(setting?.whatsapp || "").replace(/\s/g, "")}`
          : null,
      icon: <FaWhatsapp />,
      color: "#25D366",
    },
  ];

  return (
    <section className="fixed end-2 bottom-1/6 z-40">
      <div className="flex flex-col items-end gap-2">
        {list
          .filter((c) => c.link)
          .map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              style={{ backgroundColor: `${item.color}` }}
              className="text-white text-2xl bg-gradient-to-t from-dark-red to-light-gray p-2 rounded-xl cursor-pointer
            hover:brightness-80 hover:scale-110 transition"
            >
              {item.icon}
            </a>
          ))}
      </div>
    </section>
  );
};

export default FixedSection;

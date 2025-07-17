import { useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../../store/setting/settingAction";

const ContactBtns = ({ isVisible }) => {
  const { setting } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSetting());
  }, [dispatch]);

  return (
    <div
      className={`fixed bottom-0 start-4 z-50 flex flex-col gap-4 transition-all duration-300 ${
        isVisible
          ? "opacity-100 bottom-4 lg:bottom-24"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={`tel:${setting.phone}`}
        title={setting.phone}
        target="_blank"
        className="text-white text-3xl bg-gradient-to-t from-dark-red to-light-gray p-2 rounded-xl cursor-pointer"
      >
        <FaPhoneAlt />
      </a>
      <a
        href={`https://wa.me/${setting.whatsapp}`}
        title={setting.whatsapp}
        target="_blank"
        className="text-white text-3xl bg-gradient-to-t from-dark-red to-light-gray p-2 rounded-xl cursor-pointer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactBtns;

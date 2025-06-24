import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { contactUsAct } from "../../../../store/contact-us/contactUsAction";
import { GoArrowUpRight } from "react-icons/go";

const ContactUS = () => {
  const { loading } = useSelector((state) => state.contactUs);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = t("contact.errors.full_name");
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = t("contact.errors.email");
    if (!formData.phone.match(/^\+?[0-9]{9,15}$/))
      newErrors.phone = t("contact.errors.phone");
    if (!formData.service) newErrors.service = t("contact.errors.service");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const form = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.service,
      };
      dispatch(contactUsAct(form));
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
      });
    }
  };

  return (
    <section id="About" className="container sectionPadding">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            {t("contact.title.line1")}
            <br />
            {t("contact.title.line2")}
            <br />
            {t("contact.title.line3")}
          </h2>
          <p className="text-gray-300">{t("contact.subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`bg-dark-gray p-8 rounded-lg space-y-4`}
        >
          <div>
            <label className="block mb-1">{t("contact.full_name")}</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t("contact.full_name_placeholder")}
              className={`w-full p-4 rounded-lg text-lg bg-light-gray border-2 ${
                errors.fullName ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.fullName && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1">{t("contact.email")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.email_placeholder")}
              className={`w-full p-4 rounded-lg text-lg bg-light-gray border-2 ${
                errors.email ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.email && (
              <p className="text-dark-red font-semibold mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">{t("contact.phone")}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact.phone_placeholder")}
              className={`w-full p-4 rounded-lg text-lg bg-light-gray border-2 ${
                errors.phone ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.phone && (
              <p className="text-dark-red font-semibold mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">{t("contact.service")}</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-4 rounded-lg text-lg bg-light-gray border-2 cursor-pointer ${
                errors.service ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            >
              <option value="">{t("contact.choose_service")}</option>
              <option value="web">{t("contact.services.web")}</option>
              <option value="design">{t("contact.services.design")}</option>
              <option value="seo">{t("contact.services.seo")}</option>
            </select>
            {errors.service && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.service}
              </p>
            )}
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`mainBtn w-full relative flex items-center justify-center`}
          >
            {loading ? (
              <span className="loader border-2 border-white border-t-transparent rounded-full w-6 h-6 animate-spin"></span>
            ) : (
              <>
                {t("contact.submit_btn")} <GoArrowUpRight />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUS;

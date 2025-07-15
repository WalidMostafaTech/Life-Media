import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { contactUsAct } from "../../../store/contact-us/contactUsAction";
import { GoArrowUpRight } from "react-icons/go";
import ReCAPTCHA from "react-google-recaptcha";
import { getGovernorates } from "../../../store/governorates/governoratesAction";

const ContactUsSection = () => {
  const { loading, error } = useSelector((state) => state.contactUs);
  const { governorates } = useSelector((state) => state.governorates);
  const { setting } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getGovernorates());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    governorate: "",
    old_social_media_experiences: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = t("contact.errors.full_name");
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = t("contact.errors.email");
    if (!formData.phone.match(/^\+?[0-9]{9,15}$/))
      newErrors.phone = t("contact.errors.phone");
    if (!formData.service) newErrors.service = t("contact.errors.service");
    if (!formData.governorate)
      newErrors.governorate = t("contact.errors.governorate");
    if (formData.old_social_media_experiences === "")
      newErrors.old_social_media_experiences = t(
        "contact.errors.old_experience"
      );
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();

    if (setting?.recaptcha_enabled && !captchaValue) {
      setCaptchaError(t("contact.errors.recaptcha"));
      return;
    } else {
      setCaptchaError("");
    }

    if (isValid && (captchaValue || !setting?.recaptcha_enabled)) {
      const form = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.service,
        governorate_id: formData.governorate,
        old_social_media_experiences: parseInt(
          formData.old_social_media_experiences
        ),
        ...(setting?.recaptcha_enabled && { recaptcha: captchaValue }),
      };

      try {
        await dispatch(contactUsAct(form)).unwrap();
        console.log(form);
        setSuccessMessage(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          governorate: "",
          old_social_media_experiences: "",
        });
        setCaptchaValue(null);

        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
      } catch (err) {
        console.error("Submission error:", error || err);
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 5000);
      }
    }
  };

  return (
    <article id="Contact" className="container sectionPadding">
      <section className="grid lg:grid-cols-2 gap-10">
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
          className="bg-light-gray p-8 rounded-3xl space-y-4"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-1">{t("contact.full_name")}</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t("contact.full_name_placeholder")}
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 ${
                errors.fullName ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.fullName && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">{t("contact.email")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.email_placeholder")}
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 ${
                errors.email ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.email && (
              <p className="text-dark-red font-semibold mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1">{t("contact.phone")}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact.phone_placeholder")}
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 ${
                errors.phone ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            />
            {errors.phone && (
              <p className="text-dark-red font-semibold mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label className="block mb-1">{t("contact.service")}</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 cursor-pointer ${
                errors.service ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            >
              <option value="">{t("contact.choose_service")}</option>
              {Object.entries(setting?.subject_options || {}).map(
                ([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                )
              )}
            </select>
            {errors.service && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.service}
              </p>
            )}
          </div>

          {/* Governorate */}
          <div>
            <label className="block mb-1">{t("contact.governorate")}</label>
            <select
              name="governorate"
              value={formData.governorate}
              onChange={handleChange}
              className={`w-full p-4 rounded-lg text-lg bg-dark-gray border-2 cursor-pointer ${
                errors.governorate ? "border-dark-red" : "border-transparent"
              } focus:outline-none text-white`}
            >
              <option value="">{t("contact.choose_governorate")}</option>
              {governorates?.map((gov) => (
                <option key={gov.id} value={gov.id}>
                  {gov.name}
                </option>
              ))}
            </select>
            {errors.governorate && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.governorate}
              </p>
            )}
          </div>

          {/* Radio Buttons */}
          <div>
            <label className="block mb-2 font-medium">
              {t("contact.old_experience")}
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="old_social_media_experiences"
                  value="1"
                  checked={formData.old_social_media_experiences === "1"}
                  onChange={handleChange}
                />
                {t("contact.yes")}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="old_social_media_experiences"
                  value="0"
                  checked={formData.old_social_media_experiences === "0"}
                  onChange={handleChange}
                />
                {t("contact.no")}
              </label>
            </div>
            {errors.old_social_media_experiences && (
              <p className="text-dark-red font-semibold mt-1">
                {errors.old_social_media_experiences}
              </p>
            )}
          </div>

          {/* Recaptcha */}
          {setting?.recaptcha_enabled && (
            <div className="flex flex-col items-center">
              <ReCAPTCHA
                sitekey={setting?.recaptcha_site_key}
                onChange={(value) => {
                  setCaptchaValue(value);
                  setCaptchaError("");
                }}
                theme="dark"
              />
              {captchaError && (
                <p className="text-dark-red font-semibold mt-1">
                  {captchaError}
                </p>
              )}
            </div>
          )}

          {/* Messages */}
          <div
            className={`w-full text-center text-xl bg-green-600 text-white font-semibold rounded-full overflow-hidden
            duration-500 ease-in-out ${
              successMessage
                ? "max-h-[100px] py-2 px-4 opacity-100"
                : "max-h-0 opacity-0 m-0"
            }`}
          >
            {t("contact.success_message")}
          </div>

          <div
            className={`w-full text-center text-xl bg-light-red text-white font-semibold rounded-full overflow-hidden
            duration-500 ease-in-out ${
              errorMessage
                ? "max-h-[100px] py-2 px-4 opacity-100"
                : "max-h-0 opacity-0 m-0"
            }`}
          >
            {t("contact.error_message")}
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="mainBtn w-full relative flex items-center justify-center"
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
      </section>
    </article>
  );
};

export default ContactUsSection;

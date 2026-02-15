import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { GoArrowUpRight } from "react-icons/go";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import { sendContact } from "../../api/mainServices";

const ContactUsSection = () => {
  const { setting, governorates } = useSelector((state) => state.setting);
  const { t } = useTranslation();

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
  const [feedback, setFeedback] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = t("contact.errors.full_name");

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.errors.email");
    }

    if (!formData.phone.match(/^\+?[0-9]{9,15}$/))
      newErrors.phone = t("contact.errors.phone");

    if (!formData.service) newErrors.service = t("contact.errors.service");

    if (!formData.governorate)
      newErrors.governorate = t("contact.errors.governorate");

    if (formData.old_social_media_experiences === "")
      newErrors.old_social_media_experiences = t(
        "contact.errors.old_experience",
      );

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: sendContact,
    onSuccess: () => {
      setFeedback({
        type: "success",
        message: t("contact.success_message"),
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        governorate: "",
        old_social_media_experiences: "",
      });

      setCaptchaValue(null);
      setErrors({});
    },
    onError: () => {
      setFeedback({
        type: "error",
        message: t("contact.error_message"),
      });
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (setting?.recaptcha_enabled && !captchaValue) {
      setCaptchaError(t("contact.errors.recaptcha"));
      return;
    } else {
      setCaptchaError("");
    }

    if (!isValid) return;

    setFeedback(null);

    const form = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.service,
      governorate_id: formData.governorate,
      old_social_media_experiences: parseInt(
        formData.old_social_media_experiences,
      ),
      ...(setting?.recaptcha_enabled && { recaptcha: captchaValue }),
    };

    mutate(form);
  };

  return (
    <article id="Contact" className="container sectionPadding">
      <section className="grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 lg:max-w-xs">
            {t("contact.title1")}
          </h2>

          <p className="text-gray-300">{t("contact.subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-light-gray p-4 lg:p-8 rounded-xl lg:rounded-3xl space-y-4"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="inline-block mb-1">
              {t("contact.full_name")}
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t("contact.full_name_placeholder")}
              className={`w-full p-2 rounded-lg bg-dark-gray border-2 ${
                errors.fullName ? "border-light-red" : "border-transparent"
              } focus:outline-none focus:border-gray-500 text-white duration-200`}
            />
            {errors.fullName && (
              <p className="text-light-red mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="inline-block mb-1">
              {t("contact.email")}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.email_placeholder")}
              className={`w-full p-2 rounded-lg bg-dark-gray border-2 ${
                errors.email ? "border-light-red" : "border-transparent"
              } focus:outline-none focus:border-gray-500 text-white duration-200`}
            />
            {errors.email && (
              <p className="text-light-red mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="inline-block mb-1">
              {t("contact.phone")}
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact.phone_placeholder")}
              className={`w-full p-2 rounded-lg bg-dark-gray border-2 ${
                errors.phone ? "border-light-red" : "border-transparent"
              } focus:outline-none focus:border-gray-500 text-white duration-200`}
            />
            {errors.phone && (
              <p className="text-light-red mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="inline-block mb-1">
              {t("contact.service")}
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg bg-dark-gray border-2 ${
                errors.service ? "border-light-red" : "border-transparent"
              } focus:outline-none focus:border-gray-500 text-white duration-200`}
            >
              <option value="">{t("contact.choose_service")}</option>
              {Object.entries(setting?.subject_options || {}).map(
                ([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ),
              )}
            </select>
            {errors.service && (
              <p className="text-light-red mt-1">{errors.service}</p>
            )}
          </div>

          {/* Governorate */}
          <div>
            <label htmlFor="governorate" className="inline-block mb-1">
              {t("contact.governorate")}
            </label>
            <select
              name="governorate"
              id="governorate"
              value={formData.governorate}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg bg-dark-gray border-2 ${
                errors.governorate ? "border-light-red" : "border-transparent"
              } focus:outline-none focus:border-gray-500 text-white duration-200`}
            >
              <option value="">{t("contact.choose_governorate")}</option>
              {governorates?.map((gov) => (
                <option key={gov.id} value={gov.id}>
                  {gov.name}
                </option>
              ))}
            </select>
            {errors.governorate && (
              <p className="text-light-red mt-1">{errors.governorate}</p>
            )}
          </div>

          {/* Radio Buttons */}
          <div>
            <label className="inline-block mb-1">
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
              <p className="text-light-red mt-1">
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
                <p className="text-light-red mt-1">{captchaError}</p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            disabled={isPending}
            type="submit"
            className="mainBtn w-full relative flex items-center justify-center"
          >
            {isPending ? (
              <span className="loader border-2 border-white border-t-transparent rounded-full w-6 h-6 animate-spin"></span>
            ) : (
              <>
                {t("contact.submit_btn")} <GoArrowUpRight />
              </>
            )}
          </button>

          {/* Feedback */}
          {feedback && (
            <div
              className={`w-full text-center font-semibold rounded-lg p-2 border ${
                feedback.type === "success"
                  ? "bg-green-600/40 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {feedback.message}
            </div>
          )}
        </form>
      </section>
    </article>
  );
};

export default ContactUsSection;

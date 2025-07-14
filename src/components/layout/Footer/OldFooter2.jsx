import logoImg from "../../../assets/images/logo-white.png";
import LoadingSection from "../Loading/LoadingSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSetting } from "../../../store/setting/settingAction";
import { useTranslation } from "react-i18next";
import footerImg from "../../../assets/images/Footer.jpg";
import FooterLinks from "./FooterLinks";
import { FooterList } from "../../../data/data";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { setting, loading } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSetting());
  }, [dispatch]);

  if (loading) {
    return <LoadingSection />;
  }

  return (
    <footer
      style={{ backgroundImage: `url(${footerImg})` }}
      className="bg-dark-red bg-cover bg-no-repeat"
    >
      <div className="bg-light-red/10 sectionPadding">
        <div className="container">
          <img
            loading="lazy"
            src={logoImg}
            alt="Logo"
            className="mx-auto w-42 lg:w-60"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 py-4 lg:py-8">
            {FooterList.map((item, index) => (
              <FooterLinks key={index} title={item.title} links={item.links} />
            ))}
          </div>

          <div className="text-center pt-4 lg:pt-8 border-t border-gray-500">
            <p className="text-center">
              {t("footer.rights")}{" "}
              <Link to="#!" className="font-bold text-light-red">
                {t("footer.life_media")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  // "footer": {
  //   "quick_links": "Quick Links",
  //   "about_us": "About Us",
  //   "latest_works": "Latest Works",
  //   "contact_us": "Contact Us",
  //   "my_account": "My Account",
  //   "login": "Login",
  //   "register": "Register",
  //   "departments": "Departments",
  //   "office": "Office",
  //   "office_tools": "Office Tools",
  //   "workstation": "Workstation",
  //   "salon_reception": "Salon & Reception",
  //   "meeting_tables": "Meeting Tables",
  //   "chairs": "Chairs",
  //   "reception_counter": "Reception Counter",
  //   "library_set": "Library Set",
  //   "maintenance": "Maintenance & Repair",
  //   "customer_service": "Customer Service",
  //   "privacy_policy": "Privacy Policy",
  //   "return_policy": "Return & Refund Policy",
  //   "rights": "All rights reserved © Development by ",
  //   "life_media": "Life Media"
// },
  
// "footer": {
//     "quick_links": "روابط مختصرة",
//     "about_us": "من نحن",
//     "latest_works": "أحدث الأعمال",
//     "contact_us": "التواصل معنا",
//     "my_account": "حسابي",
//     "login": "تسجيل الدخول",
//     "register": "إنشاء حساب",
//     "departments": "الأقسام",
//     "office": "مكاتب",
//     "office_tools": "أنت مكتبي",
//     "workstation": "خليه عمل وموظفين",
//     "salon_reception": "صالون وريسبشن",
//     "meeting_tables": "ترابيزات اجتماعات",
//     "chairs": "كراسي",
//     "reception_counter": "كاونتر استقبال",
//     "library_set": "ستار مكتبة",
//     "maintenance": "الصيانة والإصلاح",
//     "customer_service": "خدمة العملاء",
//     "privacy_policy": "سياسة الخصوصية",
//     "return_policy": "سياسة الاسترجاع والإرجاع",
//     "rights": "جميع الحقوق محفوظة © تطوير بواسطة ",
//     "life_media": "لايف ميديا"
//   },
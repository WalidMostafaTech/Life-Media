import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../../api/mainServices";
import SkeletonFAQ from "../Loading/SkeletonLoading/SkeletonFAQ";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });

  if (isLoading) return <SkeletonFAQ />;

  if (!data?.length || !data) return null;

  return (
    <article className="container sectionPadding">
      <SectionTitle title={t("faq.title")} />

      <section className="space-y-4 max-w-4xl mx-auto">
        {data?.map((item, index) => (
          <div
            key={item.id}
            className="bg-light-gray rounded-xl transition-all duration-300 px-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleItem(index)}
            >
              <h4 className="font-semibold">{item.question}</h4>
              <div className="w-8 h-8 rounded-full bg-dark-red flex items-center justify-center">
                {openIndex === index ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <FaPlus className="text-lg" />
                )}
              </div>
            </div>
            <div
              className={`transition-all duration-400 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-96 pb-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300">{item.answers}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default FAQ;

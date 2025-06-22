import { useEffect, useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { FaPlus, FaMinus } from "react-icons/fa";
import { getQuestions } from "../../../store/questions/questionsAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/layout/Loading/Loading";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { questions, loading } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="container sectionPadding">
      <SectionTitle title={t("faq.title")} />

      <div className="space-y-4">
        {questions?.map((item, index) => (
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
                  ? "max-h-40 pb-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300">{item.answers}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

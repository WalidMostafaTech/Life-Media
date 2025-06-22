import { GoArrowUpRight } from "react-icons/go";

const CTA = ({ text1, text2, btnText }) => {
  return (
    <div className="container sectionPadding flex flex-wrap gap-4 justify-between items-center">
      <div>
        <h2 className="text-2xl lg:text-3xl">{text1}</h2>
        {text2 && <h2 className="text-2xl lg:text-3xl">{text2}</h2>}
      </div>

      <button className="mainBtn">
        {btnText} <GoArrowUpRight />
      </button>
    </div>
  );
};

export default CTA;

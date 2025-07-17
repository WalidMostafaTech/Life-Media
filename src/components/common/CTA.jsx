import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CTA = ({
  text1,
  text2,
  btnText,
  link = "/contact-us",
  newTab = false,
}) => {
  return (
    <div className="container sectionPadding flex flex-wrap gap-4 justify-between items-center">
      <div>
        <h2 className="text-2xl lg:text-3xl">{text1}</h2>
        {text2 && <h2 className="text-2xl lg:text-3xl">{text2}</h2>}
      </div>

      {!newTab ? (
        <Link to={link} className="mainBtn">
          {btnText} <GoArrowUpRight />
        </Link>
      ) : (
        <a href={link} target="_blank" className="mainBtn">
          {btnText} <GoArrowUpRight />
        </a>
      )}
    </div>
  );
};

export default CTA;

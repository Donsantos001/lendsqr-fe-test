import "./CustomIcons.scss";
import { RiDatabase2Fill } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";

const CiWithLoan = () => {
  return (
    <div className="with-loan-custom-icon">
      <div>
        <AiOutlineFileText />
        <RiDatabase2Fill />
      </div>
    </div>
  );
};

export default CiWithLoan;

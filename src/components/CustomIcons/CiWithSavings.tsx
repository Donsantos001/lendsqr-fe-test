import "./CustomIcons.scss";
import { RiDatabase2Fill } from "react-icons/ri";

const CiWithSavings = () => {
  return (
    <div className="with-saving-custom-icon">
      <div>
        <div className="data">
          <RiDatabase2Fill />
        </div>

        <div className="stack">
          <RiDatabase2Fill />
          <RiDatabase2Fill />
        </div>
      </div>
    </div>
  );
};

export default CiWithSavings;

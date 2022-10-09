import "./AppLogo.scss";
import LendSQR from "../../assets/svgs/lendsqr.svg";
import Union from "../../assets/svgs/union.svg";

const AppLogo = () => {
  return (
    <div className="app-logo">
      <div>
        <img src={Union} alt="union" />
      </div>
      <div>
        <img src={LendSQR} alt="lendsqr" />
      </div>
    </div>
  );
};

export default AppLogo;

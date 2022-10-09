import React from "react";
import "./CustomIcons.scss";
import Users from "../../assets/svgs/users.svg";

const CiThreeUsers = () => {
  return (
    <div className="three-users-custom-icon">
      <div>
        <img src={Users} alt="" />
      </div>
    </div>
  );
};

export default CiThreeUsers;

import React from "react";
import "./CustomIcons.scss";
import Man from "../../assets/svgs/man.svg";
import Woman from "../../assets/svgs/woman.svg";

const Users = () => {
  return (
    <div className="users-custom-icon">
      <div>
        <img className="woman" src={Woman} alt="" />
        <img className="man" src={Man} alt="" />
      </div>
    </div>
  );
};

export default Users;

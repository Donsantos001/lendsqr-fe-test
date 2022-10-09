import React from "react";
import "./UserCard.scss";
import { formatNum } from "../../utils/formatter";

type UserCardProp = {
  icon: JSX.Element;
  text: string;
  quantity: string | number;
};

const UserCard = ({ icon, text, quantity }: UserCardProp) => {
  return (
    <div className="user-card">
      <div className="user-card-inner">
        <div className="user-card-icon">{icon}</div>

        <p>{text}</p>

        <h3>{formatNum(quantity)}</h3>
      </div>
    </div>
  );
};

export default UserCard;

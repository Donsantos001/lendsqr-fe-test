import React from "react";
import "./UserComponents.scss";

const UserStatus = () => {
  const randomStatus = [
    {
      color: "blue",
      text: "Inactive",
    },
    {
      color: "red",
      text: "Blacklisted",
    },
    {
      color: "yellow",
      text: "Pending",
    },
    {
      color: "green",
      text: "Active",
    },
  ][Math.floor(Math.random() * 4)];

  return (
    <div className="user-status-tag">
      <div className={randomStatus.color}>
        <span>{randomStatus.text}</span>
      </div>
    </div>
  );
};

export default UserStatus;

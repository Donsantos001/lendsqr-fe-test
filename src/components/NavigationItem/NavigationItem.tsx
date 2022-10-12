import React from "react";
import "./NavigationItem.scss";
import { Link } from "react-router-dom";

type PropTypes = {
  icon?: React.ReactNode;
  title: string;
  path: string;
  active?: boolean;
};

const NavigationItem = ({ icon, title, path, active }: PropTypes) => {
  return (
    <Link
      to={path || "/pagenotfound"}
      className={`nav-item-link${active ? " active" : ""}`}
    >
      <span className="nav-item-icon">{icon}</span>
      <span>{title}</span>
    </Link>
  );
};

export default NavigationItem;

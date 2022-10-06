import React from "react";
import "./SharedLayout.scss";
import TopNavbar from "../components/Navigation/TopNavbar";
import SideMenu from "../components/Navigation/SideMenu";

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper">
      <TopNavbar />
      <SideMenu />
      <div className="main">{children}</div>
    </div>
  );
};

export default SharedLayout;

import React from "react";
import { useLocation } from "react-router-dom";
import { FaShoppingBag, FaAngleDown } from "react-icons/fa";
import "./SideMenu.scss";
import {
  dashboardRoute,
  customerRoutes,
  businessesRoutes,
} from "../../utils/routes";
import NavigationItem from "../NavigationItem/NavigationItem";

const SideMenu = () => {
  const { pathname } = useLocation();

  return (
    <div className={`side-menu ${"" ? " open" : ""}`}>
      <div className="side-menu-inner">
        <div className="switch-org">
          <span className="shop-icon">
            <FaShoppingBag />
          </span>
          <span>Switch Organization</span>
          <span>
            <FaAngleDown />
          </span>
        </div>

        <NavigationItem
          {...dashboardRoute}
          active={pathname === dashboardRoute.path}
        />

        <p className="side-menu-label">CUSTOMERS</p>
        {customerRoutes.map((route, index) => (
          <NavigationItem
            key={index}
            {...route}
            active={pathname === route.path}
          />
        ))}

        <p className="side-menu-label">BUSINESSES</p>
        {businessesRoutes.map((route, index) => (
          <NavigationItem
            key={index}
            {...route}
            active={pathname === route.path}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;

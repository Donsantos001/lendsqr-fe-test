import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaShoppingBag, FaAngleDown } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import useClickOutside from "../../hooks/useClickOutside";
import useAppSelector from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { closeSideMenu } from "../../redux/slice";
import "./SideMenu.scss";
import {
  dashboardRoute,
  customerRoutes,
  businessesRoutes,
  settingsRoutes,
} from "../../utils/routes";
import NavigationItem from "../NavigationItem/NavigationItem";

const SideMenu = () => {
  const { pathname } = useLocation();
  const sideMenuRef = useRef(null);
  const dispatch = useDispatch();
  const isOpen = useAppSelector(({ user }) => user.isSideMenuOpen);

  useClickOutside(sideMenuRef, (e: MouseEvent | TouchEvent) => {
    if (!e.composedPath().some((elem) => (elem as HTMLDivElement).id === "hamburger-con")) {
      dispatch(closeSideMenu());
    }
  });

  return (
    <div ref={sideMenuRef} className={`side-menu${isOpen ? " open" : ""}`}>
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

        <p className="side-menu-label">SETTINGS</p>
        {settingsRoutes.map((route, index) => (
          <NavigationItem
            key={index}
            {...route}
            active={pathname === route.path}
          />
        ))}

        <div className="logout">
          <span className="logout-icon">
            <FiLogOut />
          </span>
          <span>Logout</span>
        </div>

        <div className="side-menu-hr"></div>
      </div>
    </div>
  );
};

export default SideMenu;

import { Link } from "react-router-dom";
import "./TopNavbar.scss";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../../redux/slice";
import AppLogo from "../Logo/AppLogo";
import Search from "../Search/Search";
import Bell from "../../assets/svgs/bell.svg";
import Profile from "../../assets/profile.jpg";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const TopNavbar = () => {
  const optionRef = useRef<any>();
  const [searchOpen, setSearchOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const dispatch = useDispatch();
  useClickOutside(optionRef, () => setOptionsOpen(false));

  return (
    <div className="top-navbar">
      <div className="top-navbar-inner">
        <div className="app-logo-con">
          <AppLogo />
        </div>

        <div className="top-navbar-main">
          <Search open={searchOpen} />

          <div
            className={`top-navbar-right${optionsOpen ? " show" : ""}`}
            ref={optionRef}
          >
            <Link to="#" className="docs-link">
              Docs
            </Link>

            <div className="notification-icon">
              <img src={Bell} alt="bell" />
            </div>

            <div
              className="search-icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <FaSearch />
            </div>

            <div className="user-circle">
              <img src={Profile} alt="bell" />
            </div>

            <div className="user-dropdown">
              <span>Adedeji</span>
              <FaAngleDown />
            </div>
          </div>
        </div>

        <div
          className="user-circle mobile"
          onClick={() => setOptionsOpen(true)}
        >
          <img src={Profile} alt="bell" />
        </div>

        <div
          className="hamburger-con"
          id="hamburger-con"
          onClick={() => dispatch(toggleSideMenu())}
        >
          <HiOutlineMenuAlt3 className="hamburger-icon" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

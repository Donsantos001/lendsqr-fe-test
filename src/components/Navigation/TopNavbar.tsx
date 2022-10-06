import { Link } from "react-router-dom";
import "./TopNavbar.scss";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AppLogo from "../Logo/AppLogo";
import Search from "../Search/Search";
import Bell from "../../assets/bell.svg";
import Profile from "../../assets/profile.jpg";
import { useState } from "react";

const TopNavbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="top-navbar">
      <div className="top-navbar-inner">
        <div className="app-logo-con">
          <AppLogo />
        </div>

        <div className="top-navbar-main">
          <Search open={searchOpen} />

          <div className="top-navbar-right">
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

        <div className="hamburger-con">
          <HiOutlineMenuAlt3 />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

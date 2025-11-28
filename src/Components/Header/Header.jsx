import React, { useEffect, useState } from "react";
import netflixLogo from "../../assets/Netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${isScrolled ? "header-black" : ""}`}>
      <div className="header-container d-flex justify-content-between align-items-center w-100">
        {/* LEFT */}
        <div className="left-wrapper d-flex align-items-center">
          <ul className="icons-list-left d-flex align-items-center">
            <li>
              <img src={netflixLogo} alt="Netflix Logo" width={100} />
            </li>
            <li className="d-none d-md-block">Home</li>
            <li className="d-none d-md-block">TV Shows</li>
            <li className="d-none d-md-block">Movies</li>
            <li className="d-none d-md-block">Latest</li>
            <li className="d-none d-md-block">My List</li>
            <li className="d-none d-lg-block">Browse by language</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="right-wrapper">
          <ul className="icons-list d-flex align-items-center">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsOutlinedIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

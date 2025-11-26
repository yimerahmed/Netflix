import React from "react";
import netflixLogo from "../../assets/Netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import "./Header.css";
const Header = () => {
  return (
    <div className="d-flex header-wrapper">
      <div className="left-wrapper">
        <img src={netflixLogo} alt="Netflix Logo" />
      </div>

      <div className="right-wrapper d-flex justify-content-end gap-3">
        <SearchIcon
          style={{ color: "white", fontSize: 28, cursor: "pointer" }}
        />
        <NotificationsOutlinedIcon
          style={{ color: "white", fontSize: 28, cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Header;

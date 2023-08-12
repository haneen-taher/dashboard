import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import ViewListIcon from "@mui/icons-material/ViewList";
import avatar from "../../assets/avatar.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search " />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <ViewListIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <HelpIcon className="icon" />
          </div>

          <div className="item">
            <img src={avatar} alt="user avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

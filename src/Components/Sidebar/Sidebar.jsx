import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.webp";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">RepairDesk</span>{" "}
      </div>

      <div className="center">
        <ul>
          <li>
            <SpaceDashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <InventoryIcon className="icon" />
            <span>Inventory</span>
          </li>
        </ul>
        <ul>
          <li>
            <PeopleIcon className="icon" />
            <span>Customers</span>
          </li>
        </ul>
        <ul>
          <li>
            <AttachMoneyIcon className="icon" />
            <span>Sales</span>
          </li>
        </ul>
        <ul>
          <li>
            <AssessmentIcon className="icon" />
            <span>Reports</span>
          </li>
        </ul>
        <ul>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

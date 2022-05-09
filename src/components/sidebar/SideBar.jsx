import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_logo">
        <img src="#" alt="sidebar_logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="sideBar_menu">
        <div className="menu_item">
          <div>Icon</div>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

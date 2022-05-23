import React, { useState } from "react";
import { SidebarData } from "../../data/data";
import "./SideBar.css";
import { UilClipboard, UilSignOutAlt } from "@iconscout/react-unicons";
const SideBar = () => {
  const [selected, setSelected] = useState(0);

  const selectMenuTabHandler = (indexValue) => {
    setSelected(indexValue);
  };

  return (
    <div className="sideBar">
      <div className="sideBar_logo">
        <UilClipboard />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="sideBar_menu">
        {SidebarData.map((item, index) => (
          <div
            className={`menu_item ${selected === index && "active"}`}
            key={index}
            onClick={() => selectMenuTabHandler(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="menu_item">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

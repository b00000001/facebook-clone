import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Pages" />
      <SidebarRow title="Friends" />
    </div>
  );
}

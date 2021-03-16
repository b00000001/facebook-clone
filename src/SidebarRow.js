import React from "react";
import "./SidebarRow.css";

function SidebarRow(props) {
  return (
    <div className="className">
      <p>{props.title}</p>
    </div>
  );
}

export default SidebarRow;

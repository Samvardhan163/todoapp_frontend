import React from "react";
import "./Header.css";
export default function ({ title }) {
  return (
    <div className="header">
      <div className="title ">{title}</div>
    </div>
  );
}

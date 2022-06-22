import React from "react";
import { FaAlignCenter, FaHeart, FaPlus, IconName } from "react-icons/fa";
import "./TodoFooter.css";
import { Link, useNavigate } from "react-router-dom";
export default function TodoFooter() {
  const navigate = useNavigate();
  return (
    <div className="add">
      <FaPlus
        className="plus"
        data-testid="plus"
        onClick={() => {
          console.log("cool");
          navigate("/create");
        }}
      ></FaPlus>
    </div>
  );
}

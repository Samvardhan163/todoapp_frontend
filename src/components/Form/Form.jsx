import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <div className="form-container">
      <form className="todo-form">
        <div className="todo-text">
          <label>Todo Description</label>
          <input type="text" placeholder="Enter Todo Task" required></input>
        </div>
        <div className="todo-checkbox">
          <label>Proirity</label>
          <input type="checkbox"></input>
        </div>
        <button className="form-submit">Add</button>
      </form>
    </div>
  );
}

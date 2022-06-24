import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../../api/useFetch/useFetch";
import useCreate from "../../api/useCreate/useCreate";
import useEdit from "../../api/useEdit/useEdit";

export default function Form() {
  const [description, Setdescription] = useState("");
  const [completed, Setcompleted] = useState(false);
  const [priority, Setpriority] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  function operation(id) {
    if (id > 0) {
      return "update";
    } else {
      return "Add ";
    }
  }
  const {
    data: todo,
    isPending,
    error,
  } = useFetch("http://localhost:8080/api/todo/" + id);

  useEffect(() => {
    if (todo) {
      Setdescription(todo.description);
      Setcompleted(todo.completed);
      Setpriority(todo.priority);
    }
  }, [todo]);

  function handleSubmit(e) {
    e.preventDefault();
    const todo = { description, completed, priority };
    if (id == null) {
      useCreate(todo, "http://localhost:8080/api/todo");
      navigate("/");
    } else {
      useEdit(todo, "http://localhost:8080/api/todo/" + id);
      navigate("/");
    }
  }

  return (
    <div className="form-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="todo-text">
          <label>Todo Description</label>
          <input
            type="text"
            placeholder="Enter Todo Task"
            value={description}
            required
            onChange={(e) => {
              Setdescription(e.target.value);
            }}
          ></input>
        </div>
        <div className="todo-checkbox">
          <label>priority</label>
          <input
            type="checkbox"
            checked={priority}
            data-testid="priority"
            onClick={() => {
              Setpriority(!priority);
            }}
          ></input>
          <label>Completed</label>
          <input
            type="checkbox"
            checked={completed}
            data-testid="completed"
            onClick={() => {
              Setcompleted(!completed);
            }}
          ></input>
        </div>
        <button className="form-submit">{operation(id)}</button>
      </form>
    </div>
  );
}

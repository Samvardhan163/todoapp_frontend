import React from "react";
import { useNavigate } from "react-router-dom";
import useDelete from "../../api/useDelete/useDelete";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";

export default function TodoItem(props) {
  const { todo, updateTodo, refetch, updateTodoTask } = props;

  const navigate = useNavigate();

  return (
    <div className="todo-card" data-testid={`todo-card-${todo.id}`}>
      <div
        className={`todo-task ${todo.completed && "todo-task-completed"}`}
        onClick={() => {
          updateTodoTask(todo.id);
          //   refetch();
        }}
        data-testid={`todo-description-${todo.id}`}
      >
        {todo.description}
      </div>
      <FaStar
        className={`todo-priority ${todo.priority && "todo-priority-active"}`}
        data-testid={`todo-priority-${todo.id}`}
        onClick={() => {
          updateTodo(todo.id);
          //   refetch();
        }}
      ></FaStar>
      <FaTrash
        className="todo-delete"
        data-testid={`todo-delete-${todo.id}`}
        onClick={() => {
          useDelete("http://localhost:8080/api/todo/" + todo.id).then(() => {
            refetch();
          });
        }}
      ></FaTrash>
      <FaEdit
        className="todo-edit"
        data-testid={`todo-edit-${todo.id}`}
        onClick={() => {
          navigate(`/create/${todo.id}`);
        }}
      ></FaEdit>
    </div>
  );
}

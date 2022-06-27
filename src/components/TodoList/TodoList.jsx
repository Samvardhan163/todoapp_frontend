import React from "react";
import { useState, useEffect } from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
import "./TodoList.css";
import { useNavigate } from "react-router-dom";
import useDelete from "../../api/useDelete/useDelete";
import useFetch from "../../api/useFetch/useFetch";
import useEdit from "../../api/useEdit/useEdit";
export default function TodoList() {
  const [todos, SetTodos] = useState([]);
  const navigate = useNavigate();
  const {
    data: task,
    error,
    refetch,
  } = useFetch("http://localhost:8080/api/todo");

  useEffect(() => {
    SetTodos(task ? task : []);
  }, [task]);

  function updateTodo(id) {
    let updatedTaskPriority = todos.map((todo) => {
      if (todo.id === id) {
        todo.priority = !todo.priority;
        useEdit(todo, "http://localhost:8080/api/todo/" + id);
        return todo;
      } else {
        return todo;
      }
    });
    SetTodos(updatedTaskPriority);
  }
  function updateTodoTask(id) {
    let updatedTaskCompletedStatus = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        useEdit(todo, "http://localhost:8080/api/todo/" + id);
        return todo;
      } else {
        return todo;
      }
    });
    SetTodos(updatedTaskCompletedStatus);
  }
  return (
    <>
      <div className="grid-container">
        {todos.map((todo) => (
          <div
            className="todo-card"
            key={todo.id}
            data-testid={`todo-card-${todo.id}`}
          >
            <div
              className={`todo-task ${todo.completed && "todo-task-completed"}`}
              onClick={() => {
                updateTodoTask(todo.id);
                refetch();
              }}
            >
              {todo.description}
            </div>
            <FaStar
              className={`todo-priority ${
                todo.priority && "todo-priority-active"
              }`}
              data-testid={`todo-priority-${todo.id}`}
              onClick={() => {
                updateTodo(todo.id);
                refetch();
              }}
            ></FaStar>
            <FaTrash
              className="todo-delete"
              data-testid={`todo-delete-${todo.id}`}
              onClick={() => {
                useDelete("http://localhost:8080/api/todo/" + todo.id).then(
                  () => {
                    refetch();
                    console.log("deleted bro");
                  }
                );
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
        ))}
      </div>
      <TodoFooter></TodoFooter>
    </>
  );
}

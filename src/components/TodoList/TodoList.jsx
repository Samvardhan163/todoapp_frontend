import React from "react";
import { useState, useEffect } from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
import "./TodoList.css";
import { useNavigate } from "react-router-dom";
import useDelete from "../../api/useDelete/useDelete";
import useFetch from "../../api/useFetch/useFetch";
export default function TodoList() {
  const [todos, SetTodos] = useState([]);
  const navigate = useNavigate();

  const { data: task, refetch } = useFetch("http://localhost:8080/api/todo/");

  useEffect(() => {
    SetTodos(task ? task : []);
  }, [task]);

  function updateTodo(id) {
    let updatedTaskPriority = todos.map((todo) => {
      if (todo.id === id) {
        todo.priority = !todo.priority;
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
              }}
            >
              {todo.description}
            </div>
            <FaStar
              className={`todo-priority ${
                todo.priority && "todo-priority-active"
              }`}
              onClick={() => {
                updateTodo(todo.id);
              }}
            ></FaStar>
            <FaTrash
              className="todo-delete"
              onClick={() => {
                useDelete("http://localhost:8080/api/todo/" + todo.id).then(
                  () => {
                    refetch();
                  }
                );
              }}
            ></FaTrash>
            <FaEdit
              className="todo-edit"
              onClick={() => {
                navigate(`/create/${todo.id}`);
                console.log(todo.id);
              }}
            ></FaEdit>
          </div>
        ))}
      </div>
      <TodoFooter></TodoFooter>
    </>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";
import { useNavigate } from "react-router-dom";
import useDelete from "../../api/useDelete/useDelete";
import useFetch from "../../api/useFetch/useFetch";
import useEdit from "../../api/useEdit/useEdit";
import TodoItem from "../TodoItem/TodoItem";
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
          <TodoItem
            todo={todo}
            key={todo.id}
            updateTodo={updateTodo}
            refetch={refetch}
            updateTodoTask={updateTodoTask}
          />
        ))}
      </div>
      <TodoFooter></TodoFooter>
    </>
  );
}

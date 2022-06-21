import React, { useState } from "react";
import TodoPage from "./pages/TodoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddFormPage from "./pages/AddFormPage";
const App = () => {
  return (
    <div className="TodoApp">
      {/* <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/create" element={<TodoPage />} />
        </Routes>
      </Router> */}
      {/* <TodoPage></TodoPage> */}
      <AddFormPage></AddFormPage>
    </div>
  );
};

export default App;

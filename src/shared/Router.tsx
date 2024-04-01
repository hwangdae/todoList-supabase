import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/globalStyle";
import TodoListPage from "../pages/TodoListPage";
import WriteTodoPage from "../pages/WriteTodoPage";
import Layout from "../layout/Layout";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/writeTodo" element={<WriteTodoPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

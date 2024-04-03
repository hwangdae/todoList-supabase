import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/globalStyle";
import TodoListPage from "../pages/TodoListPage";
import WriteTodoPage from "../pages/WriteTodoPage";
import Layout from "../layout/Layout";
import TodoDetailPage from "../pages/TodoDetailPage";
import SearchResultPage from "../pages/SearchResultPage";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/writeTodo" element={<WriteTodoPage />} />
          <Route path="/todo/:id" element={<TodoDetailPage />} />
          <Route path="/search/:type" element={<SearchResultPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default Router;

import React from "react";
import TodoListForm from "./TodoListForm";
import { useQuery } from "@tanstack/react-query";
import { getTodoData } from "../api/todoList";
import TodoForMap from "./TodoForMap";
import { TodoListType } from "../types/Todo";
import TodoTitle from "./Header/TodoListTitle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoList = () => {

  const {
    data: todoList,
    isLoading: todoListLoading,
    isError,
  } = useQuery({
    queryKey: ["todoList"],
    queryFn: () => getTodoData(),
  });


  if (todoListLoading) {
    console.log(todoListLoading);
  }

  if (isError) {
    console.log(isError);
  }


  return (
    <S.TodoListWrap>
      {todoList?.map((todo: TodoListType) => {
        return (
          <TodoForMap
            key={todo.id}
            id={todo.id}
            title={todo.title}
            body={todo.body}
          />
        );
      })}
    </S.TodoListWrap>
  );
};

export default TodoList;

const S = {
  TodoListWrap :styled.main`
      
  `
}

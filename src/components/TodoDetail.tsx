import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getTodoData, getTodoDetailData } from "../api/todoList";
import { TodoListType } from "../types/Todo";

const TodoDetail = () => {
  const { id } = useParams<string>();
  //   const { data } = useQuery({
  //     queryKey: ["todoList",id],
  //     queryFn: () => getTodoDetailData(id),
  //   });
  const {
    data: todoList,
    isLoading: todoListLoading,
    isError,
  } = useQuery({
    queryKey: ["todoList"],
    queryFn: () => getTodoData(),
  });

  // const todo = todoList?.find((todo) => {
  //   return todo.id == id;
  // });
  
  return (
    <div>
      {/* <h1>{todo?.title}</h1>
      <h2>{todo?.body}</h2> */}
    </div>
  );
};

export default TodoDetail;

import React, { useMemo } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getTodoData } from "../api/todoList";
import TodoForMap from "./TodoForMap";
import { TodoListType } from "../types/Todo";
import styled from "styled-components";
import { InView, useInView } from "react-intersection-observer";

const ROWS_PER_PAGE = 15;

const TodoList = () => {
  const {
    data: todoList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: todoListLoading,
    isError,
  } = useInfiniteQuery<any>({
    queryKey: ["todoListi"],
    queryFn: ({ pageParam }) => getTodoData(pageParam as number),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
    },
  });

  const newTodoList = useMemo(() => {
    return todoList?.pages
      .map((data) => {
        return data.todoList;
      })
      .flat();
  },[todoList]);
  console.log(todoList);
  console.log(newTodoList);

  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (!inView || !hasNextPage || isFetchingNextPage) return;
      fetchNextPage();
    },
  });

  if (todoListLoading) {
  }

  if (isError) {
  }

  return (
    <S.TodoListWrap>
      {newTodoList?.map((todo: TodoListType) => {
        return (
          <TodoForMap
            key={todo.id}
            id={todo.id}
            title={todo.title}
            body={todo.body}
          />
        );
      })}
      <div ref={ref}></div>
    </S.TodoListWrap>
  );
};

export default TodoList;

const S = {
  TodoListWrap: styled.main``,
};

import React from "react";
import styled from "styled-components";
import { TodoListType, TodoType } from "../types/Todo";
import supabase from "../lib/supabaseClient";

const TodoForMap = ({ id, title, body }: Omit<TodoListType, "created_at">) => {
  const deleteTodoHandler = async () => {
    await supabase.from("todoList").delete().eq("id", id);
  };
  return (
    <S.TodoWrap>
      <S.TodoTextWrap>
        <S.TodoTitle>{title}</S.TodoTitle>
        <h2>{body}</h2>
      </S.TodoTextWrap>
      <S.DeleteButton onClick={deleteTodoHandler}>삭제</S.DeleteButton>
    </S.TodoWrap>
  );
};

export default TodoForMap;

const S = {
  TodoWrap: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: solid 1px #3fc08a;
    border-radius: 4px;
    margin-bottom: 16px;
  `,
  TodoTextWrap: styled.div`
  /* padding: 10px 0px; */
  `,
  TodoTitle: styled.h1`
    font-size: 28px;
    margin-bottom: 10px;
  `,
  DeleteButton:styled.button`
    cursor: pointer;
    background: #3fc08a;
    color: #fff;
    padding: 7px 14px;
    border: none;
    border-radius: 4px;
  `
};

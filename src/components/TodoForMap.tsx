import React from "react";
import styled from "styled-components";
import { TodoListType, TodoType } from "../types/Todo";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const TodoForMap = ({ id, title, body }: Omit<TodoListType, "created_at">) => {
  const navigate = useNavigate()
  const navigateDetailHandler = () => {
    navigate(`/todo/${id}`)
  }
  const deleteTodoHandler = async () => {
    await supabase.from("todoList").delete().eq("id", id);
  };

  return (
    <S.TodoWrap>
      <S.TodoTextWrap>
        <S.TodoTitle>{title}</S.TodoTitle>
        <S.TodoBody>{body}</S.TodoBody>
      </S.TodoTextWrap>
      <S.FnWrap>
        <S.DetailButton onClick={navigateDetailHandler}>상세보기</S.DetailButton>
        <S.DeleteButton onClick={deleteTodoHandler}>삭제</S.DeleteButton>
      </S.FnWrap>
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
  TodoBody: styled.h2`
    font-size: 20px;
  `,
  FnWrap: styled.div`
    display: flex;
    gap: 10px;
  `,
  DetailButton: styled.button`
    cursor: pointer;
    border: solid 1px #3fc08a;
    border-radius: 4px;
    background: #fff;
  `,
  DeleteButton: styled.button`
    cursor: pointer;
    background: #3fc08a;
    color: #fff;
    padding: 0px 14px;
    border: none;
    border-radius: 4px;
  `,
};

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoListTitle = () => {
  const navigate = useNavigate();
  return <S.TodoTitle onClick={()=>navigate("/")}>Todo List</S.TodoTitle>;
};

export default TodoListTitle;

const S = {
  TodoTitle: styled.button`
    cursor: pointer;
    border: none;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -2px;
  `,
};

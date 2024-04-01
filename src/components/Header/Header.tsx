import React from "react";
import TodoListTitle from "./TodoListTitle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const navigateWriteTodo = () => {
    navigate("/writeTodo");
  };
  return (
    <S.HeaderWrap>
      <S.HeaderInner>
        <TodoListTitle />
        <S.FnWrap>
          <Search />
          <S.WriteButton onClick={navigateWriteTodo}>글 작성하기</S.WriteButton>
        </S.FnWrap>
      </S.HeaderInner>
    </S.HeaderWrap>
  );
};

export default Header;

const S = {
  HeaderWrap: styled.header`
    position: absolute;
    left: 0;
    right: 0;
    background-color: #eee;
  `,
  HeaderInner: styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 14px 0px;
  `,
  FnWrap: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  WriteButton: styled.button`
    cursor: pointer;
    background: #3fc08a;
    color: #fff;
    padding: 7px 14px;
    border: none;
    border-radius: 4px;
  `,
};

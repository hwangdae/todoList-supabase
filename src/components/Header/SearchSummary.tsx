import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { getTodoByTitleKeyword } from "../../api/todoList";
import {
  searchState,
  searchkeyword,
  toggleState,
} from "../../globalState/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const SearchSummary = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [, setSearchToggle] = useRecoilState(toggleState);
  const [searchData] = useRecoilState(searchkeyword);

  const navigate = useNavigate();
  console.log(searchData);

  if (!search) {
    return (
      <S.SearchSummaryWrap>
        <S.SearchSummaryInner>
          <div>검색어 입력해주세요.</div>
        </S.SearchSummaryInner>
      </S.SearchSummaryWrap>
    );
  }

  return (
    <S.SearchSummaryWrap>
      <S.SearchSummaryInner>
        {searchData.titleData === null ||
          (searchData.titleData.length <= 0 && (
            <div>검색 결과가 없습니다.</div>
          ))}
        {searchData?.titleData?.map((todo) => {
          return (
            <S.SearchTodo
              key={todo.id}
              onClick={() => {
                setSearchToggle(false);
                navigate(`/todo/${todo.id}`);
                setSearch("");
              }}
            >
              {todo.title}
            </S.SearchTodo>
          );
        })}
        {searchData.titleData?.length && searchData.titleData?.length >= 3 && (
          <button onClick={()=>navigate(`/search/all?=${search}`)}>검색결과 더보기</button>
        )}
      </S.SearchSummaryInner>
    </S.SearchSummaryWrap>
  );
};

export default SearchSummary;

const S = {
  SearchSummaryWrap: styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 40px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;
  `,
  SearchSummaryInner: styled.div`
    padding: 8px;
  `,
  SearchTodo: styled.button`
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: left;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 3px rgba(0, 121, 36, 0.1);
    padding: 6px;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0px;
    }
  `,
};

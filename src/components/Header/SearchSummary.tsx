import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { getTodoByTitleKeyword } from "../../api/todoList";
import { searchState, searchkeyword } from "../../globalState/recoil";
import { useRecoilState, useRecoilValue } from "recoil";

const SearchSummary = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [searchData] = useRecoilState(searchkeyword);

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
  console.log(search);
  return (
    <S.SearchSummaryWrap>
      <S.SearchSummaryInner>
        {searchData.titleData === null || searchData.titleData.length <= 0 && (
          <div>검색 결과가 없습니다.</div>
        )}
        {searchData?.titleData?.map((todo) => {
          return <S.SearchTodo key={todo.id}>{todo.title}</S.SearchTodo>;
        })}
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
  SearchTodo: styled.p`
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    padding: 6px;
    border-radius: 4px;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0px;
    }
  `,
};

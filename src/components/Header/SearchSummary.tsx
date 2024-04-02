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
    return <div>검색어 입력해주세요.</div>;
  }
  console.log(search)
  return (
    <S.SearchSummaryWrap>
      {searchData.titleData === null && searchData.bodyData === null && (
        <div>검색 결과가 없습니다.</div>
      )}
      {searchData?.titleData?.map((todo) => {
        return <p>{todo.title}</p>;
      })}
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
    div {
      padding: 10px;
    }
  `,
};

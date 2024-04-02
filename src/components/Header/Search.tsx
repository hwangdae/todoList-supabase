import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  searchState,
  searchkeyword,
  toggleState,
} from "../../globalState/recoil";
import {
  getTodoByBodyKeyword,
  getTodoByTitleKeyword,
} from "../../api/todoList";
import SearchSummary from "./SearchSummary";
import { TodoListType } from "../../types/Todo";
import useDebounce from "../../hook/useDebouce";

const Search = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [searchToggle, setSearchToggle] = useRecoilState(toggleState);
  const [searchData, setSearchData] = useRecoilState(searchkeyword);
  const debouncedQuery = useDebounce(search, 2000);

  const SearchSummaryOpen = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSearchToggle(false);
  };
  useEffect(()=>{
    const fetchData = async (keyword: string) => {
      const titleData = await getTodoByTitleKeyword(keyword);
      const bodyData = await getTodoByBodyKeyword(keyword);
      setSearchData({ titleData, bodyData, searchKey: keyword });
    };
    if (debouncedQuery) {
      fetchData(search);
    }
  },[debouncedQuery])
  

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  console.log(search)
  return (
    <S.SearchWrap>
      <form onSubmit={(e) => SearchSummaryOpen(e)}>
        <S.SearchInput
          onFocus={() => {
            setSearchToggle(true);
            // console.log("test");
          }}
          onBlur={() => {
            setTimeout(() => {
              setSearchToggle(false);
            }, 200);
          }}
          value={search}
          onChange={searchHandler}
        ></S.SearchInput>
      </form>
      {searchToggle && <SearchSummary />}
    </S.SearchWrap>
  );
};

export default Search;

const S = {
  SearchWrap: styled.div`
    position: relative;
    left: 0;
    top: 0;
  `,
  SearchForm: styled.form``,
  SearchInput: styled.input`
    width: 300px;
    padding: 5px 5px;
    border: solid 1px #999;
    border-radius: 4px;
    outline: none;
    transition: 0.3s;
    &:focus {
      width: 500px;
    }
  `,
};

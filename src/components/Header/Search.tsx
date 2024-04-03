import React, { useCallback, useEffect, useRef, useState } from "react";
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
import useDebounce from "../../hook/useDebouce";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [searchToggle, setSearchToggle] = useRecoilState(toggleState);
  const [, setSearchData] = useRecoilState(searchkeyword);
  const debouncedQuery = useDebounce(search, 500);

  const navigate = useNavigate()


  const allSearchHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchToggle(false);
    navigate(`/search/all?=${search}`)
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

  return (
    <S.SearchWrap>
      <form onSubmit={(e) => allSearchHandler(e)}>
        <S.SearchInput
          onFocus={() => {
            setSearchToggle(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setSearchToggle(false);
            }, 200);
          }}
          placeholder="게시물을 검색하세요."
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
    width: 400px;
    padding: 8px 5px;
    border: solid 1px #999;
    border-radius: 4px;
    outline: none;
    transition: 0.3s;

  `,
};

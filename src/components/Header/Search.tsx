import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <S.SearchInput></S.SearchInput>
    </div>
  );
};

export default Search;

const S = {
  SearchInput: styled.input`
    width: 300px;
    padding: 5px 5px;
    border: solid 1px #999;
    border-radius: 4px;
    outline: none;
  `,
};

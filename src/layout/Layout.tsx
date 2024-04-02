import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <S.ContainerWrap>
        <S.Container>
          <Outlet />
        </S.Container>
      </S.ContainerWrap>
    </>
  );
};

export default Layout;

const S = {
  ContainerWrap: styled.main`
    width: 100%;
    position: absolute;
    left: 0;
    top: 90px;
  `,
  Container: styled.div`
    width: 1200px;
    margin: 0 auto;
    overflow-y: scroll;
    height: calc(100vh - 120px);
    &::-webkit-scrollbar {
      display: none;

    }
  `,
};

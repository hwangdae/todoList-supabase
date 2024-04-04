import React, { useState } from "react";
import "./App.css";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./shared/Router";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
          <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getTodoByAllKeyword, getTodoByTitleKeyword } from "../../api/todoList";
import TodoForMap from "../TodoForMap";

const SearchResult = () => {
  const param = useParams();

  const searchKey = {
    type: param.type,
    keyword: window.location.search.slice(2),
  };
  const { data: allData } = useQuery({
    queryKey: ["searchResult"],
    queryFn: () => getTodoByAllKeyword(searchKey),
  });
  return (
    <div>
      {allData?.map((todo) => {
        return (
          <TodoForMap
            key={todo.id}
            id={todo.id}
            title={todo.title}
            body={todo.body}
          />
        );
      })}
    </div>
  );
};

export default SearchResult;

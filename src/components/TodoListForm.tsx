import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { writeTodoData } from "../api/todoList";
import useTodo from "../hook/useTodo";
import { TodoType } from "../types/Todo";


const TodoListForm = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  // const {writeTodoMutate} = useTodo();
  const navigate = useNavigate()

  const addTodoHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      title,
      body
    }
    writeTodoData(newTodo)
    navigate('/')
    // writeTodoMutate.mutate(newTodo as any)
    setTitle("");
    setBody("");

  };

  return (
    <form onSubmit={addTodoHandler}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label htmlFor="desc">Description</label>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></input>
      <button>작성하기</button>
    </form>
  );
};

export default TodoListForm;

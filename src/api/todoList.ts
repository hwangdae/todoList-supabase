import supabase from "../lib/supabaseClient";
import { TodoListType, TodoType } from "../types/Todo";
interface KeywordType {
  type?: string;
  keyword: string;
}

interface WriteType {
  void: () => void;
  Error: Error;
  newTodo: TodoType;
  unknown: unknown;
}

const getTodoData = async (pageParam: number = 0) => {
  const response = await supabase
    .from("todoList")
    .select()
    .range(pageParam * 15, (pageParam + 1) * 15 - 1);
   const data = response!.data;

   let pageCount;
   const {count} = await supabase.from('todoList').select("*",{count:'exact',head:true})
   pageCount = count
   const total_pages = Math.floor(pageCount! /15);

   return {error : response.error,todoList:data!,page : pageParam,total_pages,total_result :pageCount}
};
const getTodoDetailData = async (id: string | undefined) => {
  const { data } = await supabase.from("todoList").select().eq("id", id);
  return data;
};

const writeTodoData = async (newTodo: TodoType) => {
  await supabase.from("todoList").insert(newTodo);
};

const deleteTodoData = async (id: string): Promise<void> => {
  await supabase.from("todoList").delete().eq("id", id);
};

const getTodoByAllKeyword = async ({ type, keyword }: KeywordType) => {
  const { data } = await supabase
    .from("todoList")
    .select("*")
    .ilike("title", `%${keyword}%`);
  const searchAllData = data as TodoListType[] | null;
  return searchAllData;
};

const getTodoByTitleKeyword = async (keyword: string) => {
  const { data } = await supabase
    .from("todoList")
    .select("*")
    .ilike("title", `%${keyword}%`)
    .range(0, 2);
  const searchTitleData = data as TodoListType[] | null;
  return searchTitleData;
};
const getTodoByBodyKeyword = async (keyword: string) => {
  const { data } = await supabase
    .from("todoList")
    .select("*")
    .ilike("body", `%${keyword}%`);
  const searchBodyData = data as TodoListType[] | null;
  return searchBodyData;
};

export {
  getTodoData,
  getTodoDetailData,
  writeTodoData,
  deleteTodoData,
  getTodoByAllKeyword,
  getTodoByTitleKeyword,
  getTodoByBodyKeyword,
};

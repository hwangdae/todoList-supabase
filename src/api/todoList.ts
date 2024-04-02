import supabase from "../lib/supabaseClient";
import { TodoListType, TodoType } from "../types/Todo";

const getTodoData = async () => {
  const { data } = await supabase.from("todoList").select();
  return data;
};

const writeTodoData = async (newTodo: TodoType) => {
  await supabase.from("todoList").insert(newTodo);
};

const deleteTodoData = async (id: string):Promise<void> => {
  await supabase.from("todoList").delete().eq("id", id);
};

const getTodoByTitleKeyword = async(keyword:string) => {
  const {data} = await supabase.from("todoList").select('*').ilike('title',`%${keyword}%`)
  const searchTitleData = data as TodoListType[] | null;
  return searchTitleData;
}
const getTodoByBodyKeyword = async(keyword:string) => {
  const {data} = await supabase.from("todoList").select('*').ilike('body',`%${keyword}%`)
  const searchBodyData = data as TodoListType[] | null;
  return searchBodyData;
}

export { getTodoData, writeTodoData, deleteTodoData,getTodoByTitleKeyword ,getTodoByBodyKeyword};

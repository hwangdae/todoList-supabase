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

export { getTodoData, writeTodoData, deleteTodoData };

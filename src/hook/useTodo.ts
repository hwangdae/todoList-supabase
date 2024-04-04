import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodoData, writeTodoData } from "../api/todoList";
import { TodoListType, TodoType } from "../types/Todo";

const useTodo = () => {
  const queryClient = useQueryClient();

  const success = {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
    },
  };

  // const writeTodoMutate = useMutation(
  //   writeTodoData,
  //   success
  // );
  // const deleteTodoMutate = useMutation<void, Error, string, unknown>(
  //   deleteTodoData,
  //   success
  // );

  // return { writeTodoMutate, deleteTodoMutate };
};

export default useTodo;

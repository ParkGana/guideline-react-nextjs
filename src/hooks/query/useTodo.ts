import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodoAPI, deleteTodoAPI, fetchTodosAPI, updateTodoAPI } from '@/lib/Todo';

export const useTodo = () => {
  const queryClient = useQueryClient();

  /* Todo 목록 가져오기 */
  const fetchTodosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodosAPI
  });

  /* Todo 생성 */
  const createTodoMutation = useMutation({
    mutationFn: createTodoAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  /* Todo 수정 */
  const updateTodoMutation = useMutation({
    mutationFn: updateTodoAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  /* Todo 삭제 */
  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodoAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  return { fetchTodosQuery, createTodoMutation, updateTodoMutation, deleteTodoMutation };
};

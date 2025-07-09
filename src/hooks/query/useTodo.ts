import { useQuery } from '@tanstack/react-query';
import { fetchTodosAPI } from '@/lib/Todo';

export const useTodo = () => {
  /* Todo 목록 가져오기 */
  const fetchTodosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodosAPI
  });

  return { fetchTodosQuery };
};

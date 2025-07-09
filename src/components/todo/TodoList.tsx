'use client';
import TodoItem from './TodoItem';
import { useTodo } from '@/hooks/query/useTodo';

const TodoList = () => {
  //   const [todos, setTodos] = useState<TodoType[]>([]);

  //   useEffect(() => {
  //     const fetchTodos = async () => {
  //       const res = await fetchTodosAPI();
  //       setTodos(res);
  //     };
  //     fetchTodos();
  //   }, []);

  const {
    fetchTodosQuery: { data: todos, isPending, isError }
  } = useTodo();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="flex flex-col gap-5">
      {!todos.length && <p className="text-body text-gray-500 text-center">등록된 할 일이 없습니다.</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} data={todo} />
      ))}
    </div>
  );
};

export default TodoList;

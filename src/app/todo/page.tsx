import TodoCreate from '@/components/todo/TodoCreate';
import TodoList from '@/components/todo/TodoList';

const TodoPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-title text-center">TODO</p>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default TodoPage;

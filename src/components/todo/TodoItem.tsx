import clsx from 'clsx';
import type { TodoType } from '../../types/todoType';
import { useTodo } from '@/hooks/query/useTodo';

type TodoItemProps = {
  data: TodoType;
};

const TodoItem = ({ data: { id, title, completed } }: TodoItemProps) => {
  const { updateTodoMutation, deleteTodoMutation } = useTodo();

  /* Todo 수정 */
  const handleUpdateTodo = () => {
    // await updateTodoAPI({ id, completed: !completed });
    updateTodoMutation.mutate({ id, completed: !completed });
  };

  /* Todo 삭제 */
  const handleDeleteTodo = () => {
    // await deleteTodoAPI(id);
    deleteTodoMutation.mutate(id);
  };

  return (
    <div className="relative flex items-center justify-between">
      <p
        className={clsx(
          'relative z-10 text-body bg-gray-100 px-3 cursor-pointer',
          completed && 'text-gray-600 line-through'
        )}
        onClick={handleUpdateTodo}
      >
        {title}
      </p>
      <p className="relative z-10 text-body text-red-500 bg-gray-100 px-3 cursor-pointer" onClick={handleDeleteTodo}>
        삭제
      </p>
      <div className="absolute top-1/2 left-0 right-0 border-b-2 border-dashed border-gray-200" />
    </div>
  );
};

export default TodoItem;

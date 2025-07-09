import clsx from 'clsx';
import type { TodoType } from '../../types/todoType';
import { deleteTodoAPI, updateTodoAPI } from '@/lib/Todo';

type TodoItemProps = {
  data: TodoType;
};

const TodoItem = ({ data: { id, title, completed } }: TodoItemProps) => {
  /* Todo 수정 */
  const handleUpdateTodo = async () => {
    await updateTodoAPI({ id, completed: !completed });
  };

  /* Todo 삭제 */
  const handleDeleteTodo = async () => {
    await deleteTodoAPI(id);
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

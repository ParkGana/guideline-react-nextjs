'use client';
import { createTodoAPI } from '@/lib/Todo';
import { useState } from 'react';

const TodoCreate = () => {
  const [title, setTitle] = useState<string>('');

  /* Todo 생성 */
  const handleCreateTodo = async () => {
    await createTodoAPI(title);
  };

  /* Enter 키 입력 시 Todo 생성 */
  const handleCreateTodoWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCreateTodo();
      setTitle('');
    }
  };

  return (
    <input
      className="w-full text-body rounded-md border border-gray-300 bg-gray-100 p-3"
      value={title}
      placeholder="할 일을 입력해주세요."
      autoComplete="off"
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={handleCreateTodoWithEnter}
    />
  );
};

export default TodoCreate;

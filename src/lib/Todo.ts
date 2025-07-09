import { TodoType } from '@/types/todoType';
import api from './api';

/* Todo 목록 가져오기 */
export const fetchTodosAPI = async (): Promise<TodoType[]> => {
  try {
    const res = await api.get('/todos');
    return res;
  } catch (e: any) {
    throw new Error(e.message ?? 'Network error occurred!');
  }
};

/* Todo 생성 */
export const createTodoAPI = async (title: string): Promise<void> => {
  try {
    await api.post('/todos', { title, completed: false });
  } catch (e: any) {
    throw new Error(e.message ?? 'Network error occurred!');
  }
};

/* Todo 수정 */
export const updateTodoAPI = async ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): Promise<void> => {
  try {
    await api.patch(`/todos/${id}`, { completed });
  } catch (e: any) {
    throw new Error(e.message ?? 'Network error occurred!');
  }
};

/* Todo 삭제 */
export const deleteTodoAPI = async (id: string): Promise<void> => {
  try {
    await api.delete(`/todos/${id}`);
  } catch (e: any) {
    throw new Error(e.message ?? 'Network error occurred!');
  }
};

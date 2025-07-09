import type { PostInfiniteQueryType } from '../types/postType';
import api from './api';

/* Post 목록 가져오기 */
export const fetchPostsAPI = async ({ pageParam = 1 }): Promise<PostInfiniteQueryType> => {
  try {
    const res = await api.get('/posts', { _page: pageParam, _per_page: 10 });
    return {
      data: res.data,
      nextPage: res.next
    };
  } catch (e: any) {
    throw new Error(e.message ?? 'Network error occurred!');
  }
};

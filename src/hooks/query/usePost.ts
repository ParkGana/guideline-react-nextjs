import { fetchPostsAPI } from '@/lib/Post';
import { useInfiniteQuery } from '@tanstack/react-query';

export const usePost = () => {
  /* Post 목록 가져오기 */
  const fetchPostsQuery = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsAPI,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  return { fetchPostsQuery };
};

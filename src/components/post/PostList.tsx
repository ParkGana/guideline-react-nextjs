'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { usePost } from '../../hooks/query/usePost';

const PostList = () => {
  const {
    fetchPostsQuery: { data, fetchNextPage, hasNextPage, isPending, isError }
  } = usePost();

  const [currentPage, setCurrentPage] = useState(1);

  /* 이전 페이지로 이동 */
  const moveToPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  /* 다음 페이지로 이동 */
  const moveToNext = () => {
    if (hasNextPage && currentPage === data?.pages.length) {
      fetchNextPage();
    }

    setCurrentPage(currentPage + 1);
  };

  const currentData = data?.pages[currentPage - 1]?.data || [];

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <div className="flex flex-col">
        {currentData.map(({ title, body }) => (
          <div className="border-b-2 border-gray-300 px-5 py-10">
            <p className="text-label">{title}</p>
            <p className="text-body">{body}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={moveToPrev}
          className={clsx('text-body', currentPage === 1 && 'text-gray-500')}
          disabled={currentPage === 1}
        >
          이전
        </button>
        <p className="text-body">{currentPage}</p>
        <button
          onClick={moveToNext}
          className={clsx('text-body', !hasNextPage && currentPage === data.pages.length && 'text-gray-500')}
          disabled={!hasNextPage && currentPage === data.pages.length}
        >
          다음
        </button>
      </div>
    </>
  );
};

export default PostList;

import PostList from '@/components/post/PostList';

const PostPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-title text-center">POST</p>
      <PostList />
    </div>
  );
};

export default PostPage;

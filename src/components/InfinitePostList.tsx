import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";

export type Post = {
  id: string;
  content: string;
  createdAt: Date;
  loveCount: number;
  lovedByMe: boolean;
  user: { id: string; image: string | null; name: string | null };
};

type InfinitePostListProps = {
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  fetchNewPost: () => Promise<unknown>;
  posts?: Post[];
};

export default function InfinitePostList({
  posts,
  isLoading,
  isError,
  hasMore,
  fetchNewPost,
}: InfinitePostListProps) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  if (posts == null || posts.length === 0) {
    return <h2>No tweets found</h2>;
  }

  return (
    <ul className="">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchNewPost}
        hasMore={hasMore}
        loader={"Loading"}
        className="overflow-hidden"
      >
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            user={post.user}
            content={post.content}
            createdAt={post.createdAt}
            loveCount={post.loveCount}
            lovedByMe={post.lovedByMe}
          />
        ))}
      </InfiniteScroll>
    </ul>
  );
}

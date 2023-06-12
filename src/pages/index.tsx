import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { InfinitePostList } from "~/components";
import { api } from "~/utils/api";

/* import { signIn, signOut, useSession } from "next-auth/react"; */

const Home: NextPage = () => {
  return (
    <div className="p-4 text-xs md:text-sm">
      <RecentPosts />
    </div>
  );
};

export default Home;

function RecentPosts() {
  const posts = api.post.infiniteFeed.useInfiniteQuery(
    {},
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );
  return (
    <InfinitePostList
      posts={posts.data?.pages.flatMap((page) => page.posts)}
      isError={posts.isError}
      isLoading={posts.isLoading}
      hasMore={posts.hasNextPage}
      fetchNewPosts={posts.fetchNextPage}
    />
  );
}

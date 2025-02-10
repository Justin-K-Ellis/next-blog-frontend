import PostPreview from "@/components/custom-components/PostPreview";
import Title from "@/components/custom-components/Title";

import { Post } from "@/lib/types";

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API + "/posts";
  const response = await fetch(api);
  const posts: Array<Post> = await response.json();

  return (
    <>
      <Title text="Home" />
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

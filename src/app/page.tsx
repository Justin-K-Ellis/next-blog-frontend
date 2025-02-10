import PostPreview from "@/components/custom-components/PostPreview";

import { Post } from "@/lib/types";

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API + "/posts/20";
  const response = await fetch(api);
  const testPost: Post = await response.json();

  return <PostPreview post={testPost} />;
}

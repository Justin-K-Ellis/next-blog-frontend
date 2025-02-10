import { Post } from "@/lib/types";

export default function shortenPostContent(post: Post): string {
  const contentArray = post.content.split(" ");
  const shorterArray = contentArray.slice(0, 99);
  return shorterArray.join(" ") + "...";
}

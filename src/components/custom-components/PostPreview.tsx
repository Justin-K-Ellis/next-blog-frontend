import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Post, Tag } from "@/lib/types";
import shortenPostContent from "@/services/shortenPostContent";

export default function PostPreview({ post }: { post: Post }) {
  const contentPreview = shortenPostContent(post);

  const tagArray = post.tags.map((tag: Tag) => (
    <Badge key={tag.id}>{tag.name}</Badge>
  ));

  return (
    <Card className="p-2 rounded-sm">
      <CardTitle className="my-4 text-center">{post.title}</CardTitle>
      <CardContent className="text-justify">{contentPreview}</CardContent>
      <CardFooter>
        {/* <p>{post._count.comments} comments</p> */}
        <div className="flex flex-row gap-2">
          <p>Tags:</p>
          <div className="flex gap-1">
            {tagArray.length > 0 ? tagArray : "none"}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

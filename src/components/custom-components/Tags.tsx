import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Tag } from "@/lib/types";

export default async function Tags() {
  const tagsEndpoint = process.env.NEXT_PUBLIC_API + "/tags/list";
  const response = await fetch(tagsEndpoint);
  const tagData = await response.json();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Tags</DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        {tagData.map((tag: Tag) => (
          <DropdownMenuItem key={tag.id}>{tag.name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

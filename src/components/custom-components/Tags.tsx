import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Tags() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Tags</DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuItem>Foo</DropdownMenuItem>
        <DropdownMenuItem>Bar</DropdownMenuItem>
        <DropdownMenuItem>Bazz</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

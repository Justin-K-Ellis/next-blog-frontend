import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Categories() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuItem>Foo</DropdownMenuItem>
        <DropdownMenuItem>Bar</DropdownMenuItem>
        <DropdownMenuItem>Bazz</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

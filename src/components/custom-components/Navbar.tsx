import Link from "next/link";

import Categories from "./Categories";

export default function Navbar() {
  return (
    <nav className="flex gap-2 items-center">
      <Link href="#" className="nav-link">
        Home
      </Link>
      <Link href="#" className="nav-link">
        About
      </Link>
      <div className="nav-link">
        <Categories />
      </div>
    </nav>
  );
}

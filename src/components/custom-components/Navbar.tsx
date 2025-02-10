import Link from "next/link";

import Tags from "./Tags";

export default function Navbar() {
  return (
    <nav className="flex gap-1 md:gap-2 items-center">
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
      <div className="nav-link">
        <Tags />
      </div>
    </nav>
  );
}

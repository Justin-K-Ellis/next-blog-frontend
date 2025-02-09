import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex justify-between p-2 items-center">
      <h1 className="text-3xl font-bold">Logical Space</h1>
      <Navbar />
    </header>
  );
}

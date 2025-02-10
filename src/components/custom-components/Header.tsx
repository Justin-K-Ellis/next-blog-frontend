import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex justify-between px-2 py-8 m-8 items-center border-solid border-b border-primary">
      <h1 className="text-3xl font-bold">Logical Space</h1>
      <Navbar />
    </header>
  );
}

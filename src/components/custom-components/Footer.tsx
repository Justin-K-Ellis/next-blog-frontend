export default function Footer() {
  const date = new Date();
  return (
    <footer className="flex justify-center items-center p-12 mt-8 border-solid border-t border-primary gap-2">
      <span>Copyright {date.getFullYear()}</span>
      <span className="text-primary"> | </span>
      <span>Justin Klitgaard</span>
    </footer>
  );
}

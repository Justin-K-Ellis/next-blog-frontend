export default function Title({ text }: { text: string }) {
  return (
    <h1 className="text-2xl font-bold underline mb-10 text-center">{text}</h1>
  );
}

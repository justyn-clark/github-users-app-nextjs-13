export default function Header({ title, body }: { title: string; body?: string }) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">👩🏻‍💻 {title} 👨🏽‍💻</h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">{body}</p>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-serif text-6xl font-bold text-amber-600">404</h1>
      <h2 className="mt-4 font-serif text-2xl font-bold text-stone-900">
        Page Not Found
      </h2>
      <p className="mt-2 text-stone-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}

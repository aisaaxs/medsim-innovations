import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2 text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
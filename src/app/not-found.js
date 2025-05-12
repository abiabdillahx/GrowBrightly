// src/app/not-found.js
import Link from 'next/link';
export const metadata = {
  title: '404 Not Found - GrowBrightly',
};
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-2">You access the wrong page</p>
      <p className="text-gray-500 mb-6">We&apos;re sorry, the page you looking for is not here.</p>
      <Link href="/" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">
        Back to Home
      </Link>
    </div>
  );
}
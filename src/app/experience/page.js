import Link from 'next/link';

export default function Experience() {
  return (
    <div className="p-10">
      <Link className="fixed top-4 left-4 bg-gray-800 text-white p-2 rounded" href="/home">
        Back
      </Link>
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      {/* Add the content for this page */}
    </div>
  );
}

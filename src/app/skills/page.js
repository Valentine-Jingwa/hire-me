import Image from "next/image";

export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-lg">You can reach me at <a href="mailto:" className="text-blue-500">me[at]example[dot]com</a>.</p>
          <span className="text-blue-500">
            <span className="text-blue-500">me</span>
            <span className="text-red-500">[at]</span>
            <span className="text-yellow-500">example</span>
            <span className="text-green-500">[dot]</span>
            <span className="text-purple-500">com</span>
          </span>
      </main>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-green-500 text-6xl font-extrabold mb-4">KIDDOMOTIVATE</h1>
        <h1 className="mb-2 list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {"Grooming Kids with a difference "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold text-gradient to-blue-500 to-red-500">
            'Daily drops of Positive dew'
          </code>
          .
        </h1>
      </main>
    </div>
  );
}

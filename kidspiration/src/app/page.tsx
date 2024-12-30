import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kidspiration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-extrabold text-center mb-8">Welcome to KidSpiration!</h1>
          <p className="text-center text-lg">
            <span className="text-green-500">Daily Drops</span> of
            <span className="text-blue-500"> positive</span>
            <span className="text-yellow-500"> affirmations </span>
            <span className="text-green-500 font-bold">TO</span>
            <span className="text-purple-500"> inspire </span>
            <span className="text-orange-500"> and </span>
            <span className="text-pink-500"> motivate </span>
            <span className="text-blue-500"> your kids.</span>
          </p>
        </div>
      </main>
    </>
  );
}

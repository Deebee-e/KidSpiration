import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kidspiration</title>
        <meta name="description" content="Daily Drops of positive affirmations to inspire and motivate your kids." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold">Welcome to Kidspiration!</h1>
        </div>
      </main>
    </>
  );
}

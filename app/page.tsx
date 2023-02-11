'use client';

import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-screen-xl px-8">
        <h1>Hello world!</h1>
      </main>
    </>
  );
}

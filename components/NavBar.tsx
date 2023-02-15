'use client';

import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-col py-6 text-xl font-bold md:flex-row md:items-center md:justify-between ">
        <div className="hidden flex-row items-center justify-between md:flex">
          <h1 className="">Laurenz Guevara</h1>
        </div>
        <nav className="flex flex-wrap justify-center text-center md:block [&>a]:w-full [&>a]:py-2 md:[&>a]:px-4">
          <Link href="/">Projects</Link>
          <Link href="/">Experience</Link>
          <Link href="/">About Me</Link>
          <Link href="/">Resume</Link>
          <button
            className="pt-2 md:p-0"
            onClick={() => {
              console.log('Hi');
            }}
          >
            Contact Me
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

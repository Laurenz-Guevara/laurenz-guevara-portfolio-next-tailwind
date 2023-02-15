'use client';

import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <header className="mb-4 px-8 lg:px-20">
      <div className="mx-auto flex max-w-screen-xl flex-col py-6 text-xl font-bold lg:flex-row lg:items-center lg:justify-between ">
        <div className=" flex-row items-center justify-between lg:flex">
          <h1 className="">Laurenz Guevara</h1>
        </div>
        <nav className="flex hidden flex-wrap justify-center text-center lg:block [&>a]:w-full [&>a]:py-2 lg:[&>a]:px-4">
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

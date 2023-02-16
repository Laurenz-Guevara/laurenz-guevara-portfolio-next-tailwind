'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cliffcrafts from '../assets/preview/cliffcrafts.png';

function Cliffcrafts() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8">
        <div className="py-10">
          <Link
            href="https://www.cliffcrafts.com"
            target="_blank"
            className="border-b-4 border-palette-200 text-2xl font-bold"
          >
            Cliffcrafts
          </Link>
          <p className="py-3">
            Full stack React E-commerce site built using Typescript and SaSS,
            backend with Express.js running a REST API on Firebase cloud
            functions. Payment authentication with Stripe, CMS with Sanity.io.
          </p>
          <Image
            src={cliffcrafts}
            alt="cliffcrafts preview"
            className="mb-5 border border-palette-500"
          />
          <Link
            href="/"
            className="rounded-xl bg-palette-200 px-5 py-2 text-lg font-[500] text-white hover:bg-palette-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Cliffcrafts;

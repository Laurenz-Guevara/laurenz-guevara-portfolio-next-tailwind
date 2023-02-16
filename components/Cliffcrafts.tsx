'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cliffcrafts from '../assets/preview/cliffcrafts.png';

import reactIcon from '../assets/icons/react.png';
import sassIcon from '../assets/icons/sass.png';
import expressIcon from '../assets/icons/express.png';
import stripeIcon from '../assets/icons/stripe.png';

function Cliffcrafts() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8">
        <div className="pt-10">
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
            href="https://www.cliffcrafts.com"
            target="_blank"
            className="rounded-xl bg-palette-200 px-5 py-2 text-lg font-[500] text-white hover:bg-palette-300"
          >
            Visit Site
          </Link>
        </div>
        <div className="pt-10">
          <h1 className="max-w-fit border-b-4 border-palette-200 text-2xl font-bold">
            Technology Stack
          </h1>
          <div className="grid grid-cols-stack justify-between pt-3">
            <div className="py-2 text-center">
              <Image
                src={reactIcon}
                alt="react logo"
                className="mb-1 max-h-10 w-[unset]"
              />
              <p className="text-xl font-bold">React</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={sassIcon}
                alt="react logo"
                className="mb-1 max-h-10 w-[unset]"
              />
              <p className="text-xl font-bold">Sass</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={expressIcon}
                alt="react logo"
                className="mb-1 max-h-10 w-[unset]"
              />
              <p className="text-xl font-bold">Express.js</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={stripeIcon}
                alt="react logo"
                className="mb-1 max-h-10 w-[unset]"
              />
              <p className="text-xl font-bold">Stripe</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Cliffcrafts;

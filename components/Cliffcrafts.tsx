'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cliffcrafts from '../assets/preview/cliffcrafts.png';

import reactIcon from '../assets/icons/react.png';
import sassIcon from '../assets/icons/sass.png';
import expressIcon from '../assets/icons/express.png';
import stripeIcon from '../assets/icons/stripe.png';
import figma from '../assets/icons/figma.png';
import firebase from '../assets/icons/firebase.png';
import cloudfunctions from '../assets/icons/cloud-functions.png';
import github from '../assets/icons/github.png';
import sanity from '../assets/icons/sanity.png';
import typescript from '../assets/icons/typescript.png';

function Cliffcrafts() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8 lg:px-20">
        <div className="lg:wrap pt-10 lg:flex">
          <div>
            <Link
              href="https://www.cliffcrafts.com"
              target="_blank"
              className="border-b-4 border-palette-200 text-2xl font-bold"
            >
              Cliffcrafts
            </Link>
            <p className="py-3 lg:pr-12">
              Full stack React E-commerce site built using Typescript and SaSS,
              backend with Express.js running a REST API on Firebase cloud
              functions. Payment authentication with Stripe, CMS with Sanity.io.
            </p>
            <Link
              href="https://www.cliffcrafts.com"
              target="_blank"
              className="hidden rounded-xl bg-palette-200 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 lg:inline"
            >
              Visit Site
            </Link>
          </div>
          <Image
            src={cliffcrafts}
            alt="cliffcrafts preview"
            className="mb-5 border border-palette-500 shadow-main lg:w-6/12"
          />
          <Link
            href="https://www.cliffcrafts.com"
            target="_blank"
            className="rounded-xl bg-palette-200 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 lg:hidden"
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
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">React</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={sassIcon}
                alt="sass logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Sass</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={expressIcon}
                alt="express logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Express.js</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={stripeIcon}
                alt="stripe logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Stripe</p>
            </div>
            {/*  */}
            <div className="py-2 text-center">
              <Image
                src={figma}
                alt="stripe logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Figma</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={firebase}
                alt="stripe logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Firebase</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={cloudfunctions}
                alt="stripe logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Cloud Functions</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={github}
                alt="stripe logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Github</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={sanity}
                alt="stripe logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Sanity</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={typescript}
                alt="stripe logo"
                className="md:max-h-18 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-14 lg:max-h-20"
              />
              <p className="text-xl font-bold">Typescript</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="max-w-fit border-b-4 border-palette-200 text-2xl font-bold">
            Design
          </h1>
          <div className="flex justify-between pt-4 font-bold lg:pt-8">
            <div>
              <div className="h-20 w-20 rounded-full bg-palette-400 shadow-main lg:h-40 lg:w-40"></div>
              <p className="py-2 text-center">#232323</p>
            </div>
            <div>
              <div className="h-20 w-20 rounded-full bg-palette-200 shadow-main lg:h-40 lg:w-40"></div>
              <p className="py-2 text-center"> #da291d</p>
            </div>
            <div>
              <div className="h-20 w-20 rounded-full bg-white shadow-main lg:h-40 lg:w-40"></div>
              <p className="py-2 text-center">#ffffff</p>
            </div>
          </div>
          <section className="my-8 grid grid-cols-duo gap-x-4 border-x-2 border-dashed">
            <div className="mx-auto font-bold">
              <h1>Teko Bold</h1>
              <p>a b c d e f g h i j k l m</p>
              <p>n o p q r s t u v w x y z</p>
              <p>1 2 3 4 5 6 7 8 9</p>
            </div>
            <div className="mx-auto min-w-full font-normal">
              <h1>Teko Regular</h1>
              <p>a b c d e f g h i j k l m</p>
              <p>n o p q r s t u v w x y z</p>
              <p>1 2 3 4 5 6 7 8 9</p>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Cliffcrafts;

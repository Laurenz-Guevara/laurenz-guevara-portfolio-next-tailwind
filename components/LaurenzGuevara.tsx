'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import laurenzGuevara from '../assets/preview/laurenz-guevara.png';

import next from '../assets/icons/next.png';
import tailwind from '../assets/icons/tailwind.png';
import typescript from '../assets/icons/typescript.png';
import figma from '../assets/icons/figma.png';
import vercel from '../assets/icons/vercel.png';
import github from '../assets/icons/github.png';
import sanity from '../assets/icons/sanity.png';
import robotoBold from '../assets/fonts/roboto-bold.png';
import robotoRegular from '../assets/fonts/roboto-regular.png';

function LaurenzGuevara() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8 lg:px-20">
        <div className="lg:wrap pt-10 lg:flex">
          <div>
            <a
              href="#splashpage"
              className="border-b-4 border-palette-300 text-2xl font-bold hover:opacity-70"
            >
              Portfolio
            </a>
            <p className="py-3 lg:pr-12">
              Portfolio built with Next.js and styled using tailwind.
            </p>
            <p className="py-3 lg:pr-12">
              First using Figma to create wireframes / designs and then
              translate those designs. Using Lighthouse to optimise metrics and
              automated deployments through Vercel.
            </p>
            <a
              href="#splashpage"
              className="hidden rounded-xl bg-palette-300 px-5 py-1 text-lg font-[500] text-white hover:opacity-90 lg:inline"
            >
              Back To Top
            </a>
          </div>
          <Image
            src={laurenzGuevara}
            alt="ventus verba preview"
            className="mb-5 border border-palette-500 shadow-main lg:w-6/12"
          />
          <a
            href="#splashpage"
            className="rounded-xl bg-palette-300 px-5 py-1 text-lg font-[500] text-white hover:opacity-90 lg:hidden"
          >
            Back To Top
          </a>
        </div>
        <div className="pt-10">
          <h1 className="max-w-fit border-b-4 border-palette-300 text-2xl font-bold">
            Technology Stack
          </h1>
          <div className="grid grid-cols-short justify-between pt-3 xsm:grid-cols-xshort lg:grid-cols-stack">
            <div className="py-2 text-center">
              <Image
                src={next}
                alt="nextjs logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Next</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={typescript}
                alt="typescript logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Typescript</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={tailwind}
                alt="tailwind logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Tailwind</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={figma}
                alt="figma logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Figma</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={vercel}
                alt="vercel logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Vercel</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={github}
                alt="github logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Github</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="max-w-fit border-b-4 border-palette-300 text-2xl font-bold">
            Design
          </h1>
          <div className="flex flex-wrap justify-between pt-4 font-bold lg:pt-8">
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-palette-400 shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center">#232323</p>
            </div>
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-palette-300 shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center"> #35344e</p>
            </div>
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-palette-100 shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center"> #cc002a</p>
            </div>
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-white shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center">#ffffff</p>
            </div>
          </div>
          <section className="my-8 grid gap-x-4 border-x-2 border-dashed sm:grid-cols-duo md:my-14">
            <div>
              <Image
                src={robotoBold}
                alt="text bold typeface"
                className="mx-auto px-6 pb-4 sm:pb-0"
              />
            </div>
            <div>
              <Image
                src={robotoRegular}
                alt="teko regular typeface"
                className="mx-auto px-6"
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default LaurenzGuevara;

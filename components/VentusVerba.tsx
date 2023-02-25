'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ventusVerba from '../assets/preview/ventus-verba.png';

import reactIcon from '../assets/icons/react.png';
import sassIcon from '../assets/icons/sass.png';
import javascriptIcon from '../assets/icons/javascript.png';
import figma from '../assets/icons/figma.png';
import firebase from '../assets/icons/firebase.png';
import github from '../assets/icons/github.png';
import sanity from '../assets/icons/sanity.png';
import robotoBold from '../assets/fonts/roboto-bold.png';
import robotoRegular from '../assets/fonts/roboto-regular.png';

function VentusVerba() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8 lg:px-20">
        <div className="lg:wrap pt-10 lg:flex">
          <div className="lg:text-xl">
            <Link
              href="https://ventus-verba.web.app"
              target="_blank"
              className="border-b-4 border-palette-100 text-2xl font-bold hover:opacity-70"
            >
              Ventus Verba
            </Link>
            <div className="max-w-screen-lg pb-3 lg:pr-12 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-3 [&>h1]:text-xl [&>h1]:font-bold">
              <p className="py-3 lg:pr-12">
                CMS-driven React site with API calls to Sanity using GROQ and
                deployed with Firebase. Online repository for interesting or
                useful words.
              </p>
              <h1>Front End</h1>
              <p>React, Javascript, SCSS</p>
              <h1>Back End</h1>
              <p>Sanity.io Content Management System, Firebase</p>
            </div>
            <Link
              href="https://ventus-verba.web.app"
              target="_blank"
              className="hidden rounded-xl bg-palette-100 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 lg:inline"
            >
              Visit Site
            </Link>
          </div>
          <Image
            src={ventusVerba}
            alt="ventus verba preview"
            className="mb-5 h-fit border border-palette-500 object-contain shadow-main lg:w-6/12"
          />
          <Link
            href="https://ventus-verba.web.app/"
            target="_blank"
            className="rounded-xl bg-palette-100 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 lg:hidden"
          >
            Visit Site
          </Link>
        </div>
        <div className="pt-10">
          <h1 className="max-w-fit border-b-4 border-palette-100 text-2xl font-bold">
            Technology Stack
          </h1>
          <div className="grid grid-cols-short justify-between pt-3 xsm:grid-cols-xshort lg:grid-cols-stack">
            <div className="py-2 text-center">
              <Image
                src={reactIcon}
                alt="react logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">React</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={javascriptIcon}
                alt="sass logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Javascript</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={sassIcon}
                alt="javascript logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Sass</p>
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
                src={firebase}
                alt="stripe logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Firebase</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={github}
                alt="github logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Github</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={sanity}
                alt="sanity logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Sanity</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="max-w-fit border-b-4 border-palette-100 text-2xl font-bold">
            Design
          </h1>
          <div className="flex flex-wrap justify-between pt-4 font-bold lg:pt-8">
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-palette-300 shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center">#35344e</p>
            </div>
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-palette-600 shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center"> #a50022</p>
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

export default VentusVerba;

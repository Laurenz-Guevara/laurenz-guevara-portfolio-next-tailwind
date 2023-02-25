'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import repetise from '../assets/preview/repetise.png';

import reactIcon from '../assets/icons/react.png';
import sassIcon from '../assets/icons/sass.png';
import javascriptIcon from '../assets/icons/javascript.png';
import adobeXd from '../assets/icons/adobe-xd.png';
import firestore from '../assets/icons/firestore.jpeg';
import firebase from '../assets/icons/firebase.png';
import firebaseAuth from '../assets/icons/fireauth.png';
import github from '../assets/icons/github.png';
import ralewayBold from '../assets/fonts/raleway-bold.png';
import ralewayRegular from '../assets/fonts/raleway-regular.png';

function Repetise() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8 lg:px-20">
        <div className="lg:wrap pt-10 lg:flex">
          <div className="lg:text-xl">
            <Link
              href="https://repetise.com/welcome-to-repetise"
              target="_blank"
              className="border-b-4 border-palette-700 text-2xl font-bold hover:opacity-70"
            >
              Repetise
            </Link>
            <div className="max-w-screen-lg pb-3 lg:pr-12 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-3 [&>h1]:text-xl [&>h1]:font-bold">
              <p className="pt-3">
                React based project, styled with Scss, using Firebase to provide
                Authentication, Database, and deployment. Frequency of
                flashcards are shown based on a spaced repetition algorithm
                calculated after each session.
              </p>
              <h1>Front End</h1>
              <p>React, Javascript, SCSS</p>
              <h1>Back End</h1>
              <p>Firestore Database, Firebase Authentication</p>
            </div>
            <Link
              href="https://repetise.com/welcome-to-repetise"
              target="_blank"
              className="hidden rounded-xl bg-palette-700 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 lg:inline"
            >
              Visit Site
            </Link>
          </div>
          <Image
            src={repetise}
            alt="repetise preview"
            className="mb-5 h-fit border border-palette-500 object-contain shadow-main lg:w-6/12"
          />
          <Link
            href="https://repetise.com/welcome-to-repetise"
            target="_blank"
            className="rounded-xl bg-palette-700 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 lg:hidden"
          >
            Visit Site
          </Link>
        </div>
        <div className="pt-10">
          <h1 className="max-w-fit border-b-4 border-palette-700 text-2xl font-bold">
            Technology Stack
          </h1>
          <div className="xsm:grid-cols-200 grid grid-cols-400 justify-between pt-3 lg:grid-cols-700">
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
                src={adobeXd}
                alt="adobe xd logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Adobe XD</p>
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
                src={firestore}
                alt="firebase firestore logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Firestore</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={firebaseAuth}
                alt="firebase authentication logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Auth</p>
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
          <h1 className="max-w-fit border-b-4 border-palette-700 text-2xl font-bold">
            Design
          </h1>
          <div className="flex flex-wrap justify-between pt-4 font-bold lg:pt-8">
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-palette-800 shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center">#333333</p>
            </div>
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-palette-700 shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center"> #4ed4f8</p>
            </div>
            <div>
              <div className="mx-1 h-20 w-20 rounded-full bg-white shadow-main lg:h-28 lg:w-28"></div>
              <p className="py-2 text-center">#ffffff</p>
            </div>
          </div>
          <section className="my-8 grid gap-x-4 border-x-2 border-dashed sm:grid-cols-duo md:my-14">
            <div>
              <Image
                src={ralewayBold}
                alt="text bold typeface"
                className="mx-auto px-6 pb-4 sm:pb-0"
              />
            </div>
            <div>
              <Image
                src={ralewayRegular}
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

export default Repetise;

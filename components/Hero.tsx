'use client';

import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

import mockup from '../assets/mockups/mockup.png';
import mockupSide from '../assets/mockups/mockup-side.png';
import redBubble from '../assets/shapes/red-bubbles.svg';
import redElipse from '../assets/shapes/red-elipse.svg';
import blueElipse from '../assets/shapes/blue-elipse.svg';
import arrowDown from '../assets/shapes/arrow-down.svg';

function Hero() {
  return (
    <main className="mx-auto h-[100svh] max-w-screen-xl overflow-hidden">
      <NavBar />
      <div className="place-content-center px-8 lg:grid lg:min-h-[calc(100vh_-_83px)] lg:grid-cols-duo lg:grid-rows-1 lg:px-20">
        <div className="self-center">
          <Image
            src={redBubble}
            alt="Mockup Front"
            className="hidden pb-8 lg:block"
          />
          <p className="hidden text-xl font-bold lg:block lg:text-base">
            Web Developer, Tinkerer and Mad Scientist
          </p>
          <h1 className="px-8 pt-4 pb-10 text-center text-3xl font-bold md:text-4xl lg:py-0 lg:px-0 lg:pr-6 lg:text-start lg:text-5xl xl:pr-0 xl:text-6xl">
            Providing fantastic digital experiences.
          </h1>
          <button
            onClick={() => console.log('hi')}
            className="my-5 hidden rounded-full bg-palette-100 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 lg:block lg:text-xl"
          >
            VIEW PORTFOLIO
          </button>
        </div>
        <div className="-mb-10 ml-[27px] flex justify-center self-end lg:ml-0">
          <div>
            <Image
              src={mockup}
              alt="Mockup Front"
              className="z-10"
              width={177}
            />
            <Image
              src={blueElipse}
              alt="Mockup Front"
              className="relative bottom-36 right-14 -z-10"
            />
          </div>
          <div className="-mt-36">
            <Image
              src={redElipse}
              alt="Mockup Front"
              className="relative -right-7 top-36  -z-10"
            />
            <Image
              src={mockupSide}
              alt="Mockup Front"
              className="z-10"
              width={177}
            />
          </div>
        </div>
        <div className="pt-4 text-center">
          <p className="text-lg font-bold lg:hidden">
            Web Developer, Tinkerer and Mad Scientist
          </p>
          <button
            onClick={() => console.log('hi')}
            className="my-5 mb-12 rounded-full bg-palette-100 px-5 py-2 text-xl font-[500] text-white hover:bg-palette-300 hover:text-white lg:hidden lg:text-lg"
          >
            VIEW PORTFOLIO
          </button>
        </div>
        <div className="col-span-2 hidden text-center text-xl font-bold lg:block">
          <h1>See More</h1>
          <Image
            src={arrowDown}
            alt="Mockup Front"
            className="mx-auto pb-10 pt-2"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;

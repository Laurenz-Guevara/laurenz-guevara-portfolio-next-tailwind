'use client';

import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

import mockup from '../assets/mockup.svg';
import mockupSide from '../assets/mockup-side.svg';
import redBubble from '../assets/red-bubbles.svg';
import redElipse from '../assets/red-elipse.svg';
import blueElipse from '../assets/blue-elipse.svg';
import arrowDown from '../assets/arrow-down.svg';

function Hero() {
  return (
    <main className=" mx-auto min-h-screen  max-w-screen-xl px-4 md:px-6 lg:px-8">
      <NavBar />

      <div className="grid min-h-[calc(100vh_-_83px)] grid-cols-2 grid-rows-1 place-content-center">
        <div className="self-center">
          <Image src={redBubble} alt="Mockup Front" className="pb-8" />
          <p className="text-xl font-bold">
            Web Developer, Tinkerer and Mad Scientist
          </p>
          <h1 className="text-6xl font-bold">
            Providing fantastic digital experiences.
          </h1>
          <button
            onClick={() => console.log('hi')}
            className="my-5 rounded-full bg-palette-100 px-5 py-1 text-lg font-[500] text-white hover:bg-palette-300 hover:text-white"
          >
            VIEW PORTFOLIO
          </button>
        </div>
        <div className="-mb-10 flex justify-center self-end">
          <div>
            <Image src={mockup} alt="Mockup Front" className="z-10 mx-6" />
            <Image
              src={blueElipse}
              alt="Mockup Front"
              className="relative bottom-36 right-5 -z-10"
            />
          </div>
          <div className="-mt-36">
            <Image
              src={redElipse}
              alt="Mockup Front"
              className="relative -right-10 top-36  -z-10"
            />
            <Image src={mockupSide} alt="Mockup Front" className="z-10" />
          </div>
        </div>
        <div className="col-span-2 text-center text-xl font-bold">
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

// margin-top: -120px
//top 140px
//right -40px

export default Hero;

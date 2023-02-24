'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import mmtdigital from '../assets/icons/mmtdigital.png';

function WorkExperience() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8 lg:px-20">
        <div className="lg:wrap py-10 lg:flex">
          <div>
            <h1 className="w-min whitespace-nowrap border-b-4 border-palette-1000 text-2xl font-bold">
              Work Experience
            </h1>
            <div className="flex pt-3">
              <Image
                src={mmtdigital}
                alt="mmt digital logo"
                className="max-h-20 w-[unset] pr-3"
              />
              <div>
                <Link
                  href="https://mmtdigital.co.uk/"
                  target="_blank"
                  className="text-2xl font-bold hover:opacity-70"
                >
                  MMT Digital
                </Link>
                <p className="text-lg">2 Years, 4 Months</p>
              </div>
            </div>
            <ul className="max-w-screen-lg py-6 lg:text-xl">
              <li className="list-inside list-disc text-xl font-bold">
                Web Application Support Engineer
              </li>
              <li className="pl-[26px]">
                Developed with React, HTML, CSS, and JavaScript to build and
                maintain websites for over 12 different clients. Communicated
                with stakeholders and client teams on a weekly basis. Performed
                deployments, CMS changes and monitoring reports
              </li>
              <li className="list-inside list-disc pt-4 text-xl font-bold">
                Associate Engineer
              </li>
              <li className="pl-[26px]">
                Engaging in hands-on delivery of digital solutions with
                measurable value to clients, as part of an agile development
                team. To help to deliver working software solutions that meet
                the quality and productivity standards of MMT Digital teams.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WorkExperience;

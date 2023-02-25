/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import mmtdigital from '../assets/icons/mmtdigital.png';
import gatsbyIcon from '../assets/icons/gatsby.png';
import dotNetIcon from '../assets/icons/dotnet.svg';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import reactIcon from '../assets/icons/react.png';
import javascriptIcon from '../assets/icons/javascript.png';
import sassIcon from '../assets/icons/sass.png';
import jiraIcon from '../assets/icons/jira.png';
import azureIcon from '../assets/icons/azure.webp';
import bitbucketIcon from '../assets/icons/bitbucket.jpg';
import kenticoIcon from '../assets/icons/kentico.png';
import kontentIcon from '../assets/icons/kontent.webp';

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
            <div className="max-w-screen-lg py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
              <h1 className="text-xl ">Web Application Support Engineer</h1>
              <p>
                Developed with
                <strong> React</strong>, <strong>HTML</strong>,
                <strong> CSS/SCSS</strong>, and <strong>JavaScript</strong> to
                build and maintain websites for over 12 different clients.
                Communicated with stakeholders and client teams on a weekly
                basis. Performed deployments, CMS changes and monitoring
                reports.
              </p>
              <h1>My Role at MMT:</h1>
              <ul className="pl-6 [&>li]:list-disc [&>li]:pb-1">
                <li>
                  Built new accessible and mobile-friendly pages, forms and
                  components on both <strong>React</strong> and
                  <strong> .NET</strong> websites.
                </li>
                <li>
                  Developed with <strong>RESTful API's</strong> and
                  <strong> Content Management Systems</strong> such as Kentico
                  and Kontent.
                </li>
                <li>
                  Designed and implemented new features in accordance with
                  clients both alone and with other developers in an
                  <strong> agile </strong>
                  environment.
                </li>
                <li>
                  Collaborated with a UX designer and translated Adobe XD
                  designs into working components.
                </li>
                <li>
                  Frequently deployed production-ready environments with
                  <strong> Azure</strong>.
                </li>
                <li>
                  Troubleshooting and resolving both <strong>Front-end </strong>
                  and <strong>Back-end</strong> bugs within tight response
                  deadlines.
                </li>
                <li>
                  Performed <strong>critical incident management </strong> and
                  provided monthly <strong>monitoring reports</strong> to
                  clients.
                </li>
              </ul>
            </div>
            <Link
              className="rounded-xl bg-palette-1000 px-5 py-1 text-lg font-[500] text-white hover:opacity-70"
              href="https://drive.google.com/file/d/1MjH3CjQ_EyPBD4TAiLlLFRR2vHBYrs4H/view"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="pb-10">
          <h1 className="max-w-fit border-b-4 border-palette-1000 text-2xl font-bold">
            Technical Skills
          </h1>
          <div className="grid grid-cols-400 justify-between pt-3 xsm:grid-cols-200 lg:grid-cols-600">
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
                src={gatsbyIcon}
                alt="gatsby logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Gatsby</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={javascriptIcon}
                alt="javascript logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Javascript</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={htmlIcon}
                alt="html logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">HTML</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={cssIcon}
                alt="css logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">CSS</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={sassIcon}
                alt="sass logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Sass</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={dotNetIcon}
                alt="dot net logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">.NET Core</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={jiraIcon}
                alt="jira logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Jira</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={azureIcon}
                alt="azure logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Azure</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={bitbucketIcon}
                alt="bitbucket logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Bitbucket</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={kenticoIcon}
                alt="kentico logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Kentico</p>
            </div>
            <div className="py-2 text-center">
              <Image
                src={kontentIcon}
                alt="kontent logo"
                className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
              />
              <p className="text-xl font-bold">Kontent</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WorkExperience;

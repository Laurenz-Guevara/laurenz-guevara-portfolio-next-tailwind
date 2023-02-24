/* eslint-disable react/no-unescaped-entities */
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
            <div className="max-w-screen-lg py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
              <h1 className="text-xl ">Web Application Support Engineer</h1>
              <p>
                Developed with React, HTML, CSS/SCSS, and JavaScript to build
                and maintain websites for over 12 different clients.
                Communicated with stakeholders and client teams on a weekly
                basis. Performed deployments, CMS changes and monitoring
                reports.
              </p>
              <h1>My Role at MMT:</h1>
              <ul className="pl-6 [&>li]:list-disc [&>li]:pb-1">
                <li>
                  Built new accessable and mobile-friendly pages, forms and
                  components on both React and .NET websites.
                </li>
                <li>
                  Develop with RESTful API's and Content Management Systems such
                  as Kentico and Kontent.
                </li>
                <li>
                  Design and implement new features in accordance with clients
                  both alone and with other developers in an agile environment.
                </li>
                <li>
                  Collaborated with a UX designer and translated Adobe XD
                  designs into working components.
                </li>
                <li>
                  Deployed production ready environments with Azure Pipelines.
                </li>
                <li>
                  Troubleshooting and resolved both Front-end and Back-end bugs
                  within tight response deadlines.
                </li>
                <li>
                  Performed critical incident management and provided monthly
                  monitoring reports.
                </li>
                <li>
                  Worked with tools such as Confluence, Kanban, Azure DevOps,
                  Bitbucket, Jira, GitHub and Adobe Suite.
                </li>
              </ul>
            </div>
            <Link
              className="rounded-xl bg-palette-1000 px-5 py-1 text-lg font-[500] text-white hover:opacity-90"
              href="https://drive.google.com/file/d/1_t_9bJkklSoHVZNUOepd_WSDRFRP7gkP/view"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WorkExperience;

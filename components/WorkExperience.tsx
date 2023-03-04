/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import reactIcon from '../assets/icons/react.png';

import ContentfulImage from './ContentfulImage';
import RichText from './RichText';

function WorkExperience({ experience }: Experience) {
  const {
    postTitle,
    thumbnail,
    companyName,
    employmentDuration,
    role,
    roleDescription,
    roleDuties,
    technologyStackImages,
  } = experience[0].fields;

  console.log('hi', technologyStackImages[0].fields);

  return (
    <section className="mx-auto max-w-screen-xl">
      <section className="px-8 lg:px-20">
        <div className="lg:wrap py-10 lg:flex">
          <div>
            <h1 className="w-min whitespace-nowrap border-b-4 border-palette-1000 text-2xl font-bold">
              {postTitle}
            </h1>
            <div className="flex pt-3">
              <ContentfulImage
                alt={`Cover Image for ${companyName}`}
                src={thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                className="max-h-20 w-[unset] pr-3"
              />
              <div>
                <Link
                  href="https://mmtdigital.co.uk/"
                  target="_blank"
                  className="text-2xl font-bold hover:opacity-70"
                >
                  {companyName}
                </Link>
                <p className="text-lg">{employmentDuration}</p>
              </div>
            </div>
            <div className="max-w-screen-lg py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
              <h1 className="text-xl ">{role}</h1>
              <RichText content={roleDescription} />
              <h1>My Role at MMT:</h1>
              <RichText content={roleDuties} />
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
            Technical Skills at MMT
          </h1>
          <div className="grid grid-cols-400 justify-between pt-3 xsm:grid-cols-200 lg:grid-cols-600">
            {technologyStackImages.map((tech: any, idx: number) => (
              <div key={idx} className="py-2 text-center">
                <ContentfulImage
                  alt={`Icon of ${tech.fields.technologyName}`}
                  src={tech.fields.technologyIcon.fields.file.url}
                  width={
                    tech.fields.technologyIcon.fields.file.details.image.width
                  }
                  height={
                    tech.fields.technologyIcon.fields.file.details.image.height
                  }
                  className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
                />
                <p className="text-xl font-bold">
                  {tech.fields.technologyName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default WorkExperience;

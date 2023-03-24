'use client';

import React from 'react';
import Link from 'next/link';

import RichText from './RichText';
import ContentfulImage from './ContentfulImage';

function PortfolioSection({ portfolios }: Portfolios) {
  return (
    <>
      {portfolios.map((item: Portfolio, idx: number) => (
        <section key={idx}>
          <div
            id={item.fields.title}
            className="h-10"
            style={{ backgroundColor: `${item.fields.hexTheme}` }}
          ></div>
          <div className="mx-auto max-w-screen-xl px-8 lg:px-20">
            <div className="lg:wrap pt-10 lg:flex">
              <div>
                <Link
                  href={item.fields.slug}
                  target="_blank"
                  className="border-b-4 text-2xl font-bold hover:opacity-70"
                  style={{ borderColor: `${item.fields.hexTheme}` }}
                >
                  {item.fields.title}
                </Link>
                <div className="max-w-screen-lg py-3 lg:pr-12 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-3 [&>h1]:text-xl [&>h1]:font-bold">
                  <RichText content={item.fields.description} />
                </div>
                <Link
                  href={item.fields.slug}
                  target="_blank"
                  className="hidden rounded-xl px-5 py-1 text-lg font-[500] text-white hover:opacity-70 lg:inline"
                  style={{ backgroundColor: `${item.fields.hexTheme}` }}
                >
                  Visit Site
                </Link>
              </div>
              <ContentfulImage
                alt={`Image for ${item.fields.title} website`}
                src={item.fields.imagePreview.fields.file.url}
                width={item.fields.imagePreview.fields.file.details.image.width}
                height={
                  item.fields.imagePreview.fields.file.details.image.height
                }
                className="mb-5 h-fit border object-contain shadow-main lg:w-6/12"
              />
              <Link
                href={item.fields.slug}
                target="_blank"
                className="rounded-xl px-5 py-1 text-lg font-[500] text-white hover:opacity-70 lg:hidden"
                style={{ backgroundColor: `${item.fields.hexTheme}` }}
              >
                Visit Site
              </Link>
            </div>
            <div className="pt-10">
              <h1
                className="max-w-fit border-b-4 text-2xl font-bold"
                style={{ borderColor: `${item.fields.hexTheme}` }}
              >
                Technology Stack
              </h1>
              <div className="grid grid-cols-400 justify-between pt-3 xsm:grid-cols-200 lg:grid-cols-700">
                {item.fields.technologyStackImages.map(
                  (tech: any, idx: number) => (
                    <div key={idx} className="py-2 text-center">
                      <ContentfulImage
                        alt={`Icon of ${tech.fields.technologyName}`}
                        src={tech.fields.technologyIcon.fields.file.url}
                        width={
                          tech.fields.technologyIcon.fields.file.details.image
                            .width
                        }
                        height={
                          tech.fields.technologyIcon.fields.file.details.image
                            .height
                        }
                        className="md:max-h-18 lg:max-h-13 mx-auto mb-1 max-h-10 w-[unset] sm:max-h-12"
                      />
                      <p className="text-xl font-bold">
                        {tech.fields.technologyName}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="pt-5">
              <h1
                className="max-w-fit border-b-4 text-2xl font-bold"
                style={{ borderColor: `${item.fields.hexTheme}` }}
              >
                Design
              </h1>
              <div className="flex flex-wrap justify-between pt-4 font-bold lg:pt-8">
                {item.fields.hexColours.map((color: string, idx: number) => (
                  <div key={idx}>
                    <div
                      className="bg-palette-[{color}] mx-1 h-20 w-20 rounded-full shadow-main lg:h-28 lg:w-28"
                      style={{ background: `${color}` }}
                    ></div>
                    <p className="py-2 text-center">{color}</p>
                  </div>
                ))}
              </div>
              <section className="my-8 grid gap-x-4 border-x-2 border-dashed sm:grid-cols-duo md:my-14">
                {item.fields.fontFace.map((image: any, idx: number) => (
                  <ContentfulImage
                    key={idx}
                    alt={`Image showing ${image.fields.title} font face`}
                    src={image.fields.file.url}
                    width={image.fields.file.details.image.width}
                    height={image.fields.file.details.image.height}
                    className="mx-auto px-6 pb-4 sm:pb-0"
                  />
                ))}
              </section>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default PortfolioSection;

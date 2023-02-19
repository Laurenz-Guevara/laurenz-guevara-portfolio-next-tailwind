import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <>
      <section className="w-full bg-palette-900">
        <div className="mx-auto max-w-screen-xl px-8 py-6 text-lg lg:grid lg:grid-cols-short lg:gap-8 lg:py-8 lg:px-20">
          <div className="pb-4 text-white lg:p-0">
            <h1 className="flex justify-between py-1 text-2xl">Portfolio</h1>
            <p className="py-1">Built by Laurenz Guevara</p>
          </div>
          <div className="pb-4 text-white  lg:p-0">
            <h1 className="flex justify-between py-1 text-2xl">Live Sites</h1>
            <Link
              className="block py-1"
              href="https://cliffcrafts.com"
              target="_blank"
            >
              Cliffcrafts
            </Link>
            <Link
              className="block py-1"
              href="https://repetise.com"
              target="_blank"
            >
              Repetise
            </Link>
            <Link
              className="block py-1"
              href="https://ventus-verba.web.app"
              target="_blank"
            >
              Ventus Verba
            </Link>
          </div>
          <div className="pb-4 text-white lg:p-0 ">
            <h1 className="flex justify-between py-1 text-2xl">Other</h1>
            <Link
              className="flex items-center py-1"
              href="https://drive.google.com/file/d/1jxxvBdGwJ3iObvrrEutKBmouJF5a9-Wk/view"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFileAlt as IconProp}
                className="mr-2 inline w-5"
              />
              Resume
            </Link>
            <Link
              className="flex items-center py-1"
              href="https://github.com/Laurenz-Guevara"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub as IconProp}
                className="mr-2 inline w-5"
              />
              GitHub
            </Link>
          </div>
          <div className="pb-4 text-white lg:p-0 ">
            <h1 className="flex justify-between py-1 text-2xl">Contact Me</h1>
            <Link
              className="flex items-center py-1"
              href="mailto:laurenzguevara@outlook.com"
            >
              <FontAwesomeIcon
                icon={faPaperPlane as IconProp}
                className="mr-2 inline w-5"
              />
              Email
            </Link>
            <Link
              className="flex items-center py-1"
              href="https://www.linkedin.com/in/laurenzguevara"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin as IconProp}
                className="mr-2 inline w-5"
              />
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { textLeft, textRight, textUp } from '../animation/motion';

function NavBar() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header
      className={
        openBurger
          ? 'mb-6 rounded-b-[30px] px-8 shadow-nav transition-all duration-300 lg:mb-0 lg:rounded-none lg:px-20 lg:shadow-none'
          : 'mb-6 px-8 lg:mb-0 lg:px-20'
      }
    >
      <div className="z-10 mx-auto flex max-w-screen-xl flex-col pt-3 pb-2 text-2xl font-bold lg:flex-row lg:items-center lg:justify-between lg:py-6">
        <div className=" flex flex-row items-center justify-between">
          <motion.h1
            animate={textRight.show}
            initial={textRight.hidden}
            transition={{ duration: 0.7 }}
          >
            Laurenz Guevara
          </motion.h1>
          <motion.div
            animate={textLeft.show}
            initial={textLeft.hidden}
            transition={{ duration: 0.7 }}
          >
            <FontAwesomeIcon
              className="lg:hidden"
              icon={faBars as IconProp}
              height={30}
              width={24}
              onClick={() => {
                setOpenBurger(!openBurger);
              }}
            />
          </motion.div>
        </div>
        <motion.nav
          animate={textLeft.show}
          initial={textLeft.hidden}
          transition={{ duration: 0.7 }}
          className={
            openBurger
              ? 'flex flex-wrap justify-center pt-4 text-center lg:block lg:bg-white [&>a]:w-full [&>a]:py-2 lg:[&>a]:px-4'
              : 'hidden flex-wrap justify-center text-center lg:block [&>a]:w-full [&>a]:py-2 lg:[&>a]:px-4'
          }
        >
          <a
            className="hover:opacity-70"
            href="#cliffcrafts"
            onClick={() => {
              setOpenBurger(false);
            }}
          >
            Projects
          </a>
          <a
            className="hover:opacity-70"
            href="#experience"
            onClick={() => {
              setOpenBurger(false);
            }}
          >
            Experience
          </a>
          <Link
            className="hover:opacity-70"
            href="https://drive.google.com/file/d/1_t_9bJkklSoHVZNUOepd_WSDRFRP7gkP/view"
            target="_blank"
          >
            Resume
          </Link>
          <Link
            className="hover:opacity-70"
            href="mailto:laurenzguevara@outlook.com"
          >
            Contact Me
          </Link>
        </motion.nav>
      </div>
    </header>
  );
}

export default NavBar;

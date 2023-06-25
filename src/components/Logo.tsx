'use client';
import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const MotionLink = motion(Link);

const Logo = (props: Props) => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
        whileHover={{
          backgroundColor:["#121212", "#19332b", "#6d6e3a", "#36415e", "#5f7453", "#623f3f"],
          transition:{duration:10, repeat: Infinity}
        }}
      >
        SS
      </MotionLink>
    </div>
  );
};

export default Logo;
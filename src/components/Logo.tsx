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
        className='w-16 h-16 bg-white text-dark flex items-center justify-center rounded-full text-2xl font-bold'
        whileHover={{
          backgroundColor:["#ffffff", "#98f5d9", "#f4f5bf", "#9eb6f8", "#b8eb9b", "#ffffff"],
          transition:{duration:10, repeat: Infinity}
        }}
      >
        SS
      </MotionLink>
    </div>
  );
};

export default Logo;
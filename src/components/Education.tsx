"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

type DetailsProps = {
  type: string,
  time: string,
  place: string,
  info: string,
};

const Details = ({type, time, place, info}: DetailsProps) => {
  const ref = useRef<HTMLLIElement | null>(null);
  return (
    <li 
      ref={ref}
      className='p-8 my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col 
      items-center justify-between bg-primary dark:bg-primaryDark text-light dark:text-dark rounded-2xl border md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y:0,
        }}
        transition={{
          duration: 0.5,
          type:"spring",
        }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-light/75 dark:text-dark/75 xs:text-sm'>
          {time} | {place} </span>
        <p className='font-medium w-full md:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};

type Props = {}

const Education = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"],
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs-text-4xl md:mb-16'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
          style={{
            scaleY: scrollYProgress,
          }} 
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' 
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            type='理工学研究科 化学系'
            time='2015-2017'
            place='茨城大学大学院'
            info='基礎科学分野の履修であり、コンピュータサイエンス関連なし'
          />
          <Details
            type='理学部 理学科 化学コース'
            time='2011-2015'
            place='茨城大学'
            info='基礎科学分野の履修であり、コンピュータサイエンス関連なし'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
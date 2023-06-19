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
      items-center justify-between bg-green-100 rounded-2xl border'
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
        <h3 className='capitalize font-bold text-2xl'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {place} </span>
        <p className='font-medium w-full'>{info}</p>
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
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div 
          style={{
            scaleY: scrollYProgress,
          }} 
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' 
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
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
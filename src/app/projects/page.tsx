"use client"
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import PageLayout from '@/components/PageLayout';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import project1 from '../../../public/images/projects/crypto-screener-cover-image.jpg';
import { motion } from 'framer-motion';

type FeaturedProjectProps = {
  type: string,
  title: string,
  summery: string,
  img: StaticImageData,
  link: string,
  github: string,
};

type ProjectProps = {
  type: string,
  title: string,
  img: StaticImageData,
  link: string,
  github: string,
};

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summery, img, link, github}: FeaturedProjectProps) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} 
          className='w-full h-auto' 
          priority
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank"
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold text-dark dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summery}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank"
            className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold'
          >
            プロジェクトを見る
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}: ProjectProps) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-6 relative'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} 
          className='w-full h-auto' 
          priority
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank"
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold text-dark dark:text-light'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank"
            className='rounded-lg font-semibold underline underline-offset-2 text-dark dark:text-light'
          >
            プロジェクトを見る
          </Link>
          <Link href={github} target="_blank" className='w-8'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>
          JecarBell | Projects
        </title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center text-dark dark:text-light'>
        <PageLayout className="pt-16">
          <AnimatedText text="幅広いプロジェクト" className='mb-16' />
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedProject type='個人制作' title='技術ブログ' summery='Next.js、React、TailwindCSS、GraphQL(HyGraph)を利用したブログサイトです。' img={project1} link='/' github='/' />
            </div>
            <div className='col-span-6'>
              <Project type='個人制作' title='技術ブログ' img={project1} link='/' github='/' />
            </div>
            <div className='col-span-6'>
              <Project type='個人制作' title='技術ブログ' img={project1} link='/' github='/' />
            </div>
            <div className='col-span-12'>
              <FeaturedProject type='個人制作' title='技術ブログ' summery='Next.js、React、TailwindCSS、GraphQL(HyGraph)を利用したブログサイトです。' img={project1} link='/' github='/' />
            </div>
            <div className='col-span-6'>
              <Project type='個人制作' title='技術ブログ' img={project1} link='/' github='/' />
            </div>
            <div className='col-span-6'>
              <Project type='個人制作' title='技術ブログ' img={project1} link='/' github='/' />
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  )
}

export default projects;
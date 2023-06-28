"use client"
import AnimatedText from '@/components/AnimatedText';
import PageLayout from '@/components/PageLayout';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import Article1 from '../../../public/images/articles/pagination component in reactjs.jpg'
import Article2 from '../../../public/images/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion';
import Article3 from '../../../public/images/articles/create modal component in react using react portals.png'
import Article4 from '../../../public/images/articles/form validation in reactjs using custom react hook.png'
import Article5 from '../../../public/images/articles/smooth scrolling in reactjs.png'

type FeaturedArticleProps = {
  img: StaticImageData,
  title: string,
  minute: number,
  summary: string,
  link: string,
};

type ArticleProps = {
  img: StaticImageData,
  date: string,
  title: string,
  link: string,
};

type MovingImgProps = {
  img: StaticImageData,
  title: string,
  link: string,
};

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}: MovingImgProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLElement | null>(null);

  function handleMouse (event: { pageX: number }) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  }

  function handleMouseLeave (event: { pageX: number }) {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }

  return (
    <Link href={link} target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2
        className="capitalize text-xl font-semibold 
        hover:underline"
      >
        {title}
      </h2>
      <FramerImage  
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
        priority
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        style={{
          x: x,
          y: y,
        }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          
          transition: {duration: 0.2},
        }}
        src={img} 
        alt={title}
        ref={imgRef}
      />
    </Link>
  )
}

const Article = ({img, title, date, link}: ArticleProps) => {
  return (
    <motion.li 
      className="relative w-full p-4 py-6 my-4 rounded-xl 
      flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light 
      first:mt-0 border border-solid border-dark dark:border-light border-b-4"
      initial={{
        y: 200,
      }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        }
      }}
      viewport={{
        once: true,
      }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span
        className="text-primary dark:text-primaryDark font-semibold pl-4"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({img, title, minute, summary, link}: FeaturedArticleProps) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link
        href={link}
        target="_blank"
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} 
          className="w-full h-auto" 
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
      <Link 
        href={link}
        target="_blank"
      >
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold'>この記事は{minute}分で読めます。</span>
    </li>
  )
};


const articles = () => {
  return (
    <>
      <Head>
        <title>
          JecarBell | Articles
        </title>
        <meta name="description" content="any description" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center overflow-hidden text-dark dark:text-light'>
        <PageLayout className="pt-16">
          <AnimatedText text="言葉が世界を変える" className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle 
              img={Article1}
              title="Reactのカスタムページネーションを実装する"
              summary="Reactで使われるカスタムページネーションをゼロから実装する方法を解説します。初心者でも自力で取り組めるよう丁寧な解説を心がけています。"
              minute={10}
              link="/"
            />
            <FeaturedArticle 
              img={Article2}
              title="Reactのカスタムページネーションを実装する"
              summary="Reactで使われるカスタムページネーションをゼロから実装する方法を解説します。初心者でも自力で取り組めるよう丁寧な解説を心がけています。"
              minute={10}
              link="/"
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>すべての記事</h2>
          <ul>
            <Article 
              title="モーダルコンポーネントの作成"
              date="2023/3/22"
              link="/"
              img={Article3}
            />
            <Article 
              title="Reactjsのフォームバリデーションについて"
              date="2023/3/22"
              link="/"
              img={Article4}
            />
            <Article 
              title="スムーズにスクロールする機能について"
              date="2023/3/22"
              link="/"
              img={Article5}
            />
          </ul>
        </PageLayout>
      </main>
    </>
  );
};

export default articles;
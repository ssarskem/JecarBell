"use client"
import AnimatedText from '@/components/AnimatedText';
import PageLayout from '@/components/PageLayout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react'
import profilePic from "../../../public/images/profile/profile-jecarbell-2.png"
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

type AnimatedNumbersProps = {
  value: number;
};

const AnimatedNumbers = ({value}:AnimatedNumbersProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return (
    <span ref={ref}></span>
  )
}

const About = () => {
  return (
    <>
      <Head>
        <title>
          JecarBell | About
        </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <PageLayout className="pt-16">
          <AnimatedText text='世界を探索しよう！' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold text-dark/75 dark:text-light/75'>経歴</h2>
              <p className='font-medium'>
                はじめまして、JecarBellのあれすけです。茨城県出身で、1992年生まれ。大学と大学院では化学を専攻しました。学生時代に深く没頭し学んだ経験を今でも大切にしています。
              </p>
              <p className='font-medium'>
                初めての職は原子力エンジニアとして、核分裂の力を人々の生活に役立てるために奮闘していました。仕事は難しく、時には過酷でしたが、思考力と問題解決能力を高める大きな機会でもありました。
                一方、自分のPC関連のスキルを高めたいと感じ、インフラエンジニアに転職しました。新たな分野への挑戦は興奮と恐怖を同時に感じるものでしたが、挑戦する価値があったことは確かです。
              </p>
              <p className='font-medium'>
                次に、AWSエンジニアとして働くチャンスをつかみ、クラウドベースのインフラを構築し、保守するスキルを身につけました。セキュリティエンジニアとしての経験もあり、セキュリティの重要性とその複雑さを理解する機会に恵まれました。
              </p>
              <p className='font-medium'>
                現在はフルスタックエンジニアとして働いており、web開発の全領域にわたるスキルを活用しています。慎重でありながらも冒険を恐れず、未知の課題を解決することを楽しんでいます。
              </p>
              <p className='font-medium'>
                技術者として、各分野で新たな知識を獲得し、それを適用する経験を重ねてきました。この経験とスキルが、今後の仕事やプロジェクトにとって価値あるものとなるよう日々努力しています！
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
              <Image src={profilePic} alt="JecarBell" 
                className="w-full h-auto rounded-2xl" 
                priority
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={50} />+</span>
                <h2 className='font-medium text-xl capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={40} />+</span>
                <h2 className='font-medium text-xl capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={4} />+</span>
                <h2 className='font-medium text-xl capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </PageLayout>
      </main>
    </>
  );
};

export default About;
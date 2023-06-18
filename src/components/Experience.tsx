"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';

type DetailsProps = {
  position: string,
  company: string,
  companyLink: string,
  time: string,
  address: string,
  work: string,
}

const Details = ({position, company, companyLink, time, address, work}: DetailsProps) => {
  return (
    <li 
      className='p-8 my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col 
      items-center justify-between bg-green-100 rounded-2xl border'
    >
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a href={`${companyLink}`} target='_blank' className='text-primary capitalize'>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address} </span>
        <p className='font-medium w-full'>{work}</p>
      </div>
    </li>
  )
}

type Props = {}

const Experience = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"],
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div 
          style={{
            scaleY: scrollYProgress,
          }} 
          className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' 
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position='派遣ソフトウェアエンジニア'
            company='株式会社スタッフサービス'
            companyLink='https://www.staffservice.co.jp/company/'
            time='2023-現在'
            address='東京都'
            work='大手通信会社にて、通信要件確認用webポータル(1度に数千件のデータベース更新を受信・実行)の開発に従事。開発ではHTML, CSS, JavaScript(JQuery), Python(django), PostgresQLを使用。'
          />
          <Details
            position='派遣ソフトウェアエンジニア'
            company='株式会社スタッフサービス'
            companyLink='https://www.staffservice.co.jp/company/'
            time='2023-現在'
            address='東京都'
            work='大手通信会社にて、通信要件確認用webポータル(1度に数千件のデータベース更新を受信・実行)の開発に従事。開発ではHTML, CSS, JavaScript(JQuery), Python(django), PostgresQLを使用。'
          />
          <Details
            position='派遣ソフトウェアエンジニア'
            company='株式会社スタッフサービス'
            companyLink='https://www.staffservice.co.jp/company/'
            time='2023-現在'
            address='東京都'
            work='大手通信会社にて、通信要件確認用webポータル(1度に数千件のデータベース更新を受信・実行)の開発に従事。開発ではHTML, CSS, JavaScript(JQuery), Python(django), PostgresQLを使用。'
          />
          <Details
            position='派遣ソフトウェアエンジニア'
            company='株式会社スタッフサービス'
            companyLink='https://www.staffservice.co.jp/company/'
            time='2023-現在'
            address='東京都'
            work='大手通信会社にて、通信要件確認用webポータル(1度に数千件のデータベース更新を受信・実行)の開発に従事。開発ではHTML, CSS, JavaScript(JQuery), Python(django), PostgresQLを使用。'
          />
          <Details
            position='派遣ソフトウェアエンジニア'
            company='株式会社スタッフサービス'
            companyLink='https://www.staffservice.co.jp/company/'
            time='2023-現在'
            address='東京都'
            work='大手通信会社にて、通信要件確認用webポータル(1度に数千件のデータベース更新を受信・実行)の開発に従事。開発ではHTML, CSS, JavaScript(JQuery), Python(django), PostgresQLを使用。'
          />
          <Details
            position='派遣ソフトウェアエンジニア'
            company='株式会社スタッフサービス'
            companyLink='https://www.staffservice.co.jp/company/'
            time='2023-現在'
            address='東京都'
            work='大手通信会社にて、通信要件確認用webポータル(1度に数千件のデータベース更新を受信・実行)の開発に従事。開発ではHTML, CSS, JavaScript(JQuery), Python(django), PostgresQLを使用。'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
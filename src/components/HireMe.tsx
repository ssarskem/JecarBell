import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

type Props = {}

const HireMe = (props: Props) => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />

        <Link href="mailto:shotas7788@ssarskem.club" className='flex items-center justify-center 
        absolute left-1/2 top-1/2 -translate-x-1/2 
        -translate-y-1/2 bg-dark text-light shadow-md 
        border border-solid border-dark w-[60%] h-[60%] 
        rounded-full font-semibold hover:bg-light 
        dark:bg-light dark:text-dark hover:text-dark 
        hover:dark:bg-dark hover:dark:text-light 
        hover:dark:border-light'>
          相談はこちら
        </Link>
      </div>
    </div>
  )
}

export default HireMe
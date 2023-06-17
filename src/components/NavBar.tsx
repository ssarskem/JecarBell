"use client"
import Link from 'next/link';
import React from 'react'
import Logo from './Logo';
import { usePathname } from 'next/navigation'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({href, title, className=""}: CustomLinkProps): React.ReactElement => {
  const pathname = usePathname()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span 
        className={`
          h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300
          ${pathname === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = (): React.ReactElement => {
  return (
    <>
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="プロジェクト" className='mx-4' />
          <CustomLink href="/articles" title="記事一覧" className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a
            href="https://twitter.com" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3'
          >
            <TwitterIcon />
          </motion.a>
          <motion.a 
            href="https://github.com" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3'
          >
            <GithubIcon />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-6 mr-3'
          >
            <LinkedInIcon />
          </motion.a>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
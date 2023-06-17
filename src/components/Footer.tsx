import React from 'react';
import PageLayout from './PageLayout';
import Link from 'next/link';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <PageLayout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build With <span className='text-primary text-2xl px-1'>&#9825;</span>
          by&nbsp; <Link href="https://jevr-bell.club" className='underline underline-offset-2' target={"_blank"}>JecarBell</Link>
        </div>
        <Link href="https://jevr-bell.club" className='underline underline-offset-2' target={"_blank"}>Say Hello</Link>
      </PageLayout>
    </footer>
  );
};

export default Footer;
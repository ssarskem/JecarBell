import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/profile-jecarbell.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <div className='flex items-center text-dark w-full min-h-screen'>
      <PageLayout className='pt-0'>
        <div className="flex items-center justify-between w-full">
          <div className='w-1/2'>
            <Image src={profilePic} alt="JecarBell" 
              className='w-full h-auto'
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
            />
          </div>
          <div className='w-1/2'>
            <AnimatedText text="イメージを現実に" />
            <p className='my-4 text-base font-medium dark:text-light'>
              フルスタックエンジニアとして活動中。フロントエンド・バックエンド・クラウドインフラ等あらゆる領域に対応し、理想のシステムを構築します。
            </p>
            <div className='flex itens-center self-start mt-2'>
              <Link href="/dummy.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
                download={true}
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link href="mailto:shotas7788@ssarskem.club" target={"_blank"}
                className='flex items-center ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>

      <HireMe />
      <div className='absolute right-8 bottom-8 inline-block w-24'>
        <Image src={lightBulb} alt="jevr-bell" className='w-full h-auto'  />
      </div>
    </div>
  )
}

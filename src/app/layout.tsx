/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import './globals.css';
import Head from "next/head";
import Script from 'next/script'
import { notojp } from './fonts';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'JecarBell',
  description: 'JecarBell page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${notojp.variable} font-notojp bg-light dark:bg-dark w-full min-h-screen`}>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import { Montserrat, Noto_Sans_JP, Kiwi_Maru } from 'next/font/google'

export const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: "swap",
  variable: "--font-montserrat",
});

export const notojp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-notojp",
});

export const kiwimaru = Kiwi_Maru({
  subsets: ['latin'],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-kiwimaru",
});

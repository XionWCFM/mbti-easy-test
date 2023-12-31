import Providers from '@/components/provider/providers';
import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import DialogContainer from '@/components/provider/dialog-container';

export const metadata: Metadata = {
  title: 'BaeDda MBTI',
  description: 'baeddabang ',
};

const notosans = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notosans.className}>
        <Providers>
          {children}
          <DialogContainer />
        </Providers>
      </body>
    </html>
  );
}

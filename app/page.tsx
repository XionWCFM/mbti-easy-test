import MainPage from '@/components/pages/main-page';
import Numberpage from '@/components/pages/number-page';
import AccoridionContainer from '@/components/provider/accoridion-container';
import CircleProgressContainer from '@/components/provider/circle-progress-container';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" ">
      <Link href={'/1'}>검사하기</Link>
      <CircleProgressContainer />
      <AccoridionContainer />
      <MainPage />
      <Numberpage />
    </main>
  );
}

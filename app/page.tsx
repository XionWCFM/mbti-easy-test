import MainPage from '@/components/pages/main-page';
import Numberpage from '@/components/pages/number-page';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" ">
      <Link href={'/1'}>검사하기</Link>
      <MainPage />
      <Numberpage />
    </main>
  );
}

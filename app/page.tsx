import MainPage from '@/components/pages/main-page';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" ">
      <Link href={'/1'}>검사하기</Link>
    </main>
  );
}

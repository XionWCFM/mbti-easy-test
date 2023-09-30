'use client';
import { mbtiQuestionAtom, testAtom, testSetAtom } from '@/store';
import { useAtom } from 'jotai';
import React from 'react';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const [mbti, setMbti] = useAtom(mbtiQuestionAtom);
  const [test, setTest] = useAtom(testAtom);
  const [_, setTesting] = useAtom(testSetAtom);

  console.log(mbti);
  return (
    <div className="">
      <div className="">{test}테스트 값</div>
      <button onClick={() => setTesting(2)}>setTest</button>
    </div>
  );
};

export default MainPage;

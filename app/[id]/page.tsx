import React from 'react';
import { mbtiQuestionData } from '@/business/datas/mbti-data';
import z from 'zod';
import { minusOne } from '@/utils/common/minus-one';

interface pageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: pageProps) => {
  const len = mbtiQuestionData.length;
  const pageNum = minusOne(Number(params.id));
  const validation = z.number().max(len).safeParse(pageNum);
  if (validation.success) {
    console.log(validation.data);
  } else {
    console.log(validation.error);
  }
  return <div>page</div>;
};

export default page;

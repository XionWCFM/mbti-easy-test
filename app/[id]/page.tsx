import React from 'react';
import { mbtiQuestionData } from '@/business/datas/mbti-question-data';
import z from 'zod';
import { minusOne } from '@/utils/common/minus-one';
import AnswerButton from '@/components/client/mbti/answer-button';

interface pageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: pageProps) => {
  const len = mbtiQuestionData.length;
  const pageNum = minusOne(Number(params.id));
  const validation = z.number().max(len).safeParse(pageNum);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div>
      {validation.success && (
        <div className="">
          <div className="">{mbtiQuestionData[pageNum].question}</div>
          <div className="">
            {mbtiQuestionData[pageNum].choices.map((item, idx) => (
              <AnswerButton
                key={item.label}
                value={item.value}
                pageNum={pageNum}
              >
                {item.label}
              </AnswerButton>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

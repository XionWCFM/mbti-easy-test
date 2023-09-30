'use client';
import useSetAnswerMbti from '@/hooks/business-hooks/use-set-answer-mbti';
import { UpdateAnswer, mbtiAnswerAtom } from '@/store';
import { useAtom } from 'jotai';
import React, { ComponentPropsWithRef, Ref } from 'react';

interface AnswerButtonProps extends ComponentPropsWithRef<'button'> {
  update: UpdateAnswer;
}

const AnswerButton = (
  { children, update }: AnswerButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  const setAnswer = useSetAnswerMbti();
  const onClickHandler = () => setAnswer(update);
  const [answer, _] = useAtom(mbtiAnswerAtom);
  console.log(answer);
  return (
    <button ref={ref} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default React.forwardRef(AnswerButton);

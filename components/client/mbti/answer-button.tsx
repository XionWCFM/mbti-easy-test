'use client';
import useSetAnswerMbti from '@/hooks/business-hooks/use-set-answer-mbti';
import { UpdateAnswer, getPersonalitiesResult, mbtiAnswerAtom } from '@/store';
import { moveToNextPage } from '@/utils/common/move-to-next-page';
import { useAtom } from 'jotai';
import Link from 'next/link';
import React, { ComponentPropsWithRef, Ref } from 'react';

interface AnswerButtonProps extends ComponentPropsWithRef<'button'> {
  indexLen: number;
  update: UpdateAnswer;
}

const AnswerButton = (
  { children, update, indexLen }: AnswerButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  const setAnswer = useSetAnswerMbti();
  const numberPage = Number(update.pageNum);
  const path = indexLen > numberPage ? moveToNextPage(numberPage) : '/';
  const onClickHandler = () => setAnswer(update);
  const [a, _] = useAtom(mbtiAnswerAtom);
  const [c] = useAtom(getPersonalitiesResult);
  console.log(a);
  console.log(c);
  return (
    <button ref={ref} onClick={onClickHandler}>
      <Link href={path}>{children}</Link>
    </button>
  );
};

export default React.forwardRef(AnswerButton);

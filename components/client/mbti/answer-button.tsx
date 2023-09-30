'use client';
import { CategoryOfMBTI } from '@/business/types/mbti-types';
import React, { ComponentPropsWithRef, Ref } from 'react';

interface AnswerButtonProps extends ComponentPropsWithRef<'button'> {
  value: CategoryOfMBTI;
  pageNum: number;
}

const AnswerButton = (
  { children, value, pageNum }: AnswerButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  console.log(value);
  console.log(pageNum);
  
  return <button ref={ref}>{children}</button>;
};

export default React.forwardRef(AnswerButton);

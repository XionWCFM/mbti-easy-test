'use client';
import useAnimation from '@/hooks/use-animation';
import React from 'react';

interface FadeInProviderProps {
  children: React.ReactNode;
  index?: number;
}

const FadeInProvider = ({ children }: FadeInProviderProps) => {
  const [targetRef] = useAnimation(['smooth']);

  return <div ref={targetRef}>{children}</div>;
};

export default FadeInProvider;

'use client';
import { Provider } from 'jotai';
import React from 'react';

interface providersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: providersProps) => {
  return <Provider>{children}</Provider>;
};

export default Providers;

'use client';
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useEffect } from 'react';

interface pageProps {}
// 프로그레스바 구현
const Numberpage = ({}: pageProps) => {
  const { scrollYProgress } = useScroll();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (prev) => Math.floor(prev));

  useEffect(() => {
    const controls = animate(count, 100);
    return controls.stop;
  }, [count]);

  return (
    <>
      <motion.div>{rounded}</motion.div>

      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className=" fixed top-0 left-0 right-0 h-[10px] bg-red-600"
      ></motion.div>
      <div className=" min-h-screen">dsa</div>
    </>
  );
};

export default Numberpage;

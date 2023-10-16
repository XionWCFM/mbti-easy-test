'use client';
import React from 'react';
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import SwitchContainer from '../provider/switch-container';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 0.5], [0, 1]);

  const clipboardIconVariants = {
    clicked: { opacity: 0 },
    unClicked: { opacity: 1 },
  };

  const checkmarkIconVariants = {
    clicked: { pathLength: 1 },
    unClicked: { pathLength: 0 },
  };
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div className="">
      <motion.div
        initial={{
          x: 0,
          rotate: 45,
        }}
        animate={{
          x: 1000,
          rotate: 270,
        }}
        transition={{
          type: 'spring',
          duration: 100,
        }}
        style={{ background: 'pink', width: '20px', height: '20px' }}
      ></motion.div>
      <motion.button
        variants={motionVariants}
        initial="rest"
        whileHover={'hover'}
        whileTap={'pressed'}
      >
        CLick me
      </motion.button>
      <motion.div
        onClick={() => setIsClicked((s) => !s)}
        animate={isClicked ? 'clicked' : 'unClicked'}
        variants={clipboardIconVariants}
      >
        안녕하세요
      </motion.div>
      <SwitchContainer />
    </div>
  );
};

export default MainPage;

const motionVariants: Variants = {
  hover: {
    scale: 1.5,
  },
  pressed: {
    scale: 0.5,
  },
  rest: {
    scale: 1,
  },
};

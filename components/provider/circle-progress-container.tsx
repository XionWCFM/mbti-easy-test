'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import React from 'react';
const CircleProgressContainer = () => {
  return (
    <div className=" flex justify-center items-center bg-gray-100">
      <motion.div
        className=" w-[300px] h-[300px] flex justify-center items-center transition-all duration-200 rounded-full"
        initial={{
          background: 'conic-gradient(red 0% , gray 0%, gray 0%)',
        }}
        animate={{
          background: `conic-gradient(red 70% , gray 0%, gray 0%)`,
        }}
        transition={{
          duration: 3,
          type: 'spring',
        }}
      >
        <motion.div className=" w-[80%] h-[80%] rounded-full  bg-white flex justify-center items-center"></motion.div>
      </motion.div>
    </div>
  );
};

export default CircleProgressContainer;

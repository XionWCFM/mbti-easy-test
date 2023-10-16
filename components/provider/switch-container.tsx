import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

interface SwitchContainerProps {}

const SwitchContainer = ({}: SwitchContainerProps) => {
  return (
    <form action="">
      <div className=" flex items-center">
        <SwitchPrimitive.Root
          className="w-[42px] h-[25px] rounded-full relative bg-purple-700  data-[state=checked]:bg-black outline-none cursor-default"
          id="airplane-mode"
        >
          <SwitchPrimitive.Thumb
            className={`
          block w-[21px] h-[21px] bg-white rounded-full 
          transition-transform duration-100 
          translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]
          `}
          />
        </SwitchPrimitive.Root>
      </div>
    </form>
  );
};

export default SwitchContainer;

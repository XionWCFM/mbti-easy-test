import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

interface SwitchProps extends React.ComponentPropsWithRef<'div'> {
  isCheck: boolean;
}

const Switcher = (
  { isCheck, ...props }: SwitchProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <div
      data-state={isCheck}
      className=" w-[20px] h-[12px] rounded-full flex items-center bg-gray-30 data-[state=true]:bg-primary-100 transition-all duration-300 group"
      {...props}
    >
      <button className=" w-[50%] h-[10px] bg-white rounded-full transition-all duration-300 translate-x-0.5 will-change-transform group-data-[state=true]:translate-x-[calc(100%-0.125rem)]"></button>
    </div>
  );
};

export default Switcher;

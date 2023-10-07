'use client';
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useAtom } from 'jotai';
import { dialogOpenAtom } from '@/store';

interface DialogContainerProps {}

const DialogContainer = ({}: DialogContainerProps) => {
  const [open, setOpen] = useAtom(dialogOpenAtom);
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className=" data-[state=open]:animate-overlayShow z-30 fixed ba bg-neutral-60 backdrop-blur inset-0"></DialogPrimitive.Overlay>
        <DialogPrimitive.Content className="fixed w-full h-[500px] top-0 left-0 right-0 bottom-0 bg-black z-40 data-[state=open]:animate-overlayShow">
          <div className=" ">이거 생성되는거 맞음?</div>
          <DialogPrimitive.Close className=" bg-red-500 w-[200px] h-[100px]">
            <div className="">이거누르면 지워짐ㅋ</div>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default DialogContainer;

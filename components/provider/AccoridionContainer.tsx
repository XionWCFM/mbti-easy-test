'use client';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import React from 'react';

interface AccoridionContainerProps {}

const AccoridionContainer = ({}: AccoridionContainerProps) => {
  return (
    <div>
      <AccordionPrimitive.Root type="single" collapsible>
        <AccordionPrimitive.Item value="item-1">
          <AccordionPrimitive.Trigger>누르면 열려요</AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content className=" data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden bg-purple-600 ">
            여기 안에 콘텐츠가 들어가요
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      </AccordionPrimitive.Root>
    </div>
  );
};

export default AccoridionContainer;

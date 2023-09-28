import React from 'react';

interface pageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: pageProps) => {
  console.log(params);
  return <div>page</div>;
};

export default page;

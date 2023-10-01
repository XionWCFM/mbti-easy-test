export const moveToNextPage = (prevPage: string | number) => {
  const numberPage = Number(prevPage);
  return `/${numberPage + 2}`;
};

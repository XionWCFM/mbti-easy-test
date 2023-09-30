export const minusOne = (num: number) => {
  if (num - 1 > -1) {
    return num - 1;
  }
  throw new Error('0 이하의 값을 넣으시면 안됩니다.')
};

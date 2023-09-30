import { setMbtiAnswerAtom } from '@/store';
import { useSetAtom } from 'jotai';

const useSetAnswerMbti = () => {
  const setAnswer = useSetAtom(setMbtiAnswerAtom);
  return setAnswer;
};

export default useSetAnswerMbti;
